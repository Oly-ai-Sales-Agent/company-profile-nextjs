import Image from "next/image";

export function BrandLogo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Oly Logo"
        width={120}
        height={120}
        priority
      />
    </div>
  );
}
