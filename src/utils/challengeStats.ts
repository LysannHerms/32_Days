import type { ChallengeSummary, Day } from "../types/challenge";

export const createChallengeSummary = (
  days: Day[],
  startDate: Date,
  endDate: Date
): ChallengeSummary => {
  const totalHabits = days.length * 3;

  const completedHabits = days.reduce((sum, day) => {
    return sum + Object.values(day.habits).filter(Boolean).length;
  }, 0);

  return {
    id: crypto.randomUUID(),
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    totalHabits,
    completedHabits,
    completionRate: Math.round((completedHabits / totalHabits) * 100),
  };
};