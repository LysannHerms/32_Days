type RewardBoxProps = {
  isUnlocked: boolean;
};

function RewardBox({ isUnlocked }: RewardBoxProps) {
  return (
    <section className="mx-auto mt-16 max-w-3xl rounded-3xl bg-[var(--challenge-card)] p-6 text-center text-[var(--challenge-dark)] shadow-sm">
      <p className="text-4xl">{isUnlocked ? "🎁" : "🔒"}</p>

      <h2 className="mt-3 text-3xl font-black">
        {isUnlocked ? "Belohnung freigeschaltet!" : "Belohnung wartet auf dich"}
      </h2>

      <p className="mt-2 font-semibold">
        {isUnlocked
          ? "Du hast die 32 Tage geschafft. Such dir bewusst etwas Schönes aus."
          : "Dieses Feld öffnet sich, wenn alle 32 Tage vorbei sind."}
      </p>

      {isUnlocked && (
        <div className="mt-5 rounded-2xl bg-white p-4 font-bold">
          Fahr an einen See, kauf dir eine Pflanze oder gönn dir einen kleinen Abenteuer-Tag.
        </div>
      )}
    </section>
  );
}

export default RewardBox;