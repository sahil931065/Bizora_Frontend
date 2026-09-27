import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const actionsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        navRef.current,
        {
          y: -30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        }
      )
        .fromTo(
          logoRef.current,
          {
            y: 8,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
          },
          "-=0.4"
        )
        .fromTo(
          linksRef.current,
          {
            y: 8,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.08,
          },
          "-=0.3"
        )
        .fromTo(
          actionsRef.current,
          {
            y: 8,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
          },
          "-=0.25"
        );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed left-0 right-0 top-5 z-50 px-4 opacity-0"
    >
      <nav className="mx-auto max-w-6xl rounded-2xl border border-black/5 bg-white/95 px-5 py-3 shadow-[0_8px_30px_rgba(23,23,23,0.08)] backdrop-blur-md">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            ref={logoRef}
            href="/"
            className="font-['DM_Serif_Display'] text-2xl tracking-tight text-[#171717]"
          >
            Bizora
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {[
              ["Browse Businesses", "/businesses"],
              ["How It Works", "/how-it-works"],
              ["About", "/about"],
            ].map(([label, href], index) => (
              <a
                key={label}
                ref={(el) => {
                  linksRef.current[index] = el;
                }}
                href={href}
                className="text-sm font-medium text-[#171717]/75 transition-colors duration-200 hover:text-[#B08D57]"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div
            ref={actionsRef}
            className="hidden items-center gap-4 md:flex"
          >
            <a
              href="/login"
              className="text-sm font-semibold text-[#171717] transition-colors duration-200 hover:text-[#B08D57]"
            >
              Sign in
            </a>

            <a
              href="/sell"
              className="rounded-xl bg-[#171717] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#B08D57]"
            >
              Sell a Business
            </a>
          </div>

          {/* Mobile menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-[#171717]" />
              <span className="block h-0.5 w-5 bg-[#171717]" />
              <span className="block h-0.5 w-5 bg-[#171717]" />
            </div>
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <div className="mt-4 border-t border-black/5 pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              <a
                href="/businesses"
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#171717] hover:bg-[#F7F5F0]"
                onClick={() => setMobileOpen(false)}
              >
                Browse Businesses
              </a>

              <a
                href="/how-it-works"
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#171717] hover:bg-[#F7F5F0]"
                onClick={() => setMobileOpen(false)}
              >
                How It Works
              </a>

              <a
                href="/about"
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#171717] hover:bg-[#F7F5F0]"
                onClick={() => setMobileOpen(false)}
              >
                About
              </a>

              <div className="my-2 h-px bg-black/5" />

              <a
                href="/login"
                className="rounded-lg px-3 py-3 text-sm font-semibold text-[#171717]"
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </a>

              <a
                href="/sell"
                className="mt-1 rounded-xl bg-[#171717] px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Sell a Business
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}