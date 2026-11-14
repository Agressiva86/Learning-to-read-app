export type SyllableGroup = {
  id: string;
  title: string;
  rows: string[][];
};

const PLAIN = ["a", "e", "i", "o", "u", "y"];
const NASAL = ["ą", "ę"];

function group(id: string, title: string, onset: string, vowels: string[]): SyllableGroup {
  return {
    id,
    title,
    rows: [vowels.map((vowel) => `${onset}${vowel}`)],
  };
}

function withNasal(id: string, title: string, onset: string): SyllableGroup {
  return {
    id,
    title,
    rows: [PLAIN.map((vowel) => `${onset}${vowel}`), NASAL.map((vowel) => `${onset}${vowel}`)],
  };
}

export const SYLLABLE_GROUPS: SyllableGroup[] = [
  withNasal("b", "Sylaby na B", "B"),
  withNasal("c", "Sylaby na C", "C"),
  group("cz", "Sylaby na CZ", "Cz", PLAIN),
  withNasal("d", "Sylaby na D", "D"),
  group("dz", "Sylaby na DZ", "Dz", PLAIN),
  {
    id: "dz-acute",
    title: "Sylaby na DŹ",
    rows: [["Dzia", "Dzie", "Dzi", "Dzio", "Dziu"]],
  },
  group("dzh", "Sylaby na DŻ", "Dż", PLAIN),
  withNasal("f", "Sylaby na F", "F"),
  withNasal("g", "Sylaby na G", "G"),
  withNasal("h", "Sylaby na H", "H"),
  group("ch", "Sylaby na CH", "Ch", PLAIN),
  withNasal("j", "Sylaby na J", "J"),
  withNasal("k", "Sylaby na K", "K"),
  withNasal("l", "Sylaby na L", "L"),
  withNasal("ll", "Sylaby na Ł", "Ł"),
  withNasal("m", "Sylaby na M", "M"),
  withNasal("n", "Sylaby na N", "N"),
  withNasal("p", "Sylaby na P", "P"),
  withNasal("r", "Sylaby na R", "R"),
  {
    id: "rz",
    title: "Sylaby na RZ (i Ż)",
    rows: [PLAIN.map((vowel) => `Rz${vowel}`), PLAIN.map((vowel) => `Ż${vowel}`)],
  },
  withNasal("s", "Sylaby na S", "S"),
  group("sz", "Sylaby na SZ", "Sz", PLAIN),
  withNasal("t", "Sylaby na T", "T"),
  withNasal("w", "Sylaby na W", "W"),
  withNasal("z", "Sylaby na Z", "Z"),
];

const TITLE_MM = 8;
const ROW_MM = 18;
const GROUP_GAP_MM = 4;
const PAGE_MM = 236;

function groupHeight(item: SyllableGroup): number {
  return TITLE_MM + item.rows.length * ROW_MM + GROUP_GAP_MM;
}

export function syllablePages(groups: SyllableGroup[] = SYLLABLE_GROUPS): SyllableGroup[][] {
  const pages: SyllableGroup[][] = [];
  let current: SyllableGroup[] = [];
  let used = 0;
  for (const item of groups) {
    const height = groupHeight(item);
    if (current.length > 0 && used + height > PAGE_MM) {
      pages.push(current);
      current = [];
      used = 0;
    }
    current.push(item);
    used += height;
  }
  if (current.length > 0) pages.push(current);
  const last = pages.at(-1);
  const previous = pages.at(-2);
  if (last && previous && last.length === 1 && previous.length > 1) {
    const moved = previous.pop();
    if (moved) last.unshift(moved);
  }
  return pages;
}
