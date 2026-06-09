"use client";

import { useState } from "react";

const TRUSTED_BY_PLACEHOLDER_MESSAGE = "Be the first to partner with us in this transformative journey!";

export function TrustedCompaniesCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Trusted By</p>
        <h2 className="mt-4 text-4xl font-semibold text-slate-900">Leading real estate teams rely on Oly.</h2>
      </div>

      <div
        className="overflow-hidden rounded-2xl bg-zinc-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <style>{`
          @keyframes scroll-right {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .carousel-container {
            animation: scroll-right 30s linear ${isHovered ? "paused" : "running"} infinite;
            animation-timing-function: linear;
          }
        `}</style>

        <div className="carousel-container flex w-max">
          {/* Original */}
          <div className="flex shrink-0 items-center justify-center whitespace-nowrap px-8 py-12">
            <p className="text-center text-base font-semibold text-slate-900 sm:text-lg">{TRUSTED_BY_PLACEHOLDER_MESSAGE}</p>
          </div>

          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0 items-center justify-center whitespace-nowrap px-8 py-12">
            <p className="text-center text-base font-semibold text-slate-900 sm:text-lg">{TRUSTED_BY_PLACEHOLDER_MESSAGE}</p>
          </div>

          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0 items-center justify-center whitespace-nowrap px-8 py-12">
            <p className="text-center text-base font-semibold text-slate-900 sm:text-lg">{TRUSTED_BY_PLACEHOLDER_MESSAGE}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
