"use client";

const MESSAGE = "Be the first to partner with us in this transformative journey!";

export function TrustedCompaniesCarousel() {
  const items = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="space-y-10">
      <div className="grid gap-6 sm:grid-cols-12 sm:items-end">
        <div className="sm:col-span-7 space-y-4">
          <p className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--ink-soft)]">
            <span className="inline-block h-1 w-6 rounded-full bg-[var(--ink)]" />
            Trusted By
          </p>
          <h2 className="text-3xl sm:text-5xl leading-[1.05] tracking-[-0.02em] text-[var(--ink)]">
            Leading real estate teams{" "}
            <span className="font-display">rely on Oly.ai</span>
          </h2>
        </div>
      </div>

      <div className="marquee-pause relative overflow-hidden rounded-2xl bg-[#F5F5F7] py-5 ring-1 ring-black/[0.07]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F5F5F7] to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F5F5F7] to-transparent"
        />
        <div className="marquee-track flex w-max">
          {[...items, ...items].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-3 px-8">
              {/* <span aria-hidden className="text-[var(--ink-soft)] opacity-40">✦</span> */}
              <p className="whitespace-nowrap text-sm font-medium text-[var(--ink)]">
                {MESSAGE}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
