export default function BusinessHighlights({ business }) {
  const highlights = [
    `${business.customers.toLocaleString()} customers`,
    `${business.age} in operation`,
    business.verified ? "Verified opportunity" : "Verification pending",
    "Digital operation",
    "Existing revenue",
  ];

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B08D57]">
        HIGHLIGHTS
      </p>

      <h2 className="mt-3 font-['DM_Serif_Display'] text-4xl text-[#171717]">
        At a glance
      </h2>

      <div className="mt-8 grid sm:grid-cols-2">
        {highlights.map((highlight) => (
          <div
            key={highlight}
            className="flex items-center gap-4 border-b border-[#E5E1D8] py-5"
          >
            <span className="text-[#B08D57]">+</span>

            <span className="text-sm text-[#171717]">{highlight}</span>
          </div>
        ))}
      </div>
    </section>
  );
}