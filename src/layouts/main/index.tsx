import type { ReactNode } from "react";
import { MainHeader } from "./header";
import { MainFooter } from "./footer";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-slate-900">
      <MainHeader />
      <main className="mx-auto max-w-7xl px-6 py-10">{children}</main>
      <MainFooter />
    </div>
  );
}
