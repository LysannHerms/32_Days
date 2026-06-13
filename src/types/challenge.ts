export type HabitKey = "movement" | "calories" | "fun";

export type Day = {
  day: number;
  habits: Record<HabitKey, boolean>;
  movementNote: string;
  funQuest: string;
  funNote: string;
};

export type ChallengeSummary = {
  id: string;
  startDate: string;
  endDate: string;
  totalHabits: number;
  completedHabits: number;
  completionRate: number;
};