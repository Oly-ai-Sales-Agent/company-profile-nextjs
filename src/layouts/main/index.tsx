import type { ReactNode } from "react";
import { MainHeader } from "./header";
import { MainFooter } from "./footer";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--ink)] grain-bg">
      <MainHeader />
      <main className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 pt-32 sm:pt-40 pb-24">
        {children}
      </main>
      <MainFooter />
    </div>
  );
}
