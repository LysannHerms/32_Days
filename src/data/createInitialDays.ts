import type { Day } from "../types/challenge";
import { funQuests } from "./funQuests";

const getRandomQuest = () =>
  funQuests[Math.floor(Math.random() * funQuests.length)];

export const createInitialDays = (): Day[] =>
  Array.from({ length: 32 }, (_, index) => ({
    day: index + 1,
    habits: {
      movement: false,
      calories: false,
      fun: false,
    },
    movementNote: "",
    funQuest: getRandomQuest(),
    funNote: "",
  }));