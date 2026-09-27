export default function FinancialOverview({ business }) {
  const rows = [
    ["Monthly Revenue", `€${business.revenue.toLocaleString()}`],
    ["Monthly Profit", `€${business.profit.toLocaleString()}`],
    ["Annual Revenue", `€${(business.revenue * 12).toLocaleString()}`],
    ["Annual Profit", `€${(business.profit * 12).toLocaleString()}`],
    ["Customers", business.customers.toLocaleString()],
  ];

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B08D57]">
        FINANCIALS
      </p>

      <h2 className="mt-3 font-['DM_Serif_Display'] text-4xl text-[#171717]">
        Financial overview
      </h2>

      <div className="mt-8 border-t border-[#E5E1D8]">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between gap-6 border-b border-[#E5E1D8] py-5"
          >
            <span className="text-sm text-[#6B6B6B]">{label}</span>

            <span className="text-sm font-semibold text-[#171717]">
              {value}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs leading-6 text-[#6B6B6B]">
        Financial information is provided by the seller and should be
        independently verified during due diligence.
      </p>
    </section>
  );
}