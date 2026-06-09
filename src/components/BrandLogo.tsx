import Image from "next/image";
import Link from "next/link";

export function BrandLogo() {
  return (
    <Link
      href="#home"
      aria-label="Oly home"
      className="group flex items-center gap-3 py-3"
    >
      <Image
        src="/logo.png"
        alt="Oly"
        width={64}
        height={64}
        priority
        className="h-14 w-14 flex-shrink-0 object-contain"
      />
      <span className="block text-[11px] sm:text-[13px] font-medium leading-snug text-[var(--ink-soft)] max-w-[120px] sm:max-w-[140px]">
        Redefining Real Estate<br />Sales Operations
      </span>
    </Link>
  );
}
