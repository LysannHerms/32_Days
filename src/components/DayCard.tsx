import { useState } from "react";
import type { Day, HabitKey } from "../types/challenge";
import QuestDrawer from "./QuestDrawer";
import { getCompletedHabits } from "../utils/challengeProgress";

type DayCardProps = {
  day: Day;
  currentDay: number;
  onToggleHabit: (dayNumber: number, habit: HabitKey) => void;
  onUpdateMovementNote: (dayNumber: number, text: string) => void;
  onUpdateFunNote: (dayNumber: number, text: string) => void;
};

const habits: { key: HabitKey; label: string }[] = [
  { key: "calories", label: "Kalorien" },
  { key: "movement", label: "Bewegung" },
  { key: "fun", label: "Spaßquest" },
];

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
  const isFuture = day.day > currentDay;
  const isDone = completedHabits === 3;

  const cardStyle = isDone
    ? "bg-[var(--challenge-primary)] text-white"
    : isToday
    ? "bg-white text-[var(--challenge-dark)] ring-4 ring-[var(--challenge-primary)]"
    : isFuture
    ? "bg-white/90 text-[var(--challenge-dark)]"
    : "bg-[var(--challenge-card)] text-[var(--challenge-dark)]";

  const dotStyle = isDone ? "text-white" : "text-[var(--challenge-primary)]";

  return (
    <article className={`rounded-3xl p-4 shadow-sm transition-all ${cardStyle}`}>
      <button
        onClick={() => setIsOpen((current) => !current)}
        className="w-full text-left"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            {isToday && (
              <p className="mb-1 text-xs font-black uppercase tracking-widest">
                Heute
              </p>
            )}

            <h2 className="text-3xl font-black">Tag {day.day}</h2>

            <p className="mt-1 text-sm font-black">
              {completedHabits}/3 erledigt
            </p>
          </div>

          <div className={`text-xl ${dotStyle}`}>
            {habits.map((habit) =>
              day.habits[habit.key] ? "●" : "○"
            )}
          </div>
        </div>

        <p className="mt-4 line-clamp-2 text-sm font-semibold opacity-80">
          {day.funQuest}
        </p>
      </button>

      {isOpen && (
        <div className="mt-4">
          <div className="space-y-2">
            {habits.map((habit) => {
              const habitDone = day.habits[habit.key];

              return (
                <button
                  key={habit.key}
                  onClick={() => onToggleHabit(day.day, habit.key)}
                  className={`w-full rounded-2xl px-4 py-3 text-left font-semibold ${
                    habitDone
                      ? "bg-[var(--challenge-primary)] text-white"
                      : "bg-white text-[var(--challenge-dark)]"
                  }`}
                >
                  {habitDone ? "✓ " : "○ "}
                  {habit.label}
                </button>
              );
            })}
          </div>

          <QuestDrawer
            day={day}
            onUpdateMovementNote={onUpdateMovementNote}
            onUpdateFunNote={onUpdateFunNote}
          />
        </div>
      )}
    </article>
  );
}

export default DayCard;