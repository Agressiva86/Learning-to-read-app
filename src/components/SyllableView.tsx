import { useRef, useState } from "react";
import { SYLLABLE_GROUPS, syllablePages } from "../data/syllable-chart";
import { SyllableSheet } from "./SyllableSheet";

const pages = syllablePages();
const syllableCount = SYLLABLE_GROUPS.reduce((sum, item) => sum + item.rows.reduce((rows, row) => rows + row.length, 0), 0);

export function SyllableView({
  busy,
  setBusy,
  setNotice,
}: {
  busy: { current: number; total: number } | null;
  setBusy: (value: { current: number; total: number } | null) => void;
  setNotice: (value: string | null) => void;
}) {
  const exportRef = useRef<HTMLDivElement>(null);
  const [localNotice, setLocalNotice] = useState<string | null>(null);

  async function download(onlyIndex?: number) {
    const nodes = Array.from(exportRef.current?.querySelectorAll<HTMLElement>(".sheet") ?? []);
    const chosen = onlyIndex == null ? nodes : nodes.filter((_, index) => index === onlyIndex);
    if (chosen.length === 0) return;
    setNotice(null);
    setLocalNotice(null);
    setBusy({ current: 0, total: chosen.length });
    try {
      const name = onlyIndex == null ? "sylaby-a4.pdf" : `sylaby-kartka-${onlyIndex + 1}.pdf`;
      const { downloadSheetsPdf } = await import("../lib/pdf");
      await downloadSheetsPdf(chosen, name, (current, total) => setBusy({ current, total }));
    } catch {
      const message = "Nie udało się zbudować pliku PDF. Użyj Drukuj i w oknie drukowania wybierz „Zapisz jako PDF”.";
      setNotice(message);
      setLocalNotice(message);
    } finally {
      setBusy(null);
    }
  }

  return (
    <main className="syllable-page">
      <div className="toolbar app-chrome">
        <div>
          <h2>Sylaby</h2>
          <p>
            {SYLLABLE_GROUPS.length} kategorii · {syllableCount} sylab · {pages.length} {pluralPages(pages.length)} A4
          </p>
        </div>
        <div className="toolbar-controls">
          <button type="button" className="btn btn-primary" disabled={busy !== null} onClick={() => download()}>
            Pobierz PDF
          </button>
          <button type="button" className="btn btn-leaf" disabled={pages.length === 0} onClick={() => window.print()}>
            Drukuj
          </button>
        </div>
      </div>
      {localNotice ? <p className="notice app-chrome">{localNotice}</p> : null}
      <div className="syllable-board app-chrome">
        {SYLLABLE_GROUPS.map((item) => (
          <section className="syllable-card" key={item.id}>
            <h3>{item.title}</h3>
            {item.rows.map((row) => (
              <div className="syllable-row-grid" key={row.join("-")}>
                {row.map((syllable) => (
                  <span className="syllable-chip" key={syllable}>
                    {syllable}
                  </span>
                ))}
              </div>
            ))}
          </section>
        ))}
      </div>
      <div className="sheet-stack">
        {pages.map((page, index) => (
          <div className="sheet-frame" key={page.map((item) => item.id).join("-")}>
            <div className="sheet-scale-slot">
              <SyllableSheet groups={page} page={index + 1} total={pages.length} />
            </div>
            <button type="button" className="sheet-download app-chrome" onClick={() => download(index)} disabled={busy !== null}>
              <span className="sheet-download-icon" aria-hidden="true">
                <DownloadIcon />
              </span>
              <span className="sheet-download-copy">
                <span className="sheet-download-title">Pobierz tę kartkę</span>
                <span className="sheet-download-meta">Plik PDF, format A4</span>
              </span>
            </button>
          </div>
        ))}
      </div>
      <div className="export-host" ref={exportRef} aria-hidden="true">
        {pages.map((page, index) => (
          <SyllableSheet key={page.map((item) => item.id).join("-")} groups={page} page={index + 1} total={pages.length} />
        ))}
      </div>
    </main>
  );
}

function pluralPages(count: number): string {
  if (count === 1) return "kartka";
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "kartki";
  return "kartek";
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M12 4v9.2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8.2 10.4 12 14.2l3.8-3.8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 18.5h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
