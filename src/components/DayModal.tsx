import type { Day, HabitKey } from "../types/challenge";

type DayModalProps = {
  day: Day;
  onClose: () => void;
  onToggleHabit: (dayNumber: number, habit: HabitKey) => void;
  onUpdateMovementNote: (dayNumber: number, text: string) => void;
  onUpdateFunNote: (dayNumber: number, text: string) => void;
};

const habits: { key: HabitKey; label: string }[] = [
  { key: "calories", label: "Kalorien" },
  { key: "movement", label: "Bewegung" },
  { key: "fun", label: "Spaßquest" },
];

function DayModal({
  day,
  onClose,
  onToggleHabit,
  onUpdateMovementNote,
  onUpdateFunNote,
}: DayModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
      <div className="w-full max-w-lg rounded-3xl bg-[var(--challenge-card)] p-6 text-[var(--challenge-dark)] shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-widest opacity-60">
              Challenge Tag
            </p>
            <h2 className="text-5xl font-black">Tag {day.day}</h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-white px-4 py-2 text-xl font-black"
          >
            ×
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {habits.map((habit) => {
            const isDone = day.habits[habit.key];

            return (
              <button
                key={habit.key}
                onClick={() => onToggleHabit(day.day, habit.key)}
                className={`w-full rounded-2xl px-4 py-3 text-left font-bold ${
                  isDone
                    ? "bg-[var(--challenge-primary)] text-white"
                    : "bg-white text-[var(--challenge-dark)]"
                }`}
              >
                {isDone ? "✓ " : "○ "}
                {habit.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 space-y-5">
          <div>
            <label className="text-sm font-black">Bewegung heute</label>
            <input
              value={day.movementNote}
              onChange={(event) =>
                onUpdateMovementNote(day.day, event.target.value)
              }
              placeholder="z. B. 45 Min Spaziergang"
              className="mt-2 w-full rounded-2xl bg-white px-4 py-3 text-sm outline-none"
            />
          </div>

          <div>
            <p className="text-sm font-black">Deine Spaßquest</p>
            <p className="mt-2 rounded-2xl bg-white px-4 py-3 font-semibold">
              {day.funQuest}
            </p>

            <input
              value={day.funNote}
              onChange={(event) => onUpdateFunNote(day.day, event.target.value)}
              placeholder="Oder was hast du stattdessen gemacht?"
              className="mt-3 w-full rounded-2xl bg-white px-4 py-3 text-sm outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DayModal;