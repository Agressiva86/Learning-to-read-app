import type { WordEntry } from "../data/words";
import { pageLevelLabel, type SheetDensity } from "../lib/pages";
import { Illustration } from "./Illustration";
import { SyllableRow } from "./SyllableRow";

const VOWELS = new Set(["a", "ą", "e", "ę", "i", "o", "ó", "u", "y"]);

export function Sheet({
  words,
  page,
  total,
  density,
}: {
  words: WordEntry[];
  page: number;
  total: number;
  density: SheetDensity;
}) {
  const rows = Math.max(1, Math.ceil(words.length / 2));
  return (
    <article className={`sheet density-${density}`} lang="pl">
      <header className="sheet-head">
        <strong>Czytam sylabami</strong>
        <span>{pageLevelLabel(words)}</span>
        <span>
          kartka {page} / {total}
        </span>
      </header>
      <div className="sheet-grid" style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}>
        {words.map((word) => (
          <div className="cell" key={word.id} style={words.length === 1 ? { gridColumn: "1 / -1" } : undefined}>
            <div className="art">
              <Illustration id={word.illustration} label={word.word} />
            </div>
            <WordPractice word={word.word} syllables={word.syllables} density={density} />
          </div>
        ))}
      </div>
      <footer className="sheet-foot">Pokoloruj rysunek, przeczytaj i przepisz słowo.</footer>
    </article>
  );
}

function WordPractice({
  word,
  syllables,
  density,
}: {
  word: string;
  syllables: string[];
  density: SheetDensity;
}) {
  const letters = Array.from(word);
  const wordSize = textSize(word.length, density, density === 4 ? 18 : 14);
  const letterSize = textSize(letters.length, density, density === 4 ? 13 : 10);

  return (
    <div className="practice">
      <p className="trace-line" aria-hidden="true">
        <span className="trace-word" style={{ fontSize: `${wordSize}pt` }}>
          {word}
        </span>
      </p>
      <SyllableRow syllables={syllables} density={density} />
      <div className={letters.length > 8 ? "letter-row many" : "letter-row"}>
        {letters.map((letter, index) => (
          <span
            className={VOWELS.has(letter) ? "letter vowel" : "letter"}
            style={{ fontSize: `${letterSize}pt` }}
            key={`${letter}-${index}`}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

function textSize(length: number, density: SheetDensity, base: number) {
  const limit = density === 4 ? 8 : 7;
  return Math.max(base - 4, base - Math.max(0, length - limit));
}
