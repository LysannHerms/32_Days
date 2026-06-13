import type { ChallengeSummary } from "../types/challenge";

type ChallengeHistoryProps = {
  history: ChallengeSummary[];
};

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
  });

function ChallengeHistory({ history }: ChallengeHistoryProps) {
  if (history.length === 0) return null;

  return (
    <section className="mx-auto mt-16 max-w-6xl">
      <h2 className="mb-5 text-3xl font-black text-[var(--challenge-dark)]">
        Vergangene Runden
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {history.map((round) => (
          <article
            key={round.id}
            className="rounded-3xl bg-[var(--challenge-card)] p-5 shadow-sm"
          >
            <h3 className="text-xl font-black text-[var(--challenge-dark)]">
              {formatDate(round.startDate)} – {formatDate(round.endDate)}
            </h3>

            <p className="mt-3 font-semibold text-[var(--challenge-dark)]">
              {round.completedHabits} von {round.totalHabits} erledigt
            </p>

            <p className="mt-1 text-4xl font-black text-[var(--challenge-primary)]">
              {round.completionRate} %
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ChallengeHistory;