"use client";

import { useState } from "react";
import { trustedCompanies } from "@/content/landing";

export function TrustedCompaniesCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Trusted By</p>
        <h2 className="mt-4 text-4xl font-semibold text-slate-900">Leading real estate teams rely on Oly.</h2>
      </div>

      <div
        className="overflow-hidden rounded-2xl bg-white"
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

        <div className="carousel-container flex">
          {/* Original set */}
          <div className="flex shrink-0">
            {trustedCompanies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex w-80 shrink-0 flex-col items-center justify-center px-8 py-12"
              >
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-slate-900 text-4xl">
                  {company.logo}
                </div>
                <p className="text-center font-semibold text-slate-900">{company.name}</p>
                <p className="mt-2 text-center text-sm text-slate-600">{company.leads}</p>
              </div>
            ))}
          </div>

          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0">
            {trustedCompanies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex w-80 shrink-0 flex-col items-center justify-center px-8 py-12"
              >
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-slate-900 text-4xl">
                  {company.logo}
                </div>
                <p className="text-center font-semibold text-slate-900">{company.name}</p>
                <p className="mt-2 text-center text-sm text-slate-600">{company.leads}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
