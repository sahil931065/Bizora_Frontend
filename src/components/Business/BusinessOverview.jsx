export default function BusinessOverview({ business }) {
  const information = [
    ["Business Type", business.category],
    ["Business Age", business.age],
    ["Location", business.country],
    ["Customers", business.customers.toLocaleString()],
  ];

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B08D57]">
        OVERVIEW
      </p>

      <h2 className="mt-3 font-['DM_Serif_Display'] text-4xl text-[#171717]">
        About the business
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-8 text-[#6B6B6B]">
        {business.description}
      </p>

      <div className="mt-10 grid border-t border-[#E5E1D8] sm:grid-cols-2">
        {information.map(([label, value]) => (
          <div
            key={label}
            className="border-b border-[#E5E1D8] py-5 sm:pr-8"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B6B6B]">
              {label}
            </p>

            <p className="mt-2 text-sm font-semibold text-[#171717]">
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}