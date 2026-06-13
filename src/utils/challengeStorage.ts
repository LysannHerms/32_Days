import type { ChallengeSummary, Day } from "../types/challenge";

const STORAGE_DAYS = "challenge-days";
const STORAGE_START = "challenge-start-date";
const STORAGE_HISTORY = "challenge-history";

export const loadDays = (): Day[] | null => {
  const savedDays = localStorage.getItem(STORAGE_DAYS);
  return savedDays ? JSON.parse(savedDays) : null;
};

export const saveDays = (days: Day[]) => {
  localStorage.setItem(STORAGE_DAYS, JSON.stringify(days));
};

export const loadStartDate = (): Date | null => {
  const savedStart = localStorage.getItem(STORAGE_START);
  return savedStart ? new Date(savedStart) : null;
};

export const saveStartDate = (date: Date) => {
  localStorage.setItem(STORAGE_START, date.toISOString());
};

export const loadHistory = (): ChallengeSummary[] => {
  const savedHistory = localStorage.getItem(STORAGE_HISTORY);
  return savedHistory ? JSON.parse(savedHistory) : [];
};

export const saveHistory = (history: ChallengeSummary[]) => {
  localStorage.setItem(STORAGE_HISTORY, JSON.stringify(history));
};