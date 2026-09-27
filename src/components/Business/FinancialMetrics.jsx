export default function FinancialMetrics({ business }) {
  const annualRevenue = business.revenue * 12;
  const annualProfit = business.profit * 12;

  const metrics = [
    {
      value: business.revenue,
      label: "Monthly Revenue",
    },
    {
      value: business.profit,
      label: "Monthly Profit",
    },
    {
      value: `€${annualRevenue.toLocaleString()}`,
      label: "Annual Revenue",
    },
    {
      value: `€${annualProfit.toLocaleString()}`,
      label: "Annual Profit",
    },
  ];

  return (
    <section className="mt-10 grid grid-cols-2 border-y border-[#E5E1D8] lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <div
          key={metric.label}
          className={`px-5 py-7 sm:px-7 lg:py-9 ${
            index > 0 ? "border-l border-[#E5E1D8]" : ""
          }`}
        >
          <p className="font-['DM_Serif_Display'] text-3xl text-[#171717] sm:text-4xl">
            {metric.value}
          </p>

          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B6B6B]">
            {metric.label}
          </p>
        </div>
      ))}
    </section>
  );
}
