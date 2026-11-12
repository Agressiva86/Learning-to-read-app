import { BUILTIN_WORDS } from "../data/words";
import { ILLUSTRATIONS } from "../data/illustrations";
import { difficultyOf } from "./difficulty";
import { buildPages } from "./pages";
import { isPolishWord, splitSyllables, syllablesMatchWord } from "./syllables";

describe("zestaw startowy", () => {
  it("ma 40 słów i ilustrację do każdego", () => {
    expect(BUILTIN_WORDS).toHaveLength(40);
    const pictures = new Set<string>(ILLUSTRATIONS);
    for (const word of BUILTIN_WORDS) {
      expect(pictures.has(word.illustration), word.word).toBe(true);
      expect(isPolishWord(word.word), word.word).toBe(true);
      expect(syllablesMatchWord(word.word, word.syllables), word.word).toBe(true);
    }
  });

  it("trzyma poziomy: 14 łatwych, 16 średnich, 10 trudnych", () => {
    const counts = { latwy: 0, sredni: 0, trudny: 0, inne: 0 };
    for (const word of BUILTIN_WORDS) counts[difficultyOf(word.syllables.length)] += 1;
    expect(counts).toEqual({ latwy: 14, sredni: 16, trudny: 10, inne: 0 });
  });

  it("podpowiada ten sam podział, co w zestawie", () => {
    for (const word of BUILTIN_WORDS) {
      expect(splitSyllables(word.word).join("-"), word.word).toBe(word.syllables.join("-"));
    }
  });
});

describe("kartki", () => {
  it("nie miesza poziomów, gdy tak ustawiono", () => {
    const pages = buildPages(BUILTIN_WORDS, 4, true);
    expect(pages[0]?.map((word) => word.word)).toEqual(["mama", "tata", "woda", "mleko"]);
    const flat = pages.flat();
    expect(flat).toHaveLength(40);
    for (const page of pages) {
      const levels = new Set(page.map((word) => difficultyOf(word.syllables.length)));
      expect(levels.size).toBe(1);
    }
  });

  it("układa sześć słów na kartce", () => {
    const easy = BUILTIN_WORDS.filter((word) => word.syllables.length === 2);
    const pages = buildPages(easy, 6, true);
    expect(pages.map((page) => page.length)).toEqual([6, 6, 2]);
  });
});
