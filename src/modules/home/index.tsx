import {
  demoSection,
  heroContent,
  pricingPlans,
  whyOlySection,
  whatOlyDoesSection,
} from "../../content/landing";
import { TrustedCompaniesCarousel } from "../../components/TrustedCompaniesCarousel";
import { DemoRequestForm } from "../../components/DemoRequestForm";

export function HomeModule() {
  return (
    <div className="space-y-24">
      <section
        id="home"
        className="rounded-[2rem] border border-zinc-200 bg-white p-10 shadow-sm"
      >
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{heroContent.eyebrow}</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{heroContent.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={heroContent.primaryCta.href}
              className="inline-flex rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition duration-200 ease-out hover:bg-slate-800"
            >
              {heroContent.primaryCta.label}
            </a>
            <a
              href={heroContent.secondaryCta.href}
              className="inline-flex rounded-full border border-slate-200 px-7 py-3 text-sm font-semibold text-slate-900 transition duration-200 ease-out hover:border-slate-300 hover:bg-slate-100"
            >
              {heroContent.secondaryCta.label}
            </a>
          </div>
        </div>
      </section>

      <section id="why-oly" className="space-y-12">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Why Oly</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900">{whyOlySection.headline}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{whyOlySection.paragraph}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {whyOlySection.problems.map((problem) => (
            <div key={problem.title} className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{problem.title}</h3>
              <p className="mt-3 text-slate-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="what-oly-does" className="space-y-12">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">What Oly Does</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900">{whatOlyDoesSection.headline}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{whatOlyDoesSection.paragraph}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {whatOlyDoesSection.features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm hover:shadow-lg transition duration-200 ease-out">
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="trust"
        className="space-y-6 rounded-[2rem] border border-zinc-200 bg-white p-10 shadow-sm"
      >
        <TrustedCompaniesCarousel />
      </section>

      <section id="pricing" className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Pricing</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900">Simple plans for growing development teams</h2>
        </div>

        <div className="mx-auto max-w-2xl">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-slate-900">{plan.title}</h3>
              <p className="mt-4 text-4xl font-semibold text-slate-900">{plan.price}</p>
              <ul className="mt-6 space-y-3 text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 text-green-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="demo"
        className="rounded-[2rem] border border-zinc-200 bg-white p-10 shadow-sm transition duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{demoSection.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">{demoSection.title}</h2>
          <p className="mt-4 text-slate-600">{demoSection.description}</p>
        </div>
        <DemoRequestForm />
      </section>
    </div>
  );
}
