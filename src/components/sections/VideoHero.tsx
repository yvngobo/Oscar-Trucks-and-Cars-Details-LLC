"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, ArrowLeftRight } from "lucide-react";
import { FacebookIcon, TikTokIcon, InstagramIcon } from "@/components/layout/Footer";

export function VideoHero() {
  const containerRef    = useRef<HTMLDivElement>(null);
  const cleanTruckRef   = useRef<HTMLDivElement>(null);
  const dividerRef      = useRef<HTMLDivElement>(null);
  const dragZoneRef     = useRef<HTMLDivElement>(null);
  const beforeLabelRef  = useRef<HTMLSpanElement>(null);
  const afterLabelRef   = useRef<HTMLSpanElement>(null);
  const animFrameRef    = useRef<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Write clip + position straight to DOM — zero React re-renders during drag
  const applySlider = (pct: number) => {
    if (cleanTruckRef.current)
      cleanTruckRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    if (dividerRef.current)
      dividerRef.current.style.left = `${pct}%`;
    // Labels fade out when the divider is too close to that edge
    if (beforeLabelRef.current)
      beforeLabelRef.current.style.opacity = pct < 14 ? "0" : "1";
    if (afterLabelRef.current)
      afterLabelRef.current.style.opacity = pct > 86 ? "0" : "1";
  };

  // Intro sweep 100 → 50 to hint the interaction
  useEffect(() => {
    applySlider(100);
    const delay = setTimeout(() => {
      const from = 100, to = 50, duration = 1400;
      let t0: number | null = null;
      const step = (ts: number) => {
        if (!t0) t0 = ts;
        const p = Math.min(1, (ts - t0) / duration);
        applySlider(from + (to - from) * (1 - Math.pow(1 - p, 3)));
        if (p < 1) animFrameRef.current = requestAnimationFrame(step);
      };
      animFrameRef.current = requestAnimationFrame(step);
    }, 700);
    return () => {
      clearTimeout(delay);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Drag listeners attached only to the image zone — bottom strip stays scrollable
  useEffect(() => {
    const zone      = dragZoneRef.current;
    const container = containerRef.current;
    if (!zone || !container) return;

    const getPos = (clientX: number) => {
      const rect = container.getBoundingClientRect();
      return Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    };

    const onDown = (e: PointerEvent) => {
      e.preventDefault();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      zone.setPointerCapture(e.pointerId);
      applySlider(getPos(e.clientX));
      setHasInteracted(true);
    };

    const onMove = (e: PointerEvent) => {
      if (!zone.hasPointerCapture(e.pointerId)) return;
      e.preventDefault();
      applySlider(getPos(e.clientX));
    };

    const onUp = (e: PointerEvent) => {
      zone.releasePointerCapture(e.pointerId);
    };

    zone.addEventListener("pointerdown",   onDown, { passive: false });
    zone.addEventListener("pointermove",   onMove, { passive: false });
    zone.addEventListener("pointerup",     onUp);
    zone.addEventListener("pointercancel", onUp);

    return () => {
      zone.removeEventListener("pointerdown",   onDown);
      zone.removeEventListener("pointermove",   onMove);
      zone.removeEventListener("pointerup",     onUp);
      zone.removeEventListener("pointercancel", onUp);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maskStyle: React.CSSProperties = {
    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 76%, transparent 100%)",
    maskImage:       "linear-gradient(to bottom, transparent 0%, black 12%, black 76%, transparent 100%)",
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[100dvh] overflow-hidden bg-[#050505] select-none"
    >

      {/* ── Mobile-only background text ─────────────────────────── */}
      <div
        aria-hidden
        className="sm:hidden absolute inset-0 z-[1] flex flex-col items-center pointer-events-none select-none overflow-hidden"
        style={{ paddingTop: "clamp(68px, 9vh, 90px)" }}
      >
        <span className="font-black uppercase leading-none block whitespace-nowrap"
          style={{ fontSize: "clamp(48px, 12vw, 72px)", letterSpacing: "-0.04em", color: "rgba(255,255,255,0.44)" }}>
          OSCAR
        </span>
        <span className="font-black uppercase leading-none block whitespace-nowrap"
          style={{ fontSize: "clamp(24px, 6.2vw, 38px)", letterSpacing: "-0.03em", color: "rgba(255,255,255,0.36)" }}>
          TRUCKS &amp; CARS
        </span>
        <span className="font-black uppercase leading-none block whitespace-nowrap"
          style={{ fontSize: "clamp(18px, 4.8vw, 30px)", letterSpacing: "-0.02em", color: "rgba(255,255,255,0.28)" }}>
          DETAILS LLC
        </span>
      </div>

      {/* ── Warm glow ───────────────────────────────────────────── */}
      <div aria-hidden className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 80%, rgba(110,18,18,0.45) 0%, transparent 70%)" }}
      />

      {/* ── Dirty truck (base layer) ──────────────────────────── */}
      <div className="absolute left-0 right-0 z-[2] bottom-[158px] h-[78vw] sm:top-0 sm:bottom-0 sm:h-auto"
           style={maskStyle}>
        <Image src="/truck-dirty.png" alt="Truck before professional detailing"
          fill priority quality={90} draggable={false}
          className="object-cover object-center pointer-events-none"
          sizes="(max-width: 640px) 180vw, 100vw" />
      </div>

      {/* ── Clean truck (clipped — DOM-driven) ───────────────── */}
      <div ref={cleanTruckRef}
           className="absolute left-0 right-0 z-[3] bottom-[158px] h-[78vw] sm:top-0 sm:bottom-0 sm:h-auto"
           style={{ clipPath: "inset(0 100% 0 0)", ...maskStyle }}>
        <Image src="/truck-clean.png" alt="Truck after professional detailing — showroom finish"
          fill priority quality={90} draggable={false}
          className="object-cover object-center pointer-events-none"
          sizes="(max-width: 640px) 180vw, 100vw" />
      </div>

      {/* ── Drag zone — covers only the image area ───────────── */}
      <div
        ref={dragZoneRef}
        className="absolute left-0 right-0 z-[4]
                   bottom-[158px] h-[78vw]
                   sm:top-0 sm:bottom-0 sm:h-auto"
        style={{ cursor: "col-resize", touchAction: "none" }}
      />

      {/* ── Wipe divider + drag handle (DOM-driven) ──────────── */}
      <div ref={dividerRef}
           className="absolute z-[5] w-px pointer-events-none
                      bottom-[158px] h-[78vw]
                      sm:top-0 sm:bottom-0 sm:h-auto"
           style={{ left: "100%" }}>
        <div className="w-full h-full bg-white/70 shadow-[0_0_14px_3px_rgba(255,255,255,0.35),0_0_32px_6px_rgba(220,38,38,0.2)]" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-[0_0_24px_rgba(0,0,0,0.6)] flex items-center justify-center">
          <ArrowLeftRight size={16} className="text-[#111]" strokeWidth={2.5} />
        </div>
      </div>

      {/* ── Before / After labels ─────────────────────────────── */}
      <div className="absolute z-[4] pointer-events-none flex w-full justify-between px-5 sm:px-14"
           style={{ top: "clamp(80px, 12vh, 110px)" }}>
        <span ref={beforeLabelRef}
              className="text-white/30 text-[9px] font-bold uppercase tracking-[0.2em]"
              style={{ transition: "opacity 0.25s ease" }}>Before</span>
        <span ref={afterLabelRef}
              className="text-white/30 text-[9px] font-bold uppercase tracking-[0.2em]"
              style={{ transition: "opacity 0.25s ease" }}>After</span>
      </div>

      {/* ── Bottom info strip ────────────────────────────────────── */}
      <div className="absolute bottom-0 inset-x-0 z-[5]"
           style={{ background: "linear-gradient(to top, #050505 0%, rgba(5,5,5,0.95) 55%, transparent 100%)", paddingTop: "80px" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-14 pb-6 sm:pb-10">

          {/* Mobile */}
          <div className="sm:hidden flex flex-col gap-2.5">
            <p className="text-[#DC2626] text-[8px] font-bold uppercase tracking-[0.22em]">
              ✦ Interior &amp; Exterior Restoration
            </p>
            <h1 className="font-black uppercase text-white leading-[0.88] tracking-[-0.03em]"
                style={{ fontSize: "clamp(24px, 7vw, 38px)" }}>
              Restore your ride.
              <br />
              <span className="text-[#DC2626]">Protect your investment.</span>
            </h1>
            <div className="flex items-center gap-2.5 mt-1 flex-wrap">
              <Link href="/contact"
                className="group inline-flex items-center gap-1.5 min-h-[44px] pl-5 pr-4 bg-white hover:bg-[#DC2626] hover:text-white text-[#050505] font-bold text-[11px] uppercase tracking-wide rounded-full transition-all duration-200 active:scale-[0.97]">
                Book detail
                <ArrowUpRight size={12} className="group-hover:rotate-45 transition-transform" />
              </Link>
              <a href="tel:4709661113"
                className="inline-flex items-center gap-1.5 min-h-[44px] px-4 border border-white/25 text-white/60 text-[11px] font-medium rounded-full transition-all duration-200 active:scale-[0.97]">
                <Phone size={12} />
                (470) 966-1113
              </a>
              <div className="flex items-center gap-1.5 ml-auto">
                {[
                  { Icon: FacebookIcon,  href: "https://www.facebook.com/profile.php?id=100091267248312", label: "Facebook"  },
                  { Icon: TikTokIcon,    href: "https://www.tiktok.com/@oscarsdetailingdudes",            label: "TikTok"    },
                  { Icon: InstagramIcon, href: "https://www.instagram.com/oscarsdetailingdudes",          label: "Instagram" },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/45 hover:text-white hover:border-white/35 transition-all duration-200">
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
                We restore your vehicle to its original purchase condition —
                inside and out. Serving Grayson, GA &amp; Gwinnett County.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/contact"
                  className="group inline-flex items-center gap-1.5 min-h-[40px] pl-5 pr-4 bg-white hover:bg-[#DC2626] hover:text-white text-[#050505] font-bold text-[11px] uppercase tracking-wide rounded-full transition-all duration-200">
                  Book your detail
                  <ArrowUpRight size={12} className="group-hover:rotate-45 transition-transform" />
                </Link>
                <a href="tel:4709661113"
                  className="inline-flex items-center gap-1.5 min-h-[40px] px-4 border border-white/20 hover:border-white/40 text-white/55 hover:text-white text-[11px] font-medium rounded-full transition-all duration-200">
                  <Phone size={11} />
                  (470) 966-1113
                </a>
                {[
                  { Icon: FacebookIcon,  href: "https://www.facebook.com/profile.php?id=100091267248312", label: "Facebook"  },
                  { Icon: TikTokIcon,    href: "https://www.tiktok.com/@oscarsdetailingdudes",            label: "TikTok"    },
                  { Icon: InstagramIcon, href: "https://www.instagram.com/oscarsdetailingdudes",          label: "Instagram" },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-white/45 hover:text-white hover:border-white/35 transition-all duration-200">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#DC2626] text-[9px] font-bold uppercase tracking-[0.22em] mb-2">
                ✦ Interior &amp; Exterior Restoration
              </p>
              <h1 className="font-black uppercase text-white leading-[0.88] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(22px, 3.2vw, 48px)" }}>
                Restore your ride.
                <br />
                <span className="text-[#DC2626]">Protect your investment.</span>
              </h1>
            </div>
          </div>

        </div>
      </div>

      {/* ── Drag hint ────────────────────────────────────────────── */}
      {!hasInteracted && (
        <div className="absolute z-[4] inset-x-0 pointer-events-none flex justify-center" style={{ top: "42%" }}>
          <span className="text-white/25 text-[8px] font-bold uppercase tracking-[0.25em]">
            Drag to compare
          </span>
        </div>
      )}

    </div>
  );
}
