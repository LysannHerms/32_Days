import type { Day } from "../types/challenge";

export const getCompletedHabits = (day: Day) =>
  Object.values(day.habits).filter(Boolean).length;

export const getDayXp = (day: Day) => {
  let xp = 0;

  if (day.habits.movement) xp += 10;
  if (day.habits.calories) xp += 10;
  if (day.habits.fun) xp += 20;
  if (getCompletedHabits(day) === 3) xp += 15;

  return xp;
};

export const getTotalXp = (days: Day[]) =>
  days.reduce((sum, day) => sum + getDayXp(day), 0);

export const getLevel = (xp: number) => Math.floor(xp / 100) + 1;

export const getPerfectDays = (days: Day[]) =>
  days.filter((day) => getCompletedHabits(day) === 3).length;

export const getCurrentStreak = (days: Day[]) => {
  let streak = 0;

  for (const day of days) {
    if (getCompletedHabits(day) === 3) {
      streak += 1;
    } else {
      streak = 0;
    }
  }

  return streak;
};