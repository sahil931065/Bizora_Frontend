function BusinessVisual({ business }) {
  const visualLayouts = {
    analytics: {
      label: "ANALYTICS",
      bars: [35, 55, 44, 72, 88],
    },
    commerce: {
      label: "COMMERCE",
      bars: [48, 70, 58, 82, 65],
    },
    agency: {
      label: "STUDIO",
      bars: [75, 48, 82, 60, 92],
    },
    finance: {
      label: "FINANCE",
      bars: [42, 62, 55, 74, 68],
    },
    ai: {
      label: "INTELLIGENCE",
      bars: [30, 52, 78, 58, 90],
    },
    content: {
      label: "PUBLISHING",
      bars: [65, 42, 72, 50, 82],
    },
    software: {
      label: "SOFTWARE",
      bars: [45, 68, 52, 85, 72],
    },
    travel: {
      label: "TRAVEL",
      bars: [58, 40, 70, 55, 78],
    },
    mobile: {
      label: "MOBILE",
      bars: [35, 65, 48, 80, 62],
    },
  };

  const layout = visualLayouts[business.visual] || visualLayouts.analytics;

  return (
    <div className="relative aspect-video overflow-hidden bg-[#26231F]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-0 h-full w-px bg-white" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-white" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white" />
      </div>

      <div className="absolute left-6 top-5">
        <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
          {layout.label}
        </p>
      </div>

      <div className="absolute bottom-7 left-7 right-7 flex h-24 items-end gap-2">
        {layout.bars.map((height, index) => (
          <div
            key={index}
            className={`w-full ${
              index === 3
                ? "bg-[#B08D57]"
                : "bg-[#F7F5F0]/20"
            }`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <div className="absolute bottom-5 left-5 font-['DM_Serif_Display'] text-4xl text-white/90">
        {business.initials}
      </div>

      <div className="absolute right-6 top-5 h-10 w-10 border border-white/10" />
    </div>
  );
}

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#B08D57]">
      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#B08D57]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#B08D57]" />
      </span>
      Verified
    </span>
  );
}

function formatPrice(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function BookmarkIcon({ active }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={active ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-3.7L6 21V4.5Z" />
    </svg>
  );
}

export default function BrowseBusinessCard({
  business,
  isFavorite,
  onFavorite,
}) {
  return (
    <article className="group overflow-hidden border border-[#E5E1D8] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#B08D57]/50 hover:shadow-[0_18px_45px_rgba(23,23,23,0.08)]">
      <div className="relative">
        <BusinessVisual business={business} />

        <button
          type="button"
          onClick={() => onFavorite(business.id)}
          aria-label={
            isFavorite
              ? `Remove ${business.name} from saved businesses`
              : `Save ${business.name}`
          }
          aria-pressed={isFavorite}
          className="absolute right-5 bottom-5 flex h-10 w-10 items-center justify-center bg-white text-[#171717] shadow-sm transition-colors hover:text-[#B08D57]"
        >
          <BookmarkIcon active={isFavorite} />
        </button>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex min-h-5 items-center justify-between gap-3">
          <div className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#6B6B6B]">
            {business.category}
            <span className="mx-1.5 text-[#BDB8AF]">·</span>
            {business.country}
          </div>

          {business.verified && <VerifiedBadge />}
        </div>

        <h3 className="mt-4 font-['DM_Serif_Display'] text-2xl text-[#171717]">
          {business.name}
        </h3>

        <p className="mt-2 min-h-12 text-sm leading-6 text-[#6B6B6B]">
          {business.description}
        </p>

        <div className="mt-5 border-y border-[#E5E1D8] py-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6B6B6B]">
            Asking price
          </p>

          <p className="mt-1 font-['DM_Serif_Display'] text-3xl text-[#171717]">
            {formatPrice(business.price)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 py-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6B6B6B]">
              Revenue
            </p>

            <p className="mt-1 text-sm font-semibold text-[#171717]">
              {formatPrice(business.revenue)}
              <span className="font-normal text-[#6B6B6B]">/mo</span>
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6B6B6B]">
              Profit
            </p>

            <p className="mt-1 text-sm font-semibold text-[#171717]">
              {formatPrice(business.profit)}
              <span className="font-normal text-[#6B6B6B]">/mo</span>
            </p>
          </div>
        </div>

        <a
          href={`/businesses/${business.id}`}
          className="mt-2 flex items-center justify-between border-t border-[#E5E1D8] pt-4 text-sm font-semibold text-[#171717] transition-colors group-hover:text-[#B08D57]"
        >
          View Opportunity

          <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </article>
  );
}