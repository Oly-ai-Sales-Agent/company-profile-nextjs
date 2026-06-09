import Image from "next/image";
import Link from "next/link";

export function BrandLogo() {
  return (
    <Link
      href="#home"
      aria-label="Oly home"
      className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_6px_24px_-8px_rgba(11,11,15,0.18),0_2px_6px_-2px_rgba(11,11,15,0.08)] ring-1 ring-black/5 transition-transform duration-300 ease-out hover:-rotate-3"
    >
      <Image
        src="/logo.png"
        alt="Oly"
        width={56}
        height={56}
        priority
        className="h-9 w-9 object-contain"
      />
    </Link>
  );
}
