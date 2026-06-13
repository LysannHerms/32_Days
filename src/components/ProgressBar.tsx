type ProgressBarProps = {
  completedDays: number;
  totalDays: number;
};

function ProgressBar({ completedDays, totalDays }: ProgressBarProps) {
  const percentage = Math.round((completedDays / totalDays) * 100);

  return (
    <section className="mx-auto mt-6 max-w-3xl text-[var(--challenge-dark)]">
      <div className="flex items-center justify-between text-sm font-black">
        <span>{completedDays} von {totalDays} Tagen abgeschlossen</span>
        <span>{percentage} %</span>
      </div>

      <div className="mt-2 h-5 overflow-hidden rounded-full bg-white/70">
        <div
          className="h-full rounded-full bg-[var(--challenge-primary)] transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </section>
  );
}

export default ProgressBar;