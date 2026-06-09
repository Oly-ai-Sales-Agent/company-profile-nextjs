import {
  demoSection,
  heroContent,
  pricingPlans,
  whyOlySection,
  whatOlyDoesSection,
} from "../../content/landing";
import { TrustedCompaniesCarousel } from "../../components/TrustedCompaniesCarousel";
import { DemoRequestForm } from "../../components/DemoRequestForm";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--ink-soft)]">
      <span className="inline-block h-1 w-6 rounded-full bg-[var(--ink)]" />
      {children}
    </p>
  );
}

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)] underline-offset-4 hover:underline"
    >
      {children}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}

export function HomeModule() {
  return (
    <div className="space-y-28 sm:space-y-40">
      {/* ───────────── HERO ───────────── */}
      <section id="home" className="relative">
        <h1 className="max-w-[18ch] text-[44px] leading-[1.02] tracking-[-0.02em] font-medium text-[var(--ink)] sm:text-[88px] sm:leading-[0.98]">
          <span className="font-display text-[var(--ink)]">Oly</span>{" "}
          helps developers{" "}
          <span className="font-display">qualify</span> leads,{" "}
          <span className="font-display">accelerate</span> deals, and keep sales{" "}
          <span className="font-display">moving.</span>
        </h1>

        <div className="mt-12 grid gap-10 sm:grid-cols-12 sm:items-end">
          <p className="sm:col-span-7 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">
            {heroContent.description}
          </p>
          <div className="sm:col-span-5 flex flex-wrap items-center justify-start gap-6 sm:justify-end">
            <a
              href={heroContent.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-black"
            >
              {heroContent.primaryCta.label}
              <span aria-hidden>→</span>
            </a>
            {/* <ArrowLink href={heroContent.secondaryCta.href}>
              {heroContent.secondaryCta.label}
            </ArrowLink> */}
          </div>
        </div>

        {/* Hero meta strip
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-[var(--hairline)] ring-1 ring-[var(--hairline)] sm:grid-cols-4">
          {[
            { k: "24/7", v: "Always responding" },
            { k: "2 langs", v: "Arabic & English" },
            { k: "Multi", v: "Channels unified" },
            { k: "Live", v: "Listing sync" },
          ].map((s) => (
            <div key={s.k} className="bg-white p-6 sm:p-8">
              <p className="font-display text-4xl sm:text-5xl text-[var(--ink)]">{s.k}</p>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">{s.v}</p>
            </div>
          ))}
        </div> */}
        
      </section>

      {/* ───────────── WHY OLY ───────────── */}
      <section id="why-oly" className="space-y-14">
        <div className="grid gap-10 sm:grid-cols-12 sm:items-end">
          <div className="sm:col-span-7 space-y-6">
            <Eyebrow>Why Oly</Eyebrow>
            <h2 className="text-4xl sm:text-6xl leading-[1.05] tracking-[-0.02em] text-[var(--ink)]">
              Managing sales inquiries is{" "}
              <span className="font-display">harder</span> than it should be.
            </h2>
          </div>
          <p className="sm:col-span-5 text-base leading-relaxed text-[var(--ink-soft)]">
            {whyOlySection.paragraph}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {whyOlySection.problems.map((p, i) => (
            <article
              key={p.title}
              className="group relative rounded-[28px] bg-white p-8 sm:p-10 ring-1 ring-black/[0.04] transition hover:ring-black/10"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-display text-2xl text-[var(--ink-soft)]">
                  0{i + 1}
                </span>
                {/* <span aria-hidden className="text-xl text-[var(--ink-soft)] transition group-hover:translate-x-1 group-hover:text-[var(--ink)]">
                  →
                </span> */}
              </div>
              <h3 className="mt-8 text-2xl leading-snug tracking-tight text-[var(--ink)]">
                {p.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ───────────── WHAT OLY DOES ───────────── */}
      <section id="what-oly-does" className="space-y-14">
        <div className="max-w-4xl space-y-6">
          <Eyebrow>What Oly Does</Eyebrow>
          <h2 className="text-4xl sm:text-6xl leading-[1.05] tracking-[-0.02em] text-[var(--ink)]">
            Everything your sales team needs,{" "}
            <span className="font-display">running autonomously.</span>
          </h2>
          <p className="text-base text-[var(--ink-soft)]">{whatOlyDoesSection.paragraph}</p>
        </div>

        {/* Bento: first card large */}
        <div className="grid auto-rows-[minmax(180px,auto)] gap-5 sm:grid-cols-6">
          {whatOlyDoesSection.features.map((f, i) => {
            const wide = i === 0;
            return (
              <article
                key={f.title}
                className={`relative flex flex-col justify-between rounded-[28px] bg-white p-7 ring-1 ring-black/[0.04] transition hover:-translate-y-1 hover:ring-black/10 ${
                  wide ? "sm:col-span-3 sm:row-span-2" : "sm:col-span-2"
                }`}
              >
                <div className="flex items-center justify-between">
                <span className="font-display text-2xl text-[var(--ink-soft)]">
                  0{i + 1}
                </span>
                  {/* <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--background)] text-sm font-medium text-[var(--ink)] ring-1 ring-black/5">
                    {String(i + 1).padStart(2, "0")}
                  </span> */}
                  {/* <span aria-hidden className="text-[var(--ink-soft)]">✦</span> */}
                </div>
                <div className="mt-10">
                  <h3 className={`tracking-tight text-[var(--ink)] ${wide ? "text-3xl sm:text-4xl" : "text-xl"}`}>
                    {wide ? (
                      <>
                        <span className="font-display">Always</span> on.
                        <br /> Always answering.
                      </>
                    ) : (
                      f.title
                    )}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--ink-soft)]">
                    {f.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ───────────── TRUST ───────────── */}
      <section id="trust">
        <div className="rounded-[32px] bg-white p-8 sm:p-12 ring-1 ring-black/[0.04]">
          <TrustedCompaniesCarousel />
        </div>
      </section>

      {/* ───────────── PRICING ───────────── */}
      <section id="pricing" className="space-y-14">
        <div className="grid gap-10 sm:grid-cols-12 sm:items-end">
          <div className="sm:col-span-7 space-y-6">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="text-4xl sm:text-6xl leading-[1.05] tracking-[-0.02em] text-[var(--ink)]">
              Simple plans for{" "}
              <span className="font-display">growing</span> development teams.
            </h2>
          </div>
          {/* <p className="sm:col-span-5 text-base text-[var(--ink-soft)]">
            One tailored plan, shaped around your sales floor, your channels, and your projects.
          </p> */}
        </div>

        <div className="mx-auto w-full max-w-3xl">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className="overflow-hidden rounded-[32px] bg-[var(--ink)] text-white shadow-[0_30px_80px_-40px_rgba(11,11,15,0.5)]"
            >
              <div className="grid gap-10 p-10 sm:grid-cols-12 sm:p-12">
                <div className="sm:col-span-5 space-y-6 border-b border-white/10 pb-8 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-10">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{plan.title} plan</p>
                  <p className="font-display text-7xl leading-none text-white">{plan.price}</p>
                  <p className="text-sm text-white/60">
                    Built around your projects, channels, and existing sales workflow.
                  </p>
                  <a
                    href="#demo"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition hover:bg-white/90"
                  >
                    Contact us <span aria-hidden>→</span>
                  </a>
                </div>
                <ul className="sm:col-span-7 grid grid-cols-1 gap-x-8 gap-y-3 text-[15px] text-white/85 sm:grid-cols-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── DEMO ───────────── */}
      <section id="demo">
        <div className="grid gap-10 rounded-[32px] bg-white p-8 sm:p-14 ring-1 ring-black/[0.04] sm:grid-cols-12">
          <div className="sm:col-span-5 space-y-6">
            <Eyebrow>{demoSection.eyebrow}</Eyebrow>
            <h2 className="text-4xl sm:text-5xl leading-[1.05] tracking-[-0.02em] text-[var(--ink)]">
              Stay <span className="font-display">first </span> in line for <span className="font-display">Oly&apos;s </span> demo.
            </h2>
            <p className="text-base text-[var(--ink-soft)]">{demoSection.description}</p>

            {/* <div className="mt-8 flex items-center gap-3 rounded-2xl bg-[var(--background)] p-4 ring-1 ring-black/5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ink)] text-white text-sm">✦</span>
              <p className="text-sm text-[var(--ink-soft)]">
                We reply within one business day, in Arabic or English.
              </p>
            </div> */}
          </div>
          <div className="sm:col-span-7">
            <DemoRequestForm />
          </div>
        </div>
      </section>
    </div>
  );
}
