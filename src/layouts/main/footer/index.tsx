import { footerContent } from "../../../content/landing";

export function MainFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-slate-900">{footerContent.companyName}</p>
          <p className="max-w-md text-sm leading-6 text-slate-600">{footerContent.description}</p>
        </div>

        <div className="grid gap-4 text-sm text-slate-600">
          <div className="font-semibold text-slate-900">Social</div>
          {footerContent.socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition duration-200 ease-out hover:text-slate-900">
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-sm leading-6 text-slate-600">
          <p className="font-semibold text-slate-900">Address</p>
          {footerContent.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}
