import { useMemo, useRef, useState } from "react";
import { Illustration } from "./components/Illustration";
import { Sheet } from "./components/Sheet";
import { WordForm } from "./components/WordForm";
import type { WordEntry } from "./data/words";
import { mergeWords } from "./data/words";
import {
  DIFFICULTY_HINT,
  DIFFICULTY_LABEL,
  DIFFICULTY_ORDER,
  levelOf,
  type Difficulty,
} from "./lib/difficulty";
import { buildPages, type SheetDensity } from "./lib/pages";
import { foldPolish } from "./lib/syllables";
import { loadCustomWords, saveCustomWords } from "./lib/storage";

type View = "karty" | "slowa";
type Filter = "wszystkie" | Difficulty;

const STARTER = ["mama", "tata", "woda", "mleko"];

export function App() {
  const [custom, setCustom] = useState<WordEntry[]>(() => loadCustomWords());
  const [view, setView] = useState<View>("karty");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("wszystkie");
  const [selected, setSelected] = useState<Set<string>>(() => new Set(STARTER));
  const [density, setDensity] = useState<SheetDensity>(4);
  const [separateLevels, setSeparateLevels] = useState(true);
  const [showWord, setShowWord] = useState(false);
  const [editing, setEditing] = useState<WordEntry | null>(null);
  const [adding, setAdding] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<string | null>(null);
  const [busy, setBusy] = useState<{ current: number; total: number } | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const exportRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const words = useMemo(() => mergeWords(custom), [custom]);
  const hasOther = words.some((word) => levelOf(word) === "inne");

  const visible = useMemo(() => {
    const folded = foldPolish(query.trim());
    return words.filter((word) => {
      const level = levelOf(word);
      if (filter !== "wszystkie" && level !== filter) return false;
      if (!folded) return true;
      return foldPolish(word.word).includes(folded) || word.syllables.some((part) => foldPolish(part).includes(folded));
    });
  }, [words, query, filter]);

  const selectedWords = useMemo(() => {
    return words
      .filter((word) => selected.has(word.id))
      .sort((a, b) => {
        const byLevel = DIFFICULTY_ORDER.indexOf(levelOf(a))
          - DIFFICULTY_ORDER.indexOf(levelOf(b));
        if (byLevel !== 0) return byLevel;
        return words.indexOf(a) - words.indexOf(b);
      });
  }, [words, selected]);

  const pages = useMemo(
    () => buildPages(selectedWords, density, separateLevels),
    [selectedWords, density, separateLevels],
  );

  function toggle(id: string) {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleGroup(group: WordEntry[]) {
    setSelected((current) => {
      const next = new Set(current);
      const allOn = group.every((word) => next.has(word.id));
      for (const word of group) {
        if (allOn) next.delete(word.id);
        else next.add(word.id);
      }
      return next;
    });
  }

  function selectVisible() {
    setSelected((current) => {
      const next = new Set(current);
      for (const word of visible) next.add(word.id);
      return next;
    });
  }

  function clearVisible() {
    setSelected((current) => {
      const next = new Set(current);
      for (const word of visible) next.delete(word.id);
      return next;
    });
  }

  function persist(next: WordEntry[]) {
    setCustom(next);
    saveCustomWords(next);
  }

  function saveWord(word: WordEntry) {
    const next = custom.some((item) => item.id === word.id)
      ? custom.map((item) => (item.id === word.id ? word : item))
      : [...custom, word];
    persist(next);
    setSelected((current) => new Set(current).add(word.id));
    setEditing(null);
    setAdding(false);
    setView("karty");
    setFilter("wszystkie");
    setQuery("");
    setNotice(`Zapisano słowo „${word.word}” i dodano je do kartek.`);
    requestAnimationFrame(() => previewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function deleteWord(id: string) {
    persist(custom.filter((word) => word.id !== id));
    setSelected((current) => {
      const next = new Set(current);
      next.delete(id);
      return next;
    });
    setPendingDelete(null);
  }

  async function download(onlyIndex?: number) {
    const nodes = Array.from(exportRef.current?.querySelectorAll<HTMLElement>(".sheet") ?? []);
    const chosen = onlyIndex == null ? nodes : nodes.filter((_, index) => index === onlyIndex);
    if (chosen.length === 0) return;
    setNotice(null);
    setBusy({ current: 0, total: chosen.length });
    try {
      const count = selectedWords.length;
      const name = onlyIndex == null
        ? `sylaby-${count}-slow.pdf`
        : `sylaby-kartka-${onlyIndex + 1}.pdf`;
      const { downloadSheetsPdf } = await import("./lib/pdf");
      await downloadSheetsPdf(chosen, name, (current, total) => setBusy({ current, total }));
    } catch {
      setNotice("Nie udało się zbudować pliku PDF. Użyj Drukuj i w oknie drukowania wybierz „Zapisz jako PDF”.");
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="app">
      <header className="topbar app-chrome">
        <HeroWave />
        <div className="brand">
          <div>
            <p className="brand-kicker">Metoda sylabowa</p>
            <h1>Grafi</h1>
            <p className="hero-lead">Ułóż kartkę do czytania i kolorowania.</p>
          </div>
        </div>
        <div className="topbar-side">
          <nav className="tabs" aria-label="Widoki">
            <button type="button" className={view === "karty" ? "tab is-on" : "tab"} onClick={() => setView("karty")}>
              Kartki do druku
            </button>
            <button type="button" className={view === "slowa" ? "tab is-on" : "tab"} onClick={() => setView("slowa")}>
              Słowa
            </button>
          </nav>
        </div>
      </header>

      {view === "karty" ? (
        <main className="workspace">
          <section className="picker app-chrome" aria-label="Wybór słów">
            <div className="picker-head">
              <h2>Wybierz słowa</h2>
              <p>Dziecko nazywa obrazek, czyta sylaby w ramkach i składa z nich słowo.</p>
            </div>
            <label className="search">
              <span className="sr-only">Szukaj słowa</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Szukaj słowa…"
              />
            </label>
            <div className="filters" role="radiogroup" aria-label="Poziom trudności">
              <FilterButton current={filter} value="wszystkie" onSelect={setFilter} count={words.length} label="Wszystkie" />
              {DIFFICULTY_ORDER.filter((level) => level !== "inne" || hasOther).map((level) => (
                <FilterButton
                  key={level}
                  current={filter}
                  value={level}
                  onSelect={setFilter}
                  count={words.filter((word) => levelOf(word) === level).length}
                  label={DIFFICULTY_LABEL[level]}
                />
              ))}
            </div>
            <div className="picker-actions">
              <button type="button" className="btn btn-ghost" onClick={selectVisible}>Zaznacz widoczne</button>
              <button type="button" className="btn btn-ghost" onClick={clearVisible}>Odznacz widoczne</button>
            </div>
            <div className="groups">
              {DIFFICULTY_ORDER.map((level) => {
                const group = visible.filter((word) => levelOf(word) === level);
                if (group.length === 0) return null;
                const selectedCount = group.filter((word) => selected.has(word.id)).length;
                return (
                  <section key={level} className="group">
                    <header className="group-head">
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedCount === group.length && group.length > 0}
                          ref={(element) => {
                            if (element) element.indeterminate = selectedCount > 0 && selectedCount < group.length;
                          }}
                          onChange={() => toggleGroup(group)}
                        />
                        <span>{DIFFICULTY_LABEL[level]}</span>
                        <small>{DIFFICULTY_HINT[level]} · {group.length}</small>
                      </label>
                    </header>
                    <ul className="word-list">
                      {group.map((word) => (
                        <li key={word.id}>
                          <label className="word-row">
                            <input
                              type="checkbox"
                              checked={selected.has(word.id)}
                              onChange={() => toggle(word.id)}
                            />
                            <span className="thumb" aria-hidden="true">
                              <Illustration id={word.illustration} label={word.word} />
                            </span>
                            <span className="word-copy">
                              <span className="word-name">{word.word}</span>
                              <span className="syl-mini">
                                {word.syllables.map((part, index) => (
                                  <i key={`${part}-${index}`}>{part}</i>
                                ))}
                              </span>
                            </span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
              {visible.length === 0 ? <p className="empty-note">Nic nie pasuje do tego szukania.</p> : null}
            </div>
          </section>

          <section className="preview" ref={previewRef} aria-label="Podgląd kartek">
            <div className="toolbar app-chrome">
              <div>
                <h2>Podgląd&nbsp;A4</h2>
                <p>
                  {selectedWords.length === 0
                    ? "Zaznacz słowa po lewej."
                    : `${selectedWords.length} ${pluralWords(selectedWords.length)} · ${pages.length} ${pluralPages(pages.length)}`}
                </p>
              </div>
              <div className="toolbar-controls">
                <fieldset className="segment">
                  <legend>Na kartce</legend>
                  <label className={density === 4 ? "is-on" : ""}>
                    <input type="radio" name="density" checked={density === 4} onChange={() => setDensity(4)} />
                    4
                  </label>
                  <label className={density === 6 ? "is-on" : ""}>
                    <input type="radio" name="density" checked={density === 6} onChange={() => setDensity(6)} />
                    6
                  </label>
                </fieldset>
                <label className="check">
                  <input type="checkbox" checked={separateLevels} onChange={(event) => setSeparateLevels(event.target.checked)} />
                  Nie mieszaj poziomów
                </label>
                <label className="check">
                  <input type="checkbox" checked={showWord} onChange={(event) => setShowWord(event.target.checked)} />
                  Pokaż całe słowo dla rodzica
                </label>
                <button type="button" className="btn btn-primary" disabled={pages.length === 0 || busy !== null} onClick={() => download()}>
                  Pobierz PDF
                </button>
                <button type="button" className="btn btn-leaf" disabled={pages.length === 0} onClick={() => window.print()}>
                  Drukuj
                </button>
              </div>
            </div>
            {notice ? <p className="notice app-chrome">{notice}</p> : null}
            {pages.length === 0 ? (
              <div className="empty-sheet app-chrome">
                <Illustration id="slonce" label="Słońce" />
                <p>Zaznacz słowa, a tutaj ułożą się kartki do kolorowania i czytania.</p>
              </div>
            ) : (
              <div className="sheet-stack">
                {pages.map((page, index) => (
                  <div className="sheet-frame" key={page.map((word) => word.id).join("-")}>
                    <div className="sheet-scale-slot">
                      <Sheet
                        words={page}
                        page={index + 1}
                        total={pages.length}
                        density={density}
                        showWord={showWord}
                      />
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
            )}
          </section>
        </main>
      ) : (
        <main className="library app-chrome">
          <div className="library-head">
            <div>
              <h2>Zestaw słów</h2>
              <p>Na starcie są rzeczowniki w formie podstawowej: łatwe, średnie i trudne. Możesz dopisać własne.</p>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setAdding(true);
                setEditing(null);
              }}
            >
              Dodaj słowo
            </button>
          </div>
          {adding || editing ? (
            <WordForm
              existing={words}
              initial={editing}
              onSave={saveWord}
              onCancel={() => {
                setAdding(false);
                setEditing(null);
              }}
            />
          ) : null}
          <ul className="library-list">
            {words.map((word) => {
              const level = levelOf(word);
              return (
                <li key={word.id} className="library-row">
                  <span className="thumb" aria-hidden="true">
                    <Illustration id={word.illustration} label={word.word} />
                  </span>
                  <span className="word-copy">
                    <span className="word-name">{word.word}</span>
                    <span className="syl-mini">
                      {word.syllables.map((part, index) => (
                        <i key={`${part}-${index}`}>{part}</i>
                      ))}
                    </span>
                  </span>
                  <span className={`badge ${level}`}>{DIFFICULTY_LABEL[level]}</span>
                  {word.custom ? (
                    <span className="row-actions">
                      {pendingDelete === word.id ? (
                        <>
                          <span>Usunąć?</span>
                          <button type="button" className="btn btn-primary" onClick={() => deleteWord(word.id)}>Tak</button>
                          <button type="button" className="btn btn-ghost" onClick={() => setPendingDelete(null)}>Nie</button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="btn btn-ghost"
                            onClick={() => {
                              setEditing(word);
                              setAdding(false);
                            }}
                          >
                            Edytuj
                          </button>
                          <button type="button" className="btn btn-ghost" onClick={() => setPendingDelete(word.id)}>Usuń</button>
                        </>
                      )}
                    </span>
                  ) : (
                    <span className="builtin-tag">zestaw startowy</span>
                  )}
                </li>
              );
            })}
          </ul>
        </main>
      )}

      <div className="export-host" ref={exportRef} aria-hidden="true">
        {pages.map((page, index) => (
          <Sheet
            key={page.map((word) => word.id).join("-")}
            words={page}
            page={index + 1}
            total={pages.length}
            density={density}
            showWord={showWord}
          />
        ))}
      </div>

      {busy ? (
        <div className="overlay" role="status">
          Tworzę PDF… kartka {busy.current} z {busy.total}
        </div>
      ) : null}
    </div>
  );
}

function FilterButton({
  current,
  value,
  label,
  count,
  onSelect,
}: {
  current: Filter;
  value: Filter;
  label: string;
  count: number;
  onSelect: (value: Filter) => void;
}) {
  return (
    <label className={current === value ? "filter is-on" : "filter"}>
      <input type="radio" name="level" checked={current === value} onChange={() => onSelect(value)} />
      {label}
      <span>{count}</span>
    </label>
  );
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

function HeroWave() {
  return (
    <svg className="hero-wave" viewBox="0 0 800 240" preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke="rgba(255,255,255,0.42)" strokeWidth="1.15">
        <path d="M-20 62c90-46 150 34 246 8 98-26 150-74 252-48 86 22 150 8 230-22" />
        <path d="M-20 92c96-40 158 26 252 4 102-24 156-66 260-42 84 18 156 10 236-18" />
        <path d="M-20 122c104-36 166 18 260 0 106-22 164-58 270-36 80 16 158 12 242-14" />
        <path d="M-20 152c112-32 174 12 268-4 110-20 172-50 278-30 78 14 160 14 250-10" />
        <path d="M80 46c74-28 128 22 210 6 90-18 136-50 228-34" />
      </g>
    </svg>
  );
}

function pluralWords(count: number): string {
  if (count === 1) return "słowo";
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "słowa";
  return "słów";
}

function pluralPages(count: number): string {
  if (count === 1) return "kartka";
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "kartki";
  return "kartek";
}
