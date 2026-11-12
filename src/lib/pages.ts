import type { WordEntry } from "../data/words";
import { DIFFICULTY_ORDER, DIFFICULTY_SHEET, levelOf, type Difficulty } from "./difficulty";

export type SheetDensity = 4 | 6;

export function buildPages(words: WordEntry[], perPage: SheetDensity, separateLevels: boolean): WordEntry[][] {
  const groups = separateLevels ? groupByDifficulty(words) : [words];
  const pages: WordEntry[][] = [];
  for (const group of groups) {
    for (let index = 0; index < group.length; index += perPage) {
      pages.push(group.slice(index, index + perPage));
    }
  }
  return pages;
}

function groupByDifficulty(words: WordEntry[]): WordEntry[][] {
  const buckets = new Map<Difficulty, WordEntry[]>();
  for (const word of words) {
    const key = levelOf(word);
    const list = buckets.get(key) ?? [];
    list.push(word);
    buckets.set(key, list);
  }
  return DIFFICULTY_ORDER.flatMap((key) => {
    const list = buckets.get(key);
    return list && list.length > 0 ? [list] : [];
  });
}

export function pageLevelLabel(words: WordEntry[]): string {
  const labels = new Set(words.map((word) => levelOf(word)));
  if (labels.size === 1) {
    const only = [...labels][0] ?? "inne";
    return DIFFICULTY_SHEET[only];
  }
  return "różne poziomy";
}
