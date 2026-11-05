import type { WordEntry } from "../data/words";
import { pageLevelLabel, type SheetDensity } from "../lib/pages";
import { Illustration } from "./Illustration";
import { SyllableRow } from "./SyllableRow";

export function Sheet({
  words,
  page,
  total,
  density,
  showWord,
}: {
  words: WordEntry[];
  page: number;
  total: number;
  density: SheetDensity;
  showWord: boolean;
}) {
  const rows = Math.max(1, Math.ceil(words.length / 2));
  return (
    <article className="sheet" lang="pl">
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
            <SyllableRow syllables={word.syllables} density={density} />
            {showWord ? <p className="whole-word">{word.word}</p> : null}
          </div>
        ))}
      </div>
      <footer className="sheet-foot">Pokoloruj rysunek i przeczytaj sylaby.</footer>
    </article>
  );
}
