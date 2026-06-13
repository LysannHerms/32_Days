type ChallengePeriodProps = {
  startDate: Date;
  endDate: Date;
};

const formatDate = (date: Date) =>
  date.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
  });

function ChallengePeriod({ startDate, endDate }: ChallengePeriodProps) {
  return (
    <p className="mt-3 text-center text-xl font-bold text-[var(--challenge-dark)]">
      {formatDate(startDate)} – {formatDate(endDate)}
    </p>
  );
}

export default ChallengePeriod;