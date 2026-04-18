"use client";

import { useRef, useEffect } from "react";
import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { FacebookIcon, TikTokIcon, InstagramIcon } from "@/components/layout/Footer";

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
    update(window.scrollY ?? 0);
    return scrollY.on("change", update);
  }, [scrollY, scrollYProgress]);

  const wipePercent = useTransform(scrollYProgress, [0.1, 0.85], [100, 0]);
  const cleanClipPath = useTransform(wipePercent, (v) => `inset(0 ${v}% 0 0)`);
  const dividerLeft = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Mobile: fades bottom into info strip. Desktop: subtle top + bottom fade.
  const maskStyle = {
    WebkitMaskImage:
      "linear-gradient(to bottom, transparent 0%, black 12%, black 76%, transparent 100%)",
    maskImage:
      "linear-gradient(to bottom, transparent 0%, black 12%, black 76%, transparent 100%)",
  } as React.CSSProperties;

  return (
    <div ref={containerRef} className="relative h-[280vh]">
      <section className="sticky top-0 h-[100dvh] overflow-hidden bg-[#050505]">

        {/* ── Mobile-only background text ─────────────────────────── */}
        <div
          aria-hidden
          className="sm:hidden absolute inset-0 z-[1] flex flex-col items-center pointer-events-none select-none overflow-hidden"
          style={{ paddingTop: "clamp(68px, 9vh, 90px)" }}
        >
          <span
            className="font-black uppercase leading-none block whitespace-nowrap"
            style={{
              fontSize: "clamp(48px, 12vw, 72px)",
              letterSpacing: "-0.04em",
              color: "rgba(255,255,255,0.44)",
            }}
          >
            OSCAR
          </span>
          <span
            className="font-black uppercase leading-none block whitespace-nowrap"
            style={{
              fontSize: "clamp(24px, 6.2vw, 38px)",
              letterSpacing: "-0.03em",
              color: "rgba(255,255,255,0.36)",
            }}
          >
            TRUCKS &amp; CARS
          </span>
          <span
            className="font-black uppercase leading-none block whitespace-nowrap"
            style={{
              fontSize: "clamp(18px, 4.8vw, 30px)",
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.28)",
            }}
          >
            DETAILS LLC
          </span>
        </div>

        {/* ── Warm glow ───────────────────────────────────────────── */}
        <div
          aria-hidden
          className="absolute inset-0 z-[1] pointer-events-none sm:z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 80%, rgba(110,18,18,0.45) 0%, transparent 70%)",
          }}
        />

        {/* ── Dirty truck ──────────────────────────────────────────── */}
        {/* Mobile: bounded proportional container so landscape image isn't stretched  */}
        {/* Desktop: full-bleed inset-0                                               */}
        <div
          className="absolute left-0 right-0 z-[2]
                     bottom-[158px] h-[78vw]
                     sm:top-0 sm:bottom-0 sm:h-auto"
          style={maskStyle}
        >
          <Image
            src="/truck-dirty.png"
            alt="Truck before professional detailing"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="(max-width: 640px) 180vw, 100vw"
          />
        </div>

        {/* ── Clean truck — scroll wipe ────────────────────────────── */}
        <motion.div
          className="absolute left-0 right-0 z-[3]
                     bottom-[158px] h-[78vw]
                     sm:top-0 sm:bottom-0 sm:h-auto"
          style={{ clipPath: cleanClipPath, ...maskStyle }}
        >
          <Image
            src="/truck-clean.png"
            alt="Truck after professional detailing — showroom finish"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="(max-width: 640px) 180vw, 100vw"
          />
        </motion.div>

        {/* ── Wipe divider ─────────────────────────────────────────── */}
        <motion.div
          className="absolute top-0 bottom-0 z-[4] w-px pointer-events-none"
          style={{ left: dividerLeft }}
        >
          <div className="w-full h-full bg-white/70 shadow-[0_0_14px_3px_rgba(255,255,255,0.35),0_0_32px_6px_rgba(220,38,38,0.2)]" />
        </motion.div>

        {/* ── Bottom info strip ────────────────────────────────────── */}
        <div
          className="absolute bottom-0 inset-x-0 z-[5]"
          style={{
            background:
              "linear-gradient(to top, #050505 0%, rgba(5,5,5,0.95) 55%, transparent 100%)",
            paddingTop: "80px",
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
              <div className="flex items-center gap-2.5 mt-1 flex-wrap">
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
                {/* Social icons — mobile */}
                <div className="flex items-center gap-1.5 ml-auto">
                  {[
                    { Icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=100091267248312", label: "Facebook" },
                    { Icon: TikTokIcon,   href: "https://www.tiktok.com/@oscarsdetailingdudes",            label: "TikTok" },
                    { Icon: InstagramIcon,href: "https://www.instagram.com/oscarsdetailingdudes",          label: "Instagram" },
                  ].map(({ Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/45 hover:text-white hover:border-white/35 transition-all duration-200"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
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
                  {/* Social icons — desktop */}
                  {[
                    { Icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=100091267248312", label: "Facebook" },
                    { Icon: TikTokIcon,   href: "https://www.tiktok.com/@oscarsdetailingdudes",            label: "TikTok" },
                    { Icon: InstagramIcon,href: "https://www.instagram.com/oscarsdetailingdudes",          label: "Instagram" },
                  ].map(({ Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-white/45 hover:text-white hover:border-white/35 transition-all duration-200"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
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

        {/* ── Scroll hint ──────────────────────────────────────────── */}
        <motion.div
          className="absolute z-[4] inset-x-0 top-[42%] pointer-events-none flex flex-col items-center"
          style={{ opacity: scrollHintOpacity }}
        >
          <span className="text-white/25 text-[8px] font-bold uppercase tracking-[0.25em]">
            Scroll to reveal
          </span>
        </motion.div>

      </section>
    </div>
  );
}
