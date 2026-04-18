"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  // Lock body scroll while mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* ── Navbar bar ──────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(6,6,6,0.92)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        }}
      >
        <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between relative">

          {/* Logo — always visible */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 z-10">
            <Image
              src="/oscar-logo.jpg"
              alt="Oscar Trucks and Cars Details LLC"
              width={44}
              height={36}
              className="rounded-lg object-contain"
              priority
            />
            <span className="text-white font-bold text-[13px] tracking-tight hidden sm:block whitespace-nowrap">
              Oscar Trucks &amp; Cars Details
            </span>
          </Link>

          {/* ── Desktop: centered nav links — always visible ──────── */}
          <div className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-150 ${
                    isActive
                      ? "text-white bg-white/10 font-semibold"
                      : "text-white/55 hover:text-white hover:bg-white/8"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 z-10">

            {/* Desktop CTA — always visible */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:4709661113"
                className="text-[12px] font-medium text-white/40 hover:text-white/75 transition-colors duration-150 flex items-center gap-1.5 whitespace-nowrap"
              >
                <Phone size={11} />
                (470) 966-1113
              </a>
              <Link
                href="/contact"
                className="min-h-[36px] pl-5 pr-4 py-1.5 bg-white hover:bg-[#DC2626] text-[#0A0A0A] hover:text-white text-[12px] font-bold rounded-full transition-colors duration-200 flex items-center gap-1 group/btn whitespace-nowrap"
              >
                Book Now
                <ArrowUpRight size={12} className="group-hover/btn:rotate-45 transition-transform duration-200" />
              </Link>
            </div>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white/75 hover:text-white rounded-full hover:bg-white/8 transition-colors duration-150"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile full-screen overlay ───────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[100] md:hidden flex flex-col"
            style={{
              backgroundColor: "rgba(4,4,4,0.97)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
            }}
          >
            {/* Overlay top bar */}
            <div className="flex items-center justify-between px-5 h-[68px] shrink-0 border-b border-white/5">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5"
              >
                <Image
                  src="/oscar-logo.jpg"
                  alt="Oscar Trucks and Cars Details LLC"
                  width={40}
                  height={32}
                  className="rounded-lg object-contain"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors rounded-full hover:bg-white/8"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links — left-aligned, large & bold */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-0 pb-10">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.26, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 text-[44px] font-black uppercase leading-tight tracking-[-0.03em] transition-colors duration-100 ${
                        isActive
                          ? "text-[#DC2626]"
                          : "text-white hover:text-white/70"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Red rule */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.27, duration: 0.28, ease: "easeOut" }}
                className="origin-left w-8 h-[2px] bg-[#DC2626] mt-6 mb-6"
              />

              {/* Bottom CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.31, duration: 0.26 }}
                className="flex flex-col gap-2.5"
              >
                <a
                  href="tel:4709661113"
                  onClick={() => setIsOpen(false)}
                  className="min-h-[52px] px-6 border border-white/12 text-white/50 text-[13px] font-medium rounded-xl flex items-center gap-2 hover:border-white/25 hover:text-white/75 transition-all"
                >
                  <Phone size={14} />
                  (470) 966-1113
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="min-h-[52px] px-6 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[13px] font-bold rounded-xl flex items-center gap-2 justify-center transition-colors shadow-[0_4px_24px_rgba(220,38,38,0.3)]"
                >
                  Book your detail <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
