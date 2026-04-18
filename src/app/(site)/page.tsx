import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VideoHero } from "@/components/sections/VideoHero";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { InstagramReels } from "@/components/sections/InstagramReels";
import { FadeUp } from "@/components/ui/FadeUp";
import { ArrowUpRight, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-[var(--background)]">
        {/* Video Hero */}
        <VideoHero />

        {/* Editorial Hero */}
        <Hero />

        {/* Trust strip */}
        <FadeUp amount={0.5}>
          <div className="border-y border-[var(--card-border)] bg-[var(--card)] py-5">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[var(--muted-text)]">
                {[
                  "Licensed & Insured",
                  "29 Five-Star Reviews",
                  "Grayson, GA",
                  "Same-Day Bookings",
                  "Mobile Service",
                ].map((item, i) => (
                  <div key={item} className="flex items-center gap-3">
                    {i > 0 && (
                      <span className="w-1 h-1 bg-[var(--card-border)] rounded-full" />
                    )}
                    <span className="text-xs font-semibold tracking-wide uppercase">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Services */}
        <section id="services" className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <FadeUp className="max-w-xl">
              <p className="text-[#DC2626] text-xs font-semibold uppercase tracking-widest mb-3">
                ✦ Services
              </p>
              <h2 className="text-5xl lg:text-6xl font-black text-[var(--foreground)] leading-[0.95] tracking-[-0.035em]">
                Detailing
                <br />
                <span className="italic font-serif text-[var(--muted-text)]">
                  done right.
                </span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] hover:text-[#DC2626] transition-colors duration-150 group shrink-0"
              >
                View all services
                <ArrowUpRight
                  size={16}
                  className="group-hover:rotate-45 transition-transform duration-200"
                />
              </Link>
            </FadeUp>
          </div>
          <ServiceGrid />
        </section>

        {/* Before/After Gallery */}
        <section className="bg-[var(--muted-bg)] border-y border-[var(--card-border)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-28">
            <FadeUp className="text-center mb-12 max-w-xl mx-auto">
              <p className="text-[#DC2626] text-xs font-semibold uppercase tracking-widest mb-3">
                ✦ Our Work
              </p>
              <h2 className="text-5xl lg:text-6xl font-black text-[var(--foreground)] leading-[0.95] tracking-[-0.035em] mb-4">
                Before &amp; after.
              </h2>
              <p className="text-[var(--muted-text)] text-sm">
                Real results from real vehicles we&apos;ve detailed across
                Grayson, GA and Gwinnett County.
              </p>
            </FadeUp>
            <Gallery />
          </div>
        </section>

        {/* Instagram Reels */}
        <InstagramReels />

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="text-center mb-14 max-w-xl mx-auto">
            <p className="text-[#DC2626] text-xs font-semibold uppercase tracking-widest mb-3">
              ✦ Reviews
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-[var(--foreground)] leading-[0.95] tracking-[-0.035em]">
              Loved by{" "}
              <span className="italic font-serif text-[#DC2626]">locals.</span>
            </h2>
          </FadeUp>
          <Testimonials />
        </section>

        {/* Final CTA */}
        <section className="bg-[#0A0A0A] text-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
            <div
              aria-hidden
              className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, #DC2626 0%, transparent 70%)" }}
            />
            <FadeUp className="relative max-w-3xl">
              <p className="text-[#DC2626] text-xs font-semibold uppercase tracking-widest mb-4">
                ✦ Book Now
              </p>
              <h2 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-[-0.04em] mb-8">
                Ready for a<br />
                <span className="italic font-serif text-[#DC2626]">
                  showroom finish?
                </span>
              </h2>
              <p className="text-white/60 text-lg max-w-md mb-10">
                Book your detail today. We serve all of Gwinnett County — mobile
                service available.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="min-h-[56px] pl-7 pr-6 py-4 bg-white hover:bg-[#DC2626] hover:text-white text-[#0A0A0A] font-bold text-sm rounded-full inline-flex items-center justify-center gap-2 transition-colors duration-200 group"
                >
                  Book Your Detail
                  <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-200" />
                </Link>
                <a
                  href="tel:4709661113"
                  className="min-h-[56px] px-7 py-4 bg-transparent border border-white/25 hover:bg-white/5 text-white font-semibold text-sm rounded-full inline-flex items-center justify-center gap-2 transition-colors duration-150"
                >
                  <Phone size={15} />
                  (470) 966-1113
                </a>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
