import type { SyllableGroup } from "../data/syllable-chart";

export function SyllableSheet({
  groups,
  page,
  total,
}: {
  groups: SyllableGroup[];
  page: number;
  total: number;
}) {
  return (
    <article className="sheet syllable-sheet" lang="pl">
      <header className="sheet-head">
        <strong>Sylaby</strong>
        <span>
          kartka {page} / {total}
        </span>
      </header>
      <div className="syllable-sheet-body">
        {groups.map((item) => (
          <section className="syllable-block" key={item.id}>
            <h2>{item.title}</h2>
            {item.rows.map((row) => (
              <div className="syllable-print-row" key={row.join("-")}>
                {row.map((syllable) => (
                  <span className="syllable-print" key={syllable}>
                    {syllable}
                  </span>
                ))}
              </div>
            ))}
          </section>
        ))}
      </div>
      <footer className="sheet-foot">Przeczytaj sylaby.</footer>
    </article>
  );
}
