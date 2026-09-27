export default function SellerCard({ business, onContact }) {
  return (
    <div className="border border-[#E5E1D8] bg-white p-7">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B08D57]">
        SELLER
      </p>

      <div className="mt-7 border-b border-[#E5E1D8] pb-6">
        <h3 className="font-['DM_Serif_Display'] text-3xl text-[#171717]">
          Private Seller
        </h3>

        <p className="mt-2 text-sm text-[#6B6B6B]">
          Owner of {business.name}
        </p>
      </div>

      <div className="space-y-4 py-6">
        <div className="flex justify-between gap-4 text-sm">
          <span className="text-[#6B6B6B]">Business age</span>
          <span className="font-medium text-[#171717]">
            {business.age}
          </span>
        </div>

        <div className="flex justify-between gap-4 text-sm">
          <span className="text-[#6B6B6B]">Location</span>
          <span className="font-medium text-[#171717]">
            {business.country}
          </span>
        </div>

        <div className="flex justify-between gap-4 text-sm">
          <span className="text-[#6B6B6B]">Verification</span>
          <span className="font-medium text-[#171717]">
            {business.verified ? "Verified" : "Pending"}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onContact}
        className="w-full bg-[#171717] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#B08D57]"
      >
        Contact Seller →
      </button>
    </div>
  );
}