"use client";

import { useRef, useEffect } from "react";
import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

export function VideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Manual scroll tracker — more reliable than useScroll({target}) on iOS Safari
  const scrollYProgress = useMotionValue(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const update = (y: number) => {
      const el = containerRef.current;
      if (!el) return;
      const top = el.offsetTop;
      const totalDistance = el.offsetHeight - window.innerHeight;
      if (totalDistance <= 0) return;
      scrollYProgress.set(Math.min(1, Math.max(0, (y - top) / totalDistance)));
    };
    // Run once on mount then track changes
    update(window.scrollY ?? 0);
    return scrollY.on("change", update);
  }, [scrollY, scrollYProgress]);

  const wipePercent = useTransform(scrollYProgress, [0.1, 0.85], [100, 0]);
  const cleanClipPath = useTransform(wipePercent, (v) => `inset(0 ${v}% 0 0)`);
  const dividerLeft = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);
  const beforeOpacity = useTransform(scrollYProgress, [0.4, 0.65], [1, 0]);
  const afterOpacity  = useTransform(scrollYProgress, [0.18, 0.42], [0, 1]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  /* ─────────────────────────────────────────────────────────────
     Car-container shared mask: fades top edge so OSCAR DETAILING
     text shows through behind, and bottom edge into the info strip.
  ───────────────────────────────────────────────────────────── */
  const maskStyle = {
    WebkitMaskImage:
      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.45) 22%, black 46%, black 82%, transparent 100%)",
    maskImage:
      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.45) 22%, black 46%, black 82%, transparent 100%)",
  } as React.CSSProperties;

  /* Desktop mask keeps car solid at the bottom (no bottom fade) */
  const maskStyleDesktop = {
    WebkitMaskImage:
      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.45) 22%, black 46%, black 100%)",
    maskImage:
      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.45) 22%, black 46%, black 100%)",
  } as React.CSSProperties;

  return (
    <div ref={containerRef} className="relative h-[280vh]">
      <section className="sticky top-0 h-[100dvh] overflow-hidden bg-[#050505]">

        {/* ── Layer 1: Business name background text ──────────────── */}
        <div
          aria-hidden
          className="absolute inset-0 z-[1] flex flex-col items-center overflow-hidden pointer-events-none select-none"
          style={{ paddingTop: "clamp(62px, 7vh, 88px)" }}
        >
          <span
            className="font-black uppercase leading-none block"
            style={{
              fontSize: "clamp(52px, 13.5vw, 220px)",
              letterSpacing: "-0.04em",
              color: "rgba(255,255,255,0.42)",
            }}
          >
            OSCAR
          </span>
          <span
            className="font-black uppercase leading-none block"
            style={{
              fontSize: "clamp(26px, 6.8vw, 114px)",
              letterSpacing: "-0.03em",
              color: "rgba(255,255,255,0.34)",
            }}
          >
            TRUCKS &amp; CARS
          </span>
          <span
            className="font-black uppercase leading-none block"
            style={{
              fontSize: "clamp(20px, 5.2vw, 88px)",
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.28)",
            }}
          >
            DETAILS LLC
          </span>
        </div>

        {/* ── Layer 2: Warm glow ──────────────────────────────────── */}
        <div
          aria-hidden
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 80%, rgba(110,18,18,0.55) 0%, transparent 70%)",
          }}
        />

        {/* ── Layer 3: Dirty car ──────────────────────────────────── */}
        {/*
            MOBILE  – bounded 3:2 container, car shown in full (no cropping)
            DESKTOP – full-bleed inset-0
        */}
        <div
          className="absolute left-0 right-0 z-[3]
                     bottom-[158px] h-[78vw]
                     sm:top-0 sm:bottom-0 sm:h-auto"
          style={maskStyle}
        >
          <Image
            src="/car-dirty.png"
            alt="Car before professional detailing — dirty and neglected"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="(max-width: 640px) 180vw, 100vw"
          />
        </div>

        {/* ── Layer 4: Clean car (scroll wipe) ───────────────────── */}
        <motion.div
          className="absolute left-0 right-0 z-[4]
                     bottom-[158px] h-[78vw]
                     sm:top-0 sm:bottom-0 sm:h-auto"
          style={{ clipPath: cleanClipPath, ...maskStyle }}
        >
          <Image
            src="/car-clean.png"
            alt="Car after Oscar Trucks and Cars Details professional detailing — showroom finish"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="(max-width: 640px) 180vw, 100vw"
          />
        </motion.div>

        {/* ── Layer 5: Wipe divider ───────────────────────────────── */}
        <motion.div
          className="absolute top-0 bottom-0 z-[5] w-px pointer-events-none"
          style={{ left: dividerLeft }}
        >
          <div className="w-full h-full bg-white/85 shadow-[0_0_16px_4px_rgba(255,255,255,0.45),0_0_40px_8px_rgba(220,38,38,0.25)]" />
        </motion.div>

        {/* ── Before / After badges ───────────────────────────────── */}
        {/* Mobile: sit within the car container. Desktop: above info strip */}
        <motion.div
          className="absolute z-[6] left-4 sm:left-10
                     bottom-[248px] sm:bottom-[108px]"
          style={{ opacity: beforeOpacity }}
        >
          <span className="inline-flex items-center bg-black/60 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5 text-white/65 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em]">
            Before
          </span>
        </motion.div>
        <motion.div
          className="absolute z-[6] right-4 sm:right-10
                     bottom-[248px] sm:bottom-[108px]"
          style={{ opacity: afterOpacity }}
        >
          <span className="inline-flex items-center bg-[#DC2626] rounded-full px-3 py-1.5 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_0_16px_rgba(220,38,38,0.5)]">
            After
          </span>
        </motion.div>

        {/* ── Layer 6: Bottom info strip ──────────────────────────── */}
        <div
          className="absolute bottom-0 inset-x-0 z-[7]"
          style={{
            background:
              "linear-gradient(to top, #050505 0%, rgba(5,5,5,0.95) 60%, transparent 100%)",
            paddingTop: "60px",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-14 pb-6 sm:pb-10">

            {/* Mobile */}
            <div className="sm:hidden flex flex-col gap-2.5">
              <p className="text-[#DC2626] text-[8px] font-bold uppercase tracking-[0.22em]">
                ✦ Grayson, GA · Gwinnett County
              </p>
              <h1
                className="font-black uppercase text-white leading-[0.88] tracking-[-0.03em]"
                style={{ fontSize: "clamp(24px, 7vw, 38px)" }}
              >
                Your car deserves
                <br />
                <span className="text-[#DC2626]">the best.</span>
              </h1>
              <div className="flex gap-2.5 mt-1">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 min-h-[44px] pl-5 pr-4 bg-white hover:bg-[#DC2626] hover:text-white text-[#050505] font-bold text-[11px] uppercase tracking-wide rounded-full transition-all duration-200 active:scale-[0.97]"
                >
                  Book detail
                  <ArrowUpRight size={12} className="group-hover:rotate-45 transition-transform" />
                </Link>
                <a
                  href="tel:4709661113"
                  className="inline-flex items-center gap-1.5 min-h-[44px] px-4 border border-white/25 text-white/60 text-[11px] font-medium rounded-full transition-all duration-200 active:scale-[0.97]"
                >
                  <Phone size={12} />
                  (470) 966-1113
                </a>
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden sm:flex items-end justify-between gap-6">
              <div className="max-w-[280px]">
                <p className="text-white/40 text-xs leading-relaxed mb-4">
                  Mobile auto detailing for cars, trucks &amp; fleets across
                  Grayson, GA and Gwinnett County.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-1.5 min-h-[40px] pl-5 pr-4 bg-white hover:bg-[#DC2626] hover:text-white text-[#050505] font-bold text-[11px] uppercase tracking-wide rounded-full transition-all duration-200"
                  >
                    Book your detail
                    <ArrowUpRight size={12} className="group-hover:rotate-45 transition-transform" />
                  </Link>
                  <a
                    href="tel:4709661113"
                    className="inline-flex items-center gap-1.5 min-h-[40px] px-4 border border-white/20 hover:border-white/40 text-white/55 hover:text-white text-[11px] font-medium rounded-full transition-all duration-200"
                  >
                    <Phone size={11} />
                    (470) 966-1113
                  </a>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[#DC2626] text-[9px] font-bold uppercase tracking-[0.22em] mb-2">
                  ✦ Grayson, GA · Gwinnett County
                </p>
                <h1
                  className="font-black uppercase text-white leading-[0.88] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(22px, 3.2vw, 48px)" }}
                >
                  Your car deserves
                  <br />
                  <span className="text-[#DC2626]">the best.</span>
                </h1>
              </div>
            </div>

          </div>
        </div>

        {/* ── Scroll hint ─────────────────────────────────────────── */}
        <motion.div
          className="absolute z-[6] inset-x-0 pointer-events-none
                     top-[34%] sm:top-[38%]
                     flex flex-col items-center"
          style={{ opacity: scrollHintOpacity }}
        >
          <span className="text-white/20 text-[8px] font-bold uppercase tracking-[0.25em]">
            Scroll to reveal
          </span>
        </motion.div>

      </section>
    </div>
  );
}
