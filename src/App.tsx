import ChallengeHeader from "./components/ChallengeHeader";
import ChallengePeriod from "./components/ChallengePeriod";
import DayCard from "./components/DayCard";
import ChallengeHistory from "./components/ChallengeHistory";
import ProgressBar from "./components/ProgressBar";
import RewardBox from "./components/RewardBox";
import { useChallenge } from "./hooks/useChallenge";
import { getCompletedHabits } from "./utils/challengeProgress";
import { getCurrentChallengeDay } from "./utils/challengeStatus";

function App() {
  const {
    days,
    history,
    challengeStart,
    challengeEnd,
    toggleHabit,
    updateMovementNote,
    updateFunNote,
  } = useChallenge();

  const currentDay = getCurrentChallengeDay(challengeStart);

  const completedDays = days.filter(
    (day) => getCompletedHabits(day) === 3
  ).length;

  const rewardUnlocked = currentDay > 32;

  return (
    <main className="min-h-screen bg-[var(--challenge-bg)] bg-[linear-gradient(var(--challenge-grid)_1px,transparent_1px),linear-gradient(90deg,var(--challenge-grid)_1px,transparent_1px)] bg-[size:64px_64px] px-6 py-10">
      <ChallengeHeader />
      <ChallengePeriod startDate={challengeStart} endDate={challengeEnd} />

      <ProgressBar completedDays={completedDays} totalDays={32} />

  <section className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
  {days.map((day) => (
    <DayCard
      key={day.day}
      day={day}
      currentDay={currentDay}
      onToggleHabit={toggleHabit}
      onUpdateMovementNote={updateMovementNote}
      onUpdateFunNote={updateFunNote}
    />
  ))}
</section>

      <RewardBox isUnlocked={rewardUnlocked} />

      <ChallengeHistory history={history} />
    </main>
  );
}

export default App;