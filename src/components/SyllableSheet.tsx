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
                    <Scissors />
                    {syllable}
                  </span>
                ))}
              </div>
            ))}
          </section>
        ))}
      </div>
      <footer className="sheet-foot">Przeczytaj sylaby, a potem wytnij je wzdłuż kropek.</footer>
    </article>
  );
}

function Scissors() {
  return (
    <svg className="syllable-cut" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="8" cy="8" r="5.2" fill="#fff" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="8" cy="24" r="5.2" fill="#fff" stroke="currentColor" strokeWidth="2.4" />
      <path d="M12.2 11.2 28 27.2M12.2 20.8 28 4.8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="14.2" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}
