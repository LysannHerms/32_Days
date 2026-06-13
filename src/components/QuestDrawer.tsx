import type { Day } from "../types/challenge";

type QuestDrawerProps = {
  day: Day;
  onUpdateMovementNote: (dayNumber: number, text: string) => void;
  onUpdateFunNote: (dayNumber: number, text: string) => void;
};

function QuestDrawer({
  day,
  onUpdateMovementNote,
  onUpdateFunNote,
}: QuestDrawerProps) {
  return (
    <div className="mt-4 space-y-4 rounded-2xl bg-white/70 p-4 text-[var(--challenge-dark)]">
      <div>
        <label className="text-sm font-black">Bewegung heute</label>
        <input
          value={day.movementNote}
          onChange={(event) => onUpdateMovementNote(day.day, event.target.value)}
          placeholder="z. B. 45 Min Spaziergang"
          className="mt-1 w-full rounded-xl bg-white px-3 py-2 text-sm outline-none"
        />
      </div>

      <div>
        <p className="text-sm font-black">Deine Spaßquest</p>
        <p className="mt-1 rounded-xl bg-white px-3 py-2 text-sm">
          {day.funQuest}
        </p>

        <input
          value={day.funNote}
          onChange={(event) => onUpdateFunNote(day.day, event.target.value)}
          placeholder="Oder was hast du stattdessen gemacht?"
          className="mt-2 w-full rounded-xl bg-white px-3 py-2 text-sm outline-none"
        />
      </div>
    </div>
  );
}

export default QuestDrawer;