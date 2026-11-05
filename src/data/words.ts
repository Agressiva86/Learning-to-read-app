import type { IllustrationId } from "./illustrations";

export type WordEntry = {
  id: string;
  word: string;
  syllables: string[];
  illustration: IllustrationId;
  custom?: boolean;
};

/** Zestaw startowy: codzienne słowa, podział taki, jak przy klaśnięciu sylab. */
export const BUILTIN_WORDS: WordEntry[] = [
  { id: "mama", word: "mama", syllables: ["ma", "ma"], illustration: "mama" },
  { id: "tata", word: "tata", syllables: ["ta", "ta"], illustration: "tata" },
  { id: "woda", word: "woda", syllables: ["wo", "da"], illustration: "woda" },
  { id: "mleko", word: "mleko", syllables: ["mle", "ko"], illustration: "mleko" },
  { id: "kotek", word: "kotek", syllables: ["ko", "tek"], illustration: "kotek" },
  { id: "lalka", word: "lalka", syllables: ["lal", "ka"], illustration: "lalka" },
  { id: "pilka", word: "piłka", syllables: ["pił", "ka"], illustration: "pilka" },
  { id: "rower", word: "rower", syllables: ["ro", "wer"], illustration: "rower" },
  { id: "zupa", word: "zupa", syllables: ["zu", "pa"], illustration: "zupa" },
  { id: "banan", word: "banan", syllables: ["ba", "nan"], illustration: "banan" },
  { id: "lampa", word: "lampa", syllables: ["lam", "pa"], illustration: "lampa" },
  { id: "lozko", word: "łóżko", syllables: ["łóż", "ko"], illustration: "lozko" },
  { id: "serce", word: "serce", syllables: ["ser", "ce"], illustration: "serce" },
  { id: "slonce", word: "słońce", syllables: ["słoń", "ce"], illustration: "slonce" },

  { id: "rodzina", word: "rodzina", syllables: ["ro", "dzi", "na"], illustration: "rodzina" },
  { id: "kanapka", word: "kanapka", syllables: ["ka", "nap", "ka"], illustration: "kanapka" },
  { id: "poduszka", word: "poduszka", syllables: ["po", "dusz", "ka"], illustration: "poduszka" },
  { id: "zabawka", word: "zabawka", syllables: ["za", "baw", "ka"], illustration: "zabawka" },
  { id: "pizama", word: "piżama", syllables: ["pi", "ża", "ma"], illustration: "pizama" },
  { id: "telefon", word: "telefon", syllables: ["te", "le", "fon"], illustration: "telefon" },
  { id: "samochod", word: "samochód", syllables: ["sa", "mo", "chód"], illustration: "samochod" },
  { id: "parasol", word: "parasol", syllables: ["pa", "ra", "sol"], illustration: "parasol" },
  { id: "olowek", word: "ołówek", syllables: ["o", "łó", "wek"], illustration: "olowek" },
  { id: "rowerek", word: "rowerek", syllables: ["ro", "we", "rek"], illustration: "rowerek" },
  { id: "czekolada", word: "czekolada", syllables: ["cze", "ko", "la", "da"], illustration: "czekolada" },
  { id: "truskawka", word: "truskawka", syllables: ["tru", "skaw", "ka"], illustration: "truskawka" },
  { id: "pomarancza", word: "pomarańcza", syllables: ["po", "ma", "rań", "cza"], illustration: "pomarancza" },
  { id: "telewizor", word: "telewizor", syllables: ["te", "le", "wi", "zor"], illustration: "telewizor" },
  { id: "komputer", word: "komputer", syllables: ["kom", "pu", "ter"], illustration: "komputer" },
  { id: "hulajnoga", word: "hulajnoga", syllables: ["hu", "laj", "no", "ga"], illustration: "hulajnoga" },

  { id: "temperatura", word: "temperatura", syllables: ["tem", "pe", "ra", "tu", "ra"], illustration: "temperatura" },
  { id: "spacerowanie", word: "spacerowanie", syllables: ["spa", "ce", "ro", "wa", "nie"], illustration: "spacerowanie" },
  { id: "kolorowanka", word: "kolorowanka", syllables: ["ko", "lo", "ro", "wan", "ka"], illustration: "kolorowanka" },
  { id: "mikrofalowka", word: "mikrofalówka", syllables: ["mi", "kro", "fa", "lów", "ka"], illustration: "mikrofalowka" },
  { id: "lokomotywa", word: "lokomotywa", syllables: ["lo", "ko", "mo", "ty", "wa"], illustration: "lokomotywa" },
  { id: "nauczycielka", word: "nauczycielka", syllables: ["na", "u", "czy", "ciel", "ka"], illustration: "nauczycielka" },
  { id: "opowiadanie", word: "opowiadanie", syllables: ["o", "po", "wia", "da", "nie"], illustration: "opowiadanie" },
  { id: "samochodziki", word: "samochodziki", syllables: ["sa", "mo", "cho", "dzi", "ki"], illustration: "samochodziki" },
  { id: "fotografowanie", word: "fotografowanie", syllables: ["fo", "to", "gra", "fo", "wa", "nie"], illustration: "fotografowanie" },
  { id: "niezapominajka", word: "niezapominajka", syllables: ["nie", "za", "po", "mi", "naj", "ka"], illustration: "niezapominajka" },
];

export function mergeWords(custom: WordEntry[]): WordEntry[] {
  const ids = new Set(BUILTIN_WORDS.map((word) => word.id));
  const names = new Set(BUILTIN_WORDS.map((word) => word.word));
  const extra = custom.filter((word) => !ids.has(word.id) && !names.has(word.word));
  return [...BUILTIN_WORDS, ...extra];
}
