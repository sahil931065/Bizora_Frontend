export default function BusinessGallery({ business }) {
  return (
    <section className="mt-10">
      <div className="relative aspect-16/8 overflow-hidden bg-[#171717]">
        <div className="absolute inset-0 bg-[#26231f]" />

        <div className="absolute left-8 top-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
            BUSINESS PREVIEW
          </p>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-['DM_Serif_Display'] text-[clamp(6rem,18vw,15rem)] leading-none text-[#F7F5F0]/10">
            {business.initials}
          </span>
        </div>

        <div className="absolute bottom-8 left-8 max-w-md">
          <p className="text-sm leading-6 text-[#F7F5F0]/60">
            {business.name} · {business.visual}
          </p>
        </div>

        <div className="absolute bottom-8 right-8 h-px w-32 bg-[#B08D57]" />
      </div>

      <p className="mt-3 text-xs text-[#6B6B6B]">
        Business visual placeholder — listing imagery can be connected to the
        marketplace database later.
      </p>
    </section>
  );
}