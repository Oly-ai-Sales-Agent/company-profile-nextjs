import Image from "next/image";

export function BrandLogo() {
  return (
    <div className="flex flex-col items-center gap-1 text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left">
      <Image
        src="/logo.png"
        alt="Oly Logo"
        width={120}
        height={120}
        priority
      />
      <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500 sm:text-sm sm:tracking-[0.2em]">
        Redefining Real Estate Sales Operations
      </span>
    </div>
  );
}
