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
        if (delta > 0 && y > 120) setIsHidden(true);
        else if (delta < 0) setIsHidden(false);
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
      <div className="mx-auto flex w-full max-w-[1320px] items-start justify-between gap-4 px-5 pt-5 sm:px-8 sm:pt-6">
        <BrandLogo />

        {/* Center meta — Cairo / time / email — mimics noteworthy hello@ block */}
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
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-2 text-[13px] font-medium text-white transition hover:bg-black"
          >
            Request a Demo
            {/* <span aria-hidden className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px]">
              ✦
            </span> */}
          </a>
        </nav>
      </div>
    </header>
  );
}
