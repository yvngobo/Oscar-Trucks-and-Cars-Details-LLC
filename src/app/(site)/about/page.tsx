import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Shield, Award, Users, Star, Check, ArrowUpRight, Phone } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { StatsBar } from "@/components/sections/StatsBar";

const values = [
  "We never cut corners — every detail matters",
  "On-time appointments, every time",
  "Premium, safe detailing products only",
  "Transparent pricing — no hidden fees",
  "Locally owned in Grayson, GA",
  "Mobile service across Gwinnett County",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[var(--background)]">
        {/* Hero */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <FadeUp>
              <p className="text-[#DC2626] text-xs font-semibold uppercase tracking-widest mb-4">
                ✦ Our Story
              </p>
              <h1 className="text-6xl lg:text-8xl font-black text-[var(--foreground)] leading-[0.9] tracking-[-0.04em] mb-6">
                Driven by
                <br />
                <span className="italic font-serif text-[#DC2626]">
                  passion.
                </span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-[var(--muted-text)] text-lg max-w-xl leading-relaxed">
                Founded in Grayson, GA with one mission: deliver showroom-quality
                results to every vehicle, every time.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Story + Photo */}
        <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Team photo */}
            <div className="lg:col-span-7 lg:sticky lg:top-24 order-2 lg:order-1">
              <div className="relative aspect-[3/2] rounded-[28px] overflow-hidden bg-[var(--muted-bg)]">
                <Image
                  src="/about-team.jpg"
                  alt="Oscar Trucks and Cars Details team in Grayson GA"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "40% center" }}
                  quality={95}
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 bg-[var(--card)] rounded-2xl p-4 shadow-xl max-w-[200px]">
                  <div className="flex items-center gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="fill-[#DC2626] text-[#DC2626]"
                      />
                    ))}
                  </div>
                  <p className="font-black text-2xl text-[var(--foreground)] leading-none">
                    29
                  </p>
                  <p className="text-[var(--muted-text)] text-xs font-medium mt-1">
                    Five-Star Google Reviews
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 order-1 lg:order-2 lg:pt-8">
              <FadeUp>
                <h2 className="text-4xl lg:text-5xl font-black text-[var(--foreground)] leading-[0.95] tracking-[-0.035em] mb-6">
                  Built on trust.
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="space-y-4 text-[var(--muted-text)] leading-relaxed">
                  <p>
                    Oscar Trucks and Cars Details LLC was born from a genuine
                    love of clean, well-maintained vehicles and a belief that
                    every car owner in Gwinnett County deserves
                    professional-grade results at fair prices.
                  </p>
                  <p>
                    What started as a passion project quickly grew into
                    Grayson&apos;s most trusted detailing service — over 500
                    vehicles detailed and 29 five-star Google reviews to show for
                    it.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <ul className="mt-8 space-y-3">
                  {values.map((v) => (
                    <li key={v} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 bg-[#DC2626] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check
                          size={11}
                          className="text-white"
                          strokeWidth={3.5}
                        />
                      </div>
                      <span className="text-[var(--foreground)] text-sm font-medium">
                        {v}
                      </span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsBar />

        {/* Why choose us */}
        <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-14 max-w-lg mx-auto">
            <FadeUp>
              <p className="text-[#DC2626] text-xs font-semibold uppercase tracking-widest mb-3">
                ✦ Why Oscar
              </p>
              <h2 className="text-5xl lg:text-6xl font-black text-[var(--foreground)] leading-[0.95] tracking-[-0.035em]">
                We treat every car like it&apos;s our{" "}
                <span className="italic font-serif text-[#DC2626]">own.</span>
              </h2>
            </FadeUp>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Shield,
                title: "Licensed & Insured",
                desc: "Fully licensed and insured. Your vehicle is always in professional hands.",
              },
              {
                icon: Award,
                title: "Premium Products",
                desc: "Professional-grade, pH-balanced products safe for all paint types, coatings, and interiors.",
              },
              {
                icon: Users,
                title: "Locally Owned",
                desc: "We're your neighbors in Grayson, GA. We care about our community.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.1}>
                <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-3xl p-7">
                  <div className="w-11 h-11 bg-[var(--muted-bg)] rounded-full flex items-center justify-center mb-5">
                    <Icon size={18} className="text-[#DC2626]" />
                  </div>
                  <h3 className="text-[var(--foreground)] font-bold text-lg tracking-tight mb-2">
                    {title}
                  </h3>
                  <p className="text-[var(--muted-text)] text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0A0A0A] text-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
            <FadeUp>
              <h2 className="text-5xl lg:text-6xl font-black leading-[0.95] tracking-[-0.035em] mb-6">
                Ready to{" "}
                <span className="italic font-serif text-[#DC2626]">shine?</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-white/60 mb-10 max-w-md mx-auto">
                Join hundreds of satisfied customers across Grayson and Gwinnett
                County.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="min-h-[52px] pl-7 pr-6 py-4 bg-white hover:bg-[#DC2626] hover:text-white text-[#0A0A0A] font-semibold text-sm rounded-full flex items-center justify-center gap-2 transition-colors duration-200 group"
                >
                  Book Your Detail
                  <ArrowUpRight
                    size={16}
                    className="group-hover:rotate-45 transition-transform duration-200"
                  />
                </Link>
                <a
                  href="tel:4709661113"
                  className="min-h-[52px] px-7 py-4 bg-transparent border border-white/25 hover:bg-white/5 text-white font-semibold text-sm rounded-full flex items-center justify-center gap-2 transition-colors duration-150"
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
