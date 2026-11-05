const VOWELS = new Set(["a", "ą", "e", "ę", "i", "o", "ó", "u", "y"]);

const DIGRAPHS = new Set(["dź", "dż", "dz", "cz", "ch", "sz", "rz"]);

/** Pary spółgłosek, które w polskim mogą zaczynać sylabę i zostają razem. */
const PREFERRED2 = new Set([
  "pr", "br", "tr", "dr", "kr", "gr", "fr", "chr",
  "pl", "bl", "kl", "gl", "fl", "chl",
  "pł", "bł", "tł", "dł", "kł", "gł", "chł",
  "wr", "prz", "brz", "trz", "drz", "krz", "grz", "chrz",
  "sp", "st", "sk", "zb", "zd", "zg",
  "św", "gw", "kw", "tw", "dw", "sw", "zw", "chw",
  "mr", "ml", "mł",
]);

const PREFERRED3 = new Set([
  "str", "spr", "skr", "zdr", "zgr", "skrz", "spł", "skł", "strz", "zbr",
]);

const POLISH_WORD = /^[a-ząćęłńóśźż]+$/i;

export function isPolishWord(word: string): boolean {
  return POLISH_WORD.test(word.trim());
}

type Tok = { t: string; v: boolean };

function tokenize(word: string): Tok[] {
  const raw: string[] = [];
  const s = word.toLowerCase();
  for (let i = 0; i < s.length; ) {
    const two = s.slice(i, i + 2);
    if (DIGRAPHS.has(two)) {
      raw.push(two);
      i += 2;
    } else {
      raw.push(s[i] ?? "");
      i += 1;
    }
  }

  const toks: Tok[] = [];
  for (let i = 0; i < raw.length; i++) {
    const t = raw[i] ?? "";
    const next = raw[i + 1];
    const next2 = raw[i + 2];
    if (!VOWELS.has(t) && next === "i" && next2 && VOWELS.has(next2)) {
      toks.push({ t: t + "i", v: false });
      i += 1;
      continue;
    }
    if (t === "i" && next && VOWELS.has(next)) {
      const prev = toks[toks.length - 1];
      if (prev && !prev.v) prev.t += "i";
      else toks.push({ t: "i", v: true });
      continue;
    }
    toks.push({ t, v: VOWELS.has(t) });
  }
  return toks;
}

function onsetCount(cluster: Tok[]): number {
  const texts = cluster.map((c) => c.t);
  if (texts.length >= 3 && PREFERRED3.has(texts.slice(-3).join(""))) return 3;
  if (texts.length >= 2 && PREFERRED2.has(texts.slice(-2).join(""))) return 2;
  return Math.min(1, texts.length);
}

/** Proponowany podział na sylaby. Rodzic może go poprawić przed zapisem. */
export function splitSyllables(word: string): string[] {
  const clean = word.trim().toLowerCase();
  if (!clean) return [];
  const toks = tokenize(clean);
  const nuclei = toks.flatMap((tok, index) => (tok.v ? [index] : []));
  if (nuclei.length === 0) return [clean];

  const parts: string[] = [];
  let start = 0;
  for (let n = 0; n < nuclei.length; n++) {
    const nuc = nuclei[n] ?? 0;
    if (n === nuclei.length - 1) {
      parts.push(toks.slice(start).map((tok) => tok.t).join(""));
      break;
    }
    const nextNuc = nuclei[n + 1] ?? toks.length;
    const cluster = toks.slice(nuc + 1, nextNuc);
    const keep = cluster.length - onsetCount(cluster);
    const end = nuc + 1 + keep;
    parts.push(toks.slice(start, end).map((tok) => tok.t).join(""));
    start = end;
  }
  return parts.filter(Boolean);
}

export function parseSyllableInput(input: string): string[] {
  return input
    .toLowerCase()
    .split(/[-–—\s·•|/]+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function foldPolish(value: string): string {
  const map: Record<string, string> = {
    ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z",
  };
  return value.toLowerCase().replace(/[ąćęłńóśźż]/g, (ch) => map[ch] ?? ch);
}

export function syllablesMatchWord(word: string, syllables: string[]): boolean {
  const letters = (value: string) => foldPolish(value).replace(/[^a-z]/g, "");
  return letters(syllables.join("")) === letters(word);
}
