"use client";

import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "../../../components/BrandLogo";
import { navItems } from "../../../content/landing";

export function MainHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [isHidden, setIsHidden] = useState(false);
  const scrollYRef = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--header-height", `${height}px`);
      }
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDelta = currentScrollY - scrollYRef.current;
          
          // Hide on scroll down past 80px threshold, show on scroll up
          if (scrollDelta > 0 && currentScrollY > 80) {
            setIsHidden(true);
          } else if (scrollDelta < 0) {
            setIsHidden(false);
          }
          
          scrollYRef.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 border-b border-zinc-200 bg-white/95 px-6 py-4 backdrop-blur-xl transition-transform duration-300 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
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
