import { useEffect, useState } from "react";
import { createInitialDays } from "../data/createInitialDays";
import type { ChallengeSummary, Day, HabitKey} from "../types/challenge";
import {
  firstStartDate,
  getChallengeEndDate,
  getNextChallengeStartDate,
  shouldStartNewChallenge,
} from "../utils/challengeDate";
import {
  loadDays,
  loadHistory,
  loadStartDate,
  saveDays,
  saveHistory,
  saveStartDate,
} from "../utils/challengeStorage";;
import {
  getCurrentStreak,
  getLevel,
  getPerfectDays,
  getTotalXp,
} from "../utils/challengeProgress";
export function useChallenge() {
  const [challengeStart, setChallengeStart] = useState<Date>(() => {
    const savedStart = loadStartDate();

    if (savedStart) return savedStart;

    saveStartDate(firstStartDate);
    return firstStartDate;
  });

  const [days, setDays] = useState<Day[]>(() => {
    return loadDays() ?? createInitialDays();
  });

  const [history, setHistory] = useState<ChallengeSummary[]>(() => {
    return loadHistory();
  });

  const challengeEnd = getChallengeEndDate(challengeStart);

  useEffect(() => {
    saveDays(days);
  }, [days]);

  useEffect(() => {
    saveHistory(history);
  }, [history]);

  useEffect(() => {
    const checkReset = () => {
      if (!shouldStartNewChallenge(challengeStart)) return;


      const nextStart = getNextChallengeStartDate(challengeStart);
      const freshDays = createInitialDays();

      setHistory((currentHistory) => [ ...currentHistory]);
      setChallengeStart(nextStart);
      setDays(freshDays);

      saveStartDate(nextStart);
      saveDays(freshDays);
    };

    checkReset();

    const interval = setInterval(checkReset, 60_000);

    return () => clearInterval(interval);
  }, [challengeStart, challengeEnd, days]);

  const toggleHabit = (dayNumber: number, habit: HabitKey) => {
    setDays((currentDays) =>
      currentDays.map((day) =>
        day.day === dayNumber
          ? {
              ...day,
              habits: {
                ...day.habits,
                [habit]: !day.habits[habit],
              },
            }
          : day
      )
    );
  };
  const updateMovementNote = (dayNumber: number, text: string) => {
  setDays((currentDays) =>
    currentDays.map((day) =>
      day.day === dayNumber ? { ...day, movementNote: text } : day
    )
  );
};

const updateFunNote = (dayNumber: number, text: string) => {
  setDays((currentDays) =>
    currentDays.map((day) =>
      day.day === dayNumber ? { ...day, funNote: text } : day
    )
  );
};

const xp = getTotalXp(days);
const level = getLevel(xp);
const perfectDays = getPerfectDays(days);
const streak = getCurrentStreak(days);
  return {
    days,
    history,
    challengeStart,
    challengeEnd,
    toggleHabit,
    updateMovementNote,
    updateFunNote,
    xp,
    level,
    perfectDays,
    streak
  };
}