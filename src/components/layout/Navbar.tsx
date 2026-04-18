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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <motion.header
      className="fixed top-3 left-3 right-3 md:left-4 md:right-4 z-50 rounded-full"
      animate={{
        backgroundColor: scrolled
          ? "rgba(10,10,10,0.92)"
          : "rgba(10,10,10,0.45)",
        borderColor: scrolled
          ? "rgba(45,45,45,1)"
          : "rgba(45,45,45,0.4)",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.18)" : "none",
      }}
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between relative">

        {/* Logo — always visible */}
        <Link href="/" className="flex items-center gap-2.5 group z-10 shrink-0">
          <Image
            src="/oscar-logo.jpg"
            alt="Oscar Trucks and Cars Details LLC"
            width={52}
            height={42}
            className="rounded-lg object-contain"
            priority
          />
          <AnimatePresence>
            {!scrolled && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="text-white font-bold text-sm tracking-tight hidden sm:block overflow-hidden whitespace-nowrap"
              >
                Oscar Trucks &amp; Cars Details
              </motion.span>
            )}
          </AnimatePresence>
        </Link>

        {/* Desktop nav links — hidden when scrolled */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-150 ${
                      isActive
                        ? "text-white bg-white/10 font-semibold"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right side */}
        <div className="flex items-center gap-2 z-10">

          {/* Desktop CTA — hidden when scrolled */}
          <AnimatePresence>
            {!scrolled && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="hidden md:flex items-center gap-2 overflow-hidden"
              >
                <a
                  href="tel:4709661113"
                  className="text-xs font-semibold text-white/50 hover:text-[#DC2626] transition-colors duration-150 flex items-center gap-1.5 whitespace-nowrap"
                >
                  <Phone size={12} />
                  (470) 966-1113
                </a>
                <Link
                  href="/contact"
                  className="min-h-[40px] pl-5 pr-4 py-2 bg-white hover:bg-[#DC2626] text-[#0A0A0A] hover:text-white text-xs font-semibold rounded-full transition-colors duration-200 flex items-center gap-1.5 group/btn whitespace-nowrap"
                >
                  Book Now
                  <ArrowUpRight size={13} className="group-hover/btn:rotate-45 transition-transform duration-200" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hamburger — always visible on mobile, visible on desktop when scrolled */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`min-h-[40px] min-w-[40px] flex items-center justify-center text-white rounded-full hover:bg-white/10 transition-colors duration-150 ${
              !scrolled ? "md:hidden" : ""
            }`}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Dropdown menu — opens from hamburger */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-base font-medium rounded-2xl transition-colors duration-150 ${
                      isActive
                        ? "text-white bg-white/10 font-semibold"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-2 flex flex-col gap-2">
                <a
                  href="tel:4709661113"
                  onClick={() => setIsOpen(false)}
                  className="min-h-[48px] px-5 py-3 border border-white/20 hover:border-white/40 text-white/70 hover:text-white text-sm font-medium rounded-full flex items-center justify-center gap-2 transition-colors duration-150"
                >
                  <Phone size={14} />
                  (470) 966-1113
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="min-h-[48px] px-5 py-3 bg-white hover:bg-[#DC2626] hover:text-white text-[#0A0A0A] text-sm font-semibold rounded-full flex items-center justify-center gap-2 transition-colors duration-150"
                >
                  Book Now <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
