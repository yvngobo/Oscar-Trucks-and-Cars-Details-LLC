"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-3 left-3 right-3 md:left-4 md:right-4 z-50 rounded-full"
      animate={{
        backgroundColor: scrolled
          ? theme === "dark" ? "rgba(15,15,15,0.92)" : "rgba(255,255,255,0.92)"
          : theme === "dark" ? "rgba(15,15,15,0.6)" : "rgba(255,255,255,0.6)",
        borderColor: scrolled
          ? theme === "dark" ? "rgba(45,45,45,1)" : "rgba(231,229,228,1)"
          : theme === "dark" ? "rgba(45,45,45,0.5)" : "rgba(231,229,228,0.5)",
        boxShadow: scrolled
          ? "0 4px 32px rgba(0,0,0,0.08)"
          : "0 0px 0px rgba(0,0,0,0)",
      }}
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group z-10">
          <Image
            src="/oscar-logo.jpg"
            alt="Oscar Trucks and Cars Details LLC"
            width={64}
            height={52}
            className="rounded-lg object-contain"
            priority
          />
          <span className="text-[var(--foreground)] font-bold text-sm tracking-tight hidden sm:block">
            Oscar Trucks &amp; Cars Details
          </span>
        </Link>

        {/* Desktop nav — center */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-150 ${
                  isActive
                    ? "text-[var(--foreground)] bg-[var(--muted-bg)] font-semibold"
                    : "text-[var(--foreground)]/60 hover:text-[var(--foreground)] hover:bg-[var(--muted-bg)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2 z-10">
          <a
            href="tel:4709661113"
            className="text-xs font-semibold text-foreground/50 hover:text-[#DC2626] transition-colors duration-150 flex items-center gap-1.5"
          >
            <Phone size={12} />
            (470) 966-1113
          </a>
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-full border border-[var(--card-border)] hover:bg-[var(--muted-bg)] text-[var(--foreground)] transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <Link
            href="/contact"
            className="min-h-[40px] pl-5 pr-4 py-2 bg-[var(--foreground)] hover:bg-[#DC2626] text-[var(--background)] text-xs font-semibold rounded-full transition-colors duration-200 flex items-center gap-1.5 group"
          >
            Book Now
            <ArrowUpRight
              size={13}
              className="group-hover:rotate-45 transition-transform duration-200"
            />
          </Link>
        </div>

        {/* Mobile: theme toggle + click-to-call + hamburger */}
        <div className="flex md:hidden items-center gap-2 z-10">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-full border border-[var(--card-border)] hover:bg-[var(--muted-bg)] text-[var(--foreground)] transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href="tel:4709661113"
            className="min-h-[40px] px-3 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-semibold rounded-full flex items-center gap-1.5 transition-colors duration-150"
            aria-label="Call Oscar Details"
          >
            <Phone size={13} />
            Call
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="min-h-[40px] min-w-[40px] flex items-center justify-center text-[var(--foreground)] rounded-full hover:bg-[var(--muted-bg)]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base font-medium text-[var(--foreground)] hover:bg-[var(--muted-bg)] rounded-2xl transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 min-h-[48px] px-5 py-3 bg-[var(--foreground)] hover:bg-[#DC2626] text-[var(--background)] text-sm font-semibold rounded-full flex items-center justify-center gap-2 transition-colors duration-150"
              >
                Book Now <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
