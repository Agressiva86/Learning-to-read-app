import { useMemo, useState } from "react";
import { ILLUSTRATION_LABELS, ILLUSTRATIONS, type IllustrationId } from "../data/illustrations";
import type { WordEntry } from "../data/words";
import { DIFFICULTY_HINT, DIFFICULTY_LABEL, difficultyOf } from "../lib/difficulty";
import {
  foldPolish,
  isPolishWord,
  parseSyllableInput,
  splitSyllables,
  syllablesMatchWord,
} from "../lib/syllables";
import { Illustration } from "./Illustration";
import { SyllableRow } from "./SyllableRow";

export function WordForm({
  existing,
  initial,
  onSave,
  onCancel,
}: {
  existing: WordEntry[];
  initial?: WordEntry | null;
  onSave: (word: WordEntry) => void;
  onCancel: () => void;
}) {
  const [word, setWord] = useState(initial?.word ?? "");
  const [syllableText, setSyllableText] = useState(initial?.syllables.join("-") ?? "");
  const [touched, setTouched] = useState(Boolean(initial));
  const [picture, setPicture] = useState<IllustrationId>(initial?.illustration ?? "gwiazda");
  const [pictureQuery, setPictureQuery] = useState("");

  const syllables = parseSyllableInput(syllableText);
  const difficulty = difficultyOf(syllables.length);
  const rawError = validate(word, syllables, existing, initial?.id);
  const error = word.trim() || syllableText.trim() ? rawError : null;
  const pictures = useMemo(() => {
    const query = foldPolish(pictureQuery.trim());
    if (!query) return ILLUSTRATIONS;
    return ILLUSTRATIONS.filter((id) => foldPolish(ILLUSTRATION_LABELS[id]).includes(query) || id.includes(query));
  }, [pictureQuery]);

  function updateWord(value: string) {
    setWord(value);
    if (!touched) {
      const suggestion = splitSyllables(value.trim());
      setSyllableText(suggestion.join("-"));
      const guess = guessIllustration(value.trim());
      if (guess) setPicture(guess);
    }
  }

  function save() {
    const cleanWord = word.trim().toLowerCase();
    const cleanSyllables = parseSyllableInput(syllableText);
    if (validate(cleanWord, cleanSyllables, existing, initial?.id)) return;
    onSave({
      id: initial?.id ?? makeId(cleanWord, existing),
      word: cleanWord,
      syllables: cleanSyllables,
      illustration: picture,
      custom: true,
    });
  }

  return (
    <form
      className="word-form"
      onSubmit={(event) => {
        event.preventDefault();
        save();
      }}
    >
      <div className="form-copy">
        <h2>{initial ? "Popraw słowo" : "Nowe słowo"}</h2>
        <p>Wpisz słowo z codzienności. Podział na sylaby możesz poprawić, zanim zapiszesz.</p>
      </div>

      <div className="form-grid">
        <label className="field">
          <span>Słowo</span>
          <input
            value={word}
            onChange={(event) => updateWord(event.target.value)}
            placeholder="np. kanapa"
            autoComplete="off"
            required
          />
        </label>
        <label className="field">
          <span>Sylaby, oddzielone myślnikiem</span>
          <input
            value={syllableText}
            onChange={(event) => {
              setTouched(true);
              setSyllableText(event.target.value);
            }}
            placeholder="np. ka-na-pa"
            autoComplete="off"
            required
          />
        </label>
        <div className="field-actions">
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setTouched(false);
              setSyllableText(splitSyllables(word.trim()).join("-"));
            }}
          >
            Ułóż automatycznie
          </button>
          <span className={`badge ${difficulty}`}>
            {DIFFICULTY_LABEL[difficulty]} · {DIFFICULTY_HINT[difficulty]}
          </span>
        </div>
        {error ? <p className="form-error">{error}</p> : null}
        {!error && syllables.length > 0 ? <p className="form-ok">Sylaby składają się w to słowo.</p> : null}
      </div>

      <div className="live-card" aria-hidden="true">
        <div className="art">
          <Illustration id={picture} label={word || "podgląd"} />
        </div>
        {syllables.length > 0 ? <SyllableRow syllables={syllables} compact /> : <p className="form-ok">Tu pojawią się ramki sylab.</p>}
      </div>

      <fieldset className="picture-picker">
        <legend>Kolorowanka</legend>
        <input
          value={pictureQuery}
          onChange={(event) => setPictureQuery(event.target.value)}
          placeholder="Szukaj rysunku, np. dom"
          aria-label="Szukaj kolorowanki"
        />
        <div className="picture-grid">
          {pictures.map((id) => (
            <label key={id} className={picture === id ? "picture-option is-on" : "picture-option"}>
              <input
                type="radio"
                name="illustration"
                value={id}
                checked={picture === id}
                onChange={() => setPicture(id)}
              />
              <Illustration id={id} label={ILLUSTRATION_LABELS[id]} />
              <span>{ILLUSTRATION_LABELS[id]}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-buttons">
        <button type="submit" className="btn btn-primary" disabled={Boolean(error) || !word.trim()}>
          Zapisz słowo
        </button>
        <button type="button" className="btn btn-ghost" onClick={onCancel}>
          Anuluj
        </button>
      </div>
    </form>
  );
}

function validate(word: string, syllables: string[], existing: WordEntry[], currentId?: string): string | null {
  const clean = word.trim().toLowerCase();
  if (!clean) return "Wpisz słowo.";
  if (!isPolishWord(clean)) return "Użyj tylko polskich liter, bez spacji i cyfr.";
  if (syllables.length === 0) return "Podaj choć jedną sylabę.";
  if (syllables.some((part) => !isPolishWord(part))) return "Każda sylaba może zawierać tylko polskie litery.";
  if (!syllablesMatchWord(clean, syllables)) {
    return `Po złożeniu wychodzi „${syllables.join("")}”, a słowo to „${clean}”.`;
  }
  const duplicate = existing.find((item) => item.word === clean && item.id !== currentId);
  if (duplicate) return "To słowo jest już w zestawie.";
  return null;
}

function makeId(word: string, existing: WordEntry[]): string {
  const base = foldPolish(word).replace(/[^a-z0-9]/g, "") || "slowo";
  const ids = new Set(existing.map((item) => item.id));
  let id = base;
  let n = 2;
  while (ids.has(id)) {
    id = `${base}-${n}`;
    n += 1;
  }
  return id;
}

function guessIllustration(word: string): IllustrationId | null {
  const folded = foldPolish(word);
  return ILLUSTRATIONS.find((id) => id === folded || foldPolish(ILLUSTRATION_LABELS[id]) === folded) ?? null;
}
