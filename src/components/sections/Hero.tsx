"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowUpRight, Phone, MapPin, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-[var(--background)]">
      {/* Decorative gradient blob */}
      <div
        aria-hidden
        className="absolute top-20 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #DC2626 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Top row: availability + rating */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-between gap-3 mb-10 lg:mb-14"
        >
          <div className="flex items-center gap-2.5 bg-[var(--card)] border border-[var(--card-border)] rounded-full px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
            <span className="text-[var(--foreground)] text-xs font-semibold">
              Booking Now · Mon–Sat 8am–6pm
            </span>
          </div>
          <div className="flex items-center gap-2 bg-[var(--card)] border border-[var(--card-border)] rounded-full px-4 py-1.5">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={11}
                  className="fill-[#DC2626] text-[#DC2626]"
                />
              ))}
            </div>
            <span className="text-[var(--foreground)] text-xs font-semibold">
              29 Five-Star Reviews
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-8 lg:mb-12"
        >
          <h1 className="text-[15vw] sm:text-7xl lg:text-[118px] font-black text-[var(--foreground)] leading-[0.88] tracking-[-0.04em]">
            Premium auto
            <br />
            detailing that{" "}
            <span className="italic font-serif text-[#DC2626]">shines.</span>
          </h1>
        </motion.div>

        {/* Sub-grid: text + CTAs + image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          {/* Left: description + CTAs */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="lg:col-span-5"
          >
            <p className="text-[var(--muted-text)] text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              We restore your vehicle to showroom condition — inside and out.
              Trusted by Gwinnett County car owners across Grayson, GA.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="min-h-[52px] pl-6 pr-5 py-4 bg-[var(--foreground)] hover:bg-[var(--action)] active:scale-[0.97] text-[var(--background)] font-semibold text-sm rounded-full flex items-center justify-center gap-2 transition-all duration-200 group"
              >
                Book Your Detail
                <ArrowUpRight
                  size={16}
                  className="group-hover:rotate-45 transition-transform duration-200"
                />
              </Link>
              <a
                href="tel:4709661113"
                className="min-h-[52px] px-6 py-4 bg-[var(--card)] hover:bg-[var(--muted-bg)] active:scale-[0.97] text-[var(--foreground)] border border-[var(--card-border)] font-semibold text-sm rounded-full flex items-center justify-center gap-2 transition-all duration-150"
              >
                <Phone size={15} />
                (470) 966-1113
              </a>
            </div>

            {/* Info pills */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[var(--muted-text)] text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#DC2626]" />
                Grayson, GA 30017
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={13} className="text-[#DC2626]" />
                Same-day bookings
              </div>
            </div>
          </motion.div>

          {/* Right: feature image */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[4/3] lg:aspect-[5/3.2] rounded-[28px] overflow-hidden bg-[var(--muted-bg)]">
              <Image
                src="/hero-feature.png"
                alt="Luxury car being detailed at Oscar Trucks and Cars Details in Grayson GA"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/30 via-transparent to-transparent" />

              {/* Floating stat card */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md border border-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#DC2626] rounded-full flex items-center justify-center">
                    <Star
                      size={16}
                      className="fill-white text-white"
                    />
                  </div>
                  <div>
                    <p className="text-[var(--foreground)] font-black text-lg leading-none">
                      5.0
                    </p>
                    <p className="text-[var(--muted-text)] text-[10px] font-medium">
                      29 Google Reviews
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="absolute top-4 right-4 bg-[#DC2626] text-white rounded-full px-4 py-2 shadow-xl">
                <p className="font-bold text-xs tracking-wide">
                  ✦ LICENSED & INSURED
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
