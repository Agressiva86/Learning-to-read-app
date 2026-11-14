import { BUILTIN_WORDS } from "../data/words";
import { ILLUSTRATIONS } from "../data/illustrations";
import { difficultyOf, levelOf } from "./difficulty";
import { buildPages } from "./pages";
import { isPolishWord, splitSyllables, syllablesMatchWord } from "./syllables";

describe("słownik", () => {
  it("ma ilustrację do każdego słowa", () => {
    expect(BUILTIN_WORDS).toHaveLength(94);
    const pictures = new Set<string>(ILLUSTRATIONS);
    for (const word of BUILTIN_WORDS) {
      expect(pictures.has(word.illustration), word.word).toBe(true);
      expect(isPolishWord(word.word), word.word).toBe(true);
      expect(syllablesMatchWord(word.word, word.syllables), word.word).toBe(true);
    }
  });

  it("trzyma poziomy według liczby sylab", () => {
    const counts = { latwy: 0, sredni: 0, trudny: 0, inne: 0 };
    for (const word of BUILTIN_WORDS) {
      const level = difficultyOf(word.syllables.length);
      expect(word.level, word.word).toBe(level);
      counts[levelOf(word)] += 1;
    }
    expect(counts).toEqual({ latwy: 47, sredni: 46, trudny: 1, inne: 0 });
  });

  it("podpowiada ten sam podział, co w zestawie", () => {
    for (const word of BUILTIN_WORDS) {
      expect(splitSyllables(word.word).join("-"), word.word).toBe(word.syllables.join("-"));
    }
  });
});

describe("kartki", () => {
  it("nie miesza poziomów, gdy tak ustawiono", () => {
    const pages = buildPages(BUILTIN_WORDS, true);
    expect(pages[0]?.map((word) => word.word)).toEqual(["mama", "tata", "dom", "kot"]);
    const flat = pages.flat();
    expect(flat).toHaveLength(94);
    for (const page of pages) {
      const levels = new Set(page.map((word) => levelOf(word)));
      expect(levels.size).toBe(1);
    }
  });

  it("układa cztery słowa na kartce", () => {
    const easy = BUILTIN_WORDS.filter((word) => levelOf(word) === "latwy");
    const pages = buildPages(easy, true);
    expect(pages.map((page) => page.length)).toEqual([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3]);
  });
});
