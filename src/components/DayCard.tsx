import { useState } from "react";
import type { Day, HabitKey } from "../types/challenge";
import { getCompletedHabits } from "../utils/challengeProgress";
import DayModal from "./DayModal";

type DayCardProps = {
  day: Day;
  currentDay: number;
  onToggleHabit: (dayNumber: number, habit: HabitKey) => void;
  onUpdateMovementNote: (dayNumber: number, text: string) => void;
  onUpdateFunNote: (dayNumber: number, text: string) => void;
};

function DayCard({
  day,
  currentDay,
  onToggleHabit,
  onUpdateMovementNote,
  onUpdateFunNote,
}: DayCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const completedHabits = getCompletedHabits(day);
  const isToday = day.day === currentDay;
  const isDone = completedHabits === 3;

  const cardStyle = isDone
    ? "bg-[var(--challenge-primary)] text-white"
    : isToday
    ? "bg-white text-[var(--challenge-dark)] ring-4 ring-[var(--challenge-primary)]"
    : "bg-[var(--challenge-card)] text-[var(--challenge-dark)]";

  return (
  <>
    <button
      onClick={() => setIsOpen(true)}
      className={`min-h-40 rounded-3xl p-5 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:min-h-32 sm:p-6 ${cardStyle}`}
    >
      <div className="flex h-full flex-col justify-between">
  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
    <div>
      {isToday && (
        <p className="mb-1 text-xs font-black uppercase tracking-widest">
          Heute
        </p>
      )}

      <h2
        className={`font-black leading-none ${
          isToday ? "text-5xl sm:text-5xl" : "text-4xl sm:text-3xl"
        }`}
      >
        Tag {day.day}
      </h2>
    </div>

    <div className="text-lg tracking-tight sm:pt-1">
      {Object.values(day.habits).map((isChecked, index) => (
        <span key={index}>{isChecked ? "●" : "○"}</span>
      ))}
    </div>
  </div>

  <p className="mt-5 text-sm font-black">
    {completedHabits}/3 erledigt
  </p>
</div>
    </button>

    {isOpen && (
      <DayModal
        day={day}
        onClose={() => setIsOpen(false)}
        onToggleHabit={onToggleHabit}
        onUpdateMovementNote={onUpdateMovementNote}
        onUpdateFunNote={onUpdateFunNote}
      />
    )}
  </>
);
}

export default DayCard;