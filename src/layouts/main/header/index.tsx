"use client";

import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "../../../components/BrandLogo";
import { navItems } from "../../../content/landing";

function useClock() {
  const [now, setNow] = useState<string>("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setNow(
        d.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Africa/Cairo",
        })
      );
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return now;
}

export function MainHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollYRef = useRef(0);
  const ticking = useRef(false);
  const time = useClock();

  useEffect(() => {
    const update = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current.offsetHeight}px`
        );
      }
    };
    const onScroll = () => {
      if (ticking.current) return;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - scrollYRef.current;
        if (delta > 0 && y > 120) {
          setIsHidden(true);
          setMobileMenuOpen(false);
        } else if (delta < 0) {
          setIsHidden(false);
        }
        scrollYRef.current = y;
        ticking.current = false;
      });
      ticking.current = true;
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-40 transition-transform duration-500 ease-out ${
        isHidden ? "-translate-y-[140%]" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-4 px-5 pt-5 sm:px-8 sm:pt-6">
        <BrandLogo />

        {/* Center meta — Cairo / time */}
        <div className="hidden md:flex items-center gap-8 rounded-full bg-white/70 px-6 py-3 text-[13px] font-medium text-[var(--ink)] shadow-[0_6px_24px_-12px_rgba(11,11,15,0.18)] ring-1 ring-black/5 backdrop-blur-xl">
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Cairo
          </span>
          <span className="tabular-nums text-[var(--ink-soft)]">{time || "—"}</span>
        </div>

        {/* Right pill nav */}
        <nav className="flex items-center gap-1 rounded-full bg-white/85 p-1.5 shadow-[0_6px_24px_-12px_rgba(11,11,15,0.22)] ring-1 ring-black/5 backdrop-blur-xl">
          {navItems.slice(0, 3).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden sm:inline-flex items-center rounded-full px-3.5 py-2 text-[13px] font-medium text-[var(--ink-soft)] transition hover:bg-black/[0.04] hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}

          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="sm:hidden inline-flex flex-col items-center justify-center gap-[5px] rounded-full p-2.5 transition hover:bg-black/[0.04]"
          >
            <span
              className={`h-0.5 w-[18px] rounded-full bg-[var(--ink)] transition-transform duration-200 ${
                mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-[18px] rounded-full bg-[var(--ink)] transition-opacity duration-200 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-[18px] rounded-full bg-[var(--ink)] transition-transform duration-200 ${
                mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>

          <a
            href="#demo"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-2 text-[13px] font-medium text-white transition hover:bg-black"
          >
            Request a Demo
          </a>
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`sm:hidden mx-5 overflow-hidden rounded-2xl bg-white/95 ring-1 ring-black/5 backdrop-blur-xl transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? "mt-2 max-h-96 opacity-100 shadow-[0_8px_32px_-8px_rgba(11,11,15,0.2)]"
            : "max-h-0 opacity-0"
        }`}
      >
        {navItems.slice(0, 4).map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center px-5 py-4 text-sm font-medium text-[var(--ink-soft)] border-b border-black/[0.05] transition hover:bg-black/[0.03] hover:text-[var(--ink)]"
          >
            {item.label}
          </a>
        ))}
        <div className="p-3">
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center rounded-full bg-[var(--ink)] px-4 py-3 text-[13px] font-medium text-white transition hover:bg-black"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </header>
  );
}
