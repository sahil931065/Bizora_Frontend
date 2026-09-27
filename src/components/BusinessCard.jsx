import { Link } from "react-router-dom";

export default function BusinessCard({ business }) {
  return (
    <article className="group overflow-hidden border border-[#E5E1D8] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#B08D57]/50 hover:shadow-[0_18px_45px_rgba(23,23,23,0.08)]">
      {/* Visual */}
      <div className="relative aspect-16/10 overflow-hidden bg-[#171717]">
        <div className="absolute inset-0 bg-[#26231f]" />

        <div className="absolute left-6 top-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#B08D57]">
          {business.category}
        </div>

        <div className="absolute bottom-6 left-6">
          <span className="font-['DM_Serif_Display'] text-6xl text-[#F7F5F0]/90">
            {business.initials}
          </span>
        </div>

        <div className="absolute right-6 top-6 h-16 w-16 border border-white/10" />

        <div className="absolute bottom-5 right-6 h-px w-24 bg-[#B08D57]/60" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-['DM_Serif_Display'] text-2xl text-[#171717]">
              {business.name}
            </h3>

            <p className="mt-1 text-sm text-[#6B6B6B]">
              {business.description}
            </p>
          </div>

          <span
            className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#B08D57]"
            title="Verified opportunity"
            aria-label="Verified opportunity"
          >
            <span className="h-2 w-2 rounded-full bg-[#B08D57]" />
          </span>
        </div>

        <div className="grid grid-cols-3 border-y border-[#E5E1D8] py-4">
          <div>
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#6B6B6B]">
              Asking
            </p>
            <p className="font-semibold text-[#171717]">{business.price}</p>
          </div>

          <div className="border-l border-[#E5E1D8] pl-4">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#6B6B6B]">
              Revenue
            </p>
            <p className="font-semibold text-[#171717]">
              {business.revenue}
              <span className="text-xs font-normal text-[#6B6B6B]">/mo</span>
            </p>
          </div>

          <div className="border-l border-[#E5E1D8] pl-4">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#6B6B6B]">
              Profit
            </p>
            <p className="font-semibold text-[#171717]">
              {business.profit}
              <span className="text-xs font-normal text-[#6B6B6B]">/mo</span>
            </p>
          </div>
        </div>

        <Link
          to={`/businesses/${business.id}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#171717] transition-colors group-hover:text-[#B08D57]"
        >
          View Opportunity
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
