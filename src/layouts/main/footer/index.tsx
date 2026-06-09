import { footerContent, navItems } from "../../../content/landing";

export function MainFooter() {
  return (
    <footer className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 pb-10">
      <div className="rounded-[2rem] bg-[var(--ink)] p-8 sm:p-12 text-white shadow-[0_30px_80px_-40px_rgba(11,11,15,0.6)]">
        <div className="grid gap-10 sm:grid-cols-12">
          <div className="sm:col-span-7 space-y-6">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              {footerContent.companyName}
            </p>
            <h3 className="text-3xl sm:text-5xl leading-[1.05] tracking-tight">
              Let&apos;s make your sales floor{" "}
              <span className="font-display text-white/90">unmissable.</span>
            </h3>
            {/* <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition hover:bg-white/90"
            >
              Request a demo
              <span aria-hidden>→</span>
            </a> */}
          </div>

          <div className="sm:col-span-5 grid grid-cols-2 gap-8 text-sm">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">Navigate</p>
              <ul className="space-y-2 text-white/80">
                {navItems.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:text-white transition">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">Address</p>
              <ul className="space-y-2 text-white/80">
                {footerContent.addressLines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between text-xs text-white/40">
          <p>© {new Date().getFullYear()} {footerContent.companyName}. All rights reserved.</p>
          <p>{footerContent.description}</p>
        </div>
      </div>
    </footer>
  );
}
