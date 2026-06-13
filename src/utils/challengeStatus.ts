import type { Day } from "../types/challenge";
import { getCompletedHabits } from "./challengeProgress";

export const getCurrentChallengeDay = (startDate: Date) => {
  const today = new Date();

  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);

  const current = new Date(today);
  current.setHours(0, 0, 0, 0);

  const diffInMs = current.getTime() - start.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return diffInDays + 1;
};

export const isPerfectDay = (day: Day) => {
  return getCompletedHabits(day) === 3;
};