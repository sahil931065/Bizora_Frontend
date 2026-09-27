export default function ContactSellerModal({
  business,
  isOpen,
  onClose,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#171717]/60 px-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-seller-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-lg bg-[#F7F5F0] p-7 sm:p-9">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B08D57]">
              CONTACT SELLER
            </p>

            <h2
              id="contact-seller-title"
              className="mt-3 font-['DM_Serif_Display'] text-4xl text-[#171717]"
            >
              Interested in {business.name}?
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact dialog"
            className="text-2xl text-[#6B6B6B] hover:text-[#171717]"
          >
            ×
          </button>
        </div>

        <p className="mt-5 text-sm leading-7 text-[#6B6B6B]">
          Buyer-seller messaging will be connected to the Bizora backend in a
          later version. For now, this is a demo interaction.
        </p>

        <div className="mt-7">
          <label
            htmlFor="buyer-message"
            className="text-xs font-semibold uppercase tracking-[0.15em] text-[#171717]"
          >
            Your message
          </label>

          <textarea
            id="buyer-message"
            rows="5"
            placeholder="I'd like to learn more about this business..."
            className="mt-3 w-full resize-none border border-[#E5E1D8] bg-white p-4 text-sm text-[#171717] outline-none placeholder:text-[#999] focus:border-[#B08D57]"
          />
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full bg-[#171717] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#B08D57]"
        >
          Send Inquiry →
        </button>
      </div>
    </div>
  );
}