import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-[var(--background)] min-h-[80dvh] flex items-center">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-24 w-full">
          <p className="text-[#DC2626] text-xs font-semibold uppercase tracking-widest mb-6">
            ✦ 404
          </p>
          <h1 className="text-[20vw] sm:text-[160px] font-black text-[var(--foreground)] leading-[0.85] tracking-[-0.05em] mb-4">
            Lost<span className="italic font-serif text-[#DC2626]">.</span>
          </h1>
          <p className="text-[var(--muted-text)] text-lg max-w-md leading-relaxed mb-10">
            This page doesn't exist — but your car deserves a detail that does.
            Head back home or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="group min-h-[52px] pl-6 pr-5 py-3 bg-[var(--foreground)] hover:bg-[#DC2626] active:scale-[0.97] text-[var(--background)] font-semibold text-sm rounded-full inline-flex items-center gap-2 transition-all duration-200"
            >
              Back to home
              <ArrowUpRight
                size={15}
                className="group-hover:rotate-45 transition-transform duration-200"
              />
            </Link>
            <a
              href="tel:4709661113"
              className="min-h-[52px] px-6 py-3 bg-[var(--card)] hover:bg-[var(--muted-bg)] active:scale-[0.97] text-[var(--foreground)] border border-[var(--card-border)] font-semibold text-sm rounded-full inline-flex items-center justify-center gap-2 transition-all duration-150"
            >
              <Phone size={14} />
              (470) 966-1113
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
