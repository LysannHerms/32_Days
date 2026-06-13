export const CHALLENGE_LENGTH = 32;

export const firstStartDate = new Date(2026, 5, 15, 0, 1); 
// 15. Juni 2026, 00:01 Uhr

export const addDays = (date: Date, days: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

export const getChallengeEndDate = (startDate: Date) => {
  return addDays(startDate, CHALLENGE_LENGTH - 1);
};

export const getNextChallengeStartDate = (startDate: Date) => {
  return addDays(startDate, CHALLENGE_LENGTH);
};

export const shouldStartNewChallenge = (startDate: Date) => {
  const now = new Date();
  const nextStartDate = getNextChallengeStartDate(startDate);

  return now >= nextStartDate;
};