"use client";

import { useEffect, useRef } from "react";
import { BrandLogo } from "../../../components/BrandLogo";
import { navItems } from "../../../content/landing";

export function MainHeader() {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--header-height", `${height}px`);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 px-6 py-4 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
        <BrandLogo />
        <nav className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition duration-200 ease-out hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
