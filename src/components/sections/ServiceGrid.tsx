"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Droplets,
  Sparkles,
  Shield,
  Wind,
  Sun,
  Lightbulb,
  Wrench,
  Star,
  Layers,
} from "lucide-react";

/* ─────────────────────────────────────────────
   SERVICE DATA
───────────────────────────────────────────── */

const premiumServices = [
  {
    id: "super-deluxe",
    icon: Star,
    title: "Super Deluxe Detailing",
    desc: "The full treatment — exterior wash, clay bar, machine buffing, wax, plus complete interior shampoo, carpet, and seat cleaning.",
    prices: [
      { label: "Small / Sedan", value: "$250" },
      { label: "SUV / Truck", value: "$275" },
    ],
    image: "/services/super-deluxe.png",
    alt: "Super deluxe full car detailing service in Grayson GA — clay bar, buff, wax and interior",
    tag: "Most Popular",
  },
  {
    id: "ceramic",
    icon: Shield,
    title: "Ceramic Coating",
    desc: "Long-lasting nano-ceramic paint protection. Hydrophobic, UV-resistant, and high-gloss — bonds directly to your clear coat for years of shine.",
    prices: [
      { label: "Fresh from dealer", value: "$700" },
      { label: "Add-on package", value: "+$200" },
    ],
    image: "/services/ceramic.png",
    alt: "Ceramic coating car protection service in Gwinnett County GA — showroom gloss",
    tag: "Premium",
  },
];

const standardServices = [
  {
    id: "basic-wash",
    icon: Droplets,
    title: "Basic Wash",
    desc: "Exterior wash, rims cleaned, windows, and tire shine.",
    prices: [
      { label: "Small", value: "$30" },
      { label: "SUV", value: "$50" },
    ],
    image: "/services/basic-wash.jpg",
    alt: "Oscar Trucks and Cars Details technician washing a vehicle — Basic Wash service in Grayson GA",
  },
  {
    id: "basic-interior",
    icon: Sparkles,
    title: "Basic Wash + Interior",
    desc: "Exterior wash plus interior vacuum, windows, rims, and tire dressing.",
    prices: [
      { label: "Small", value: "$50" },
      { label: "SUV", value: "$75" },
    ],
    image: "/services/basic-wash-interior.png",
    alt: "Basic car wash and interior cleaning in Gwinnett County GA",
  },
  {
    id: "wash-wax",
    icon: Layers,
    title: "Wash & Wax",
    desc: "Exterior and interior wash, wipe-down, window detail, and tire treatment with protective wax.",
    prices: [
      { label: "Small", value: "$125" },
      { label: "SUV", value: "$175" },
    ],
    image: "/services/wash-wax.png",
    alt: "Wash and wax car detailing service in Grayson GA",
  },
  {
    id: "interior-detail",
    icon: Sparkles,
    title: "Interior Detailing",
    desc: "Deep shampoo of carpet, seats, and floor mats. Leather conditioning included where applicable.",
    prices: [{ label: "Starting from", value: "$175" }],
    image: "/services/interior-detailing.png",
    alt: "Interior car detailing — carpet shampoo, seat cleaning and leather conditioning",
  },
  {
    id: "odor",
    icon: Wind,
    title: "Odor Eliminator",
    desc: "Professional odor neutralization — tackles smoke, pets, mildew, and food smells at the source.",
    prices: [{ label: "Flat rate", value: "$100" }],
    image: "/services/odor-eliminator.png",
    alt: "Car odor elimination service in Grayson GA",
  },
  {
    id: "tint",
    icon: Sun,
    title: "Window Tinting",
    desc: "High-quality tint films professionally installed. UV protection, privacy, and heat rejection.",
    prices: [{ label: "Range", value: "$275–$325" }],
    image: "/services/window-tinting.png",
    alt: "Window tinting service in Gwinnett County GA",
  },
  {
    id: "headlights",
    icon: Lightbulb,
    title: "Headlight Restoration",
    desc: "Two-step wet sanding plus compound and polish — eliminates yellowing and hazing for clear visibility.",
    prices: [{ label: "Per pair", value: "$60" }],
    image: "/services/headlight-restoration.png",
    alt: "Headlight restoration service — before and after in Grayson GA",
  },
  {
    id: "engine",
    icon: Wrench,
    title: "Engine Wash",
    desc: "Degreaser application, hand scrub, pressure rinse, and dressing for a clean engine bay.",
    prices: [{ label: "Flat rate", value: "$65" }],
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80&auto=format&fit=crop",
    alt: "Engine bay wash and cleaning service Grayson GA",
  },
];

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */

export function ServiceGrid() {
  return (
    <div className="space-y-4">

      {/* ── Premium pair ──────────────────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {premiumServices.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group relative overflow-hidden rounded-[24px] bg-[var(--card)] border border-[var(--card-border)] flex flex-col"
            >
              {/* Image */}
              <div className="relative h-[220px] sm:h-[260px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {service.tag && (
                  <span
                    className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
                      service.tag === "Premium"
                        ? "bg-[#DC2626] text-white shadow-[0_0_16px_rgba(220,38,38,0.4)]"
                        : "bg-white/90 text-[#0A0A0A]"
                    }`}
                  >
                    ✦ {service.tag}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6 lg:p-7">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 bg-[#DC2626]/10 rounded-full flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-[#DC2626]" />
                  </div>
                  <h3 className="text-[var(--foreground)] font-bold text-xl tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[var(--muted-text)] text-sm leading-relaxed flex-1 mb-5">
                  {service.desc}
                </p>

                {/* Pricing + CTA */}
                <div className="pt-4 border-t border-[var(--card-border)]">
                  <div className="flex items-end justify-between gap-4">
                    <div className="flex flex-wrap gap-x-5 gap-y-1">
                      {service.prices.map((p) => (
                        <div key={p.label}>
                          <p className="text-[var(--muted-text)] text-[10px] uppercase tracking-widest font-medium mb-0.5">
                            {p.label}
                          </p>
                          <p className="text-[#DC2626] font-black text-lg leading-none">
                            {p.value}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="shrink-0 inline-flex items-center gap-1.5 min-h-[38px] pl-4 pr-3 bg-[var(--foreground)] hover:bg-[#DC2626] text-[var(--background)] hover:text-white text-[11px] font-bold uppercase tracking-wide rounded-full transition-all duration-200 group/btn"
                    >
                      Book
                      <ArrowUpRight
                        size={12}
                        className="group-hover/btn:rotate-45 transition-transform duration-200"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ── Standard 8-card grid ──────────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {standardServices.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-[20px] bg-[var(--card)] border border-[var(--card-border)] flex flex-col"
            >
              {/* Small image */}
              <div className="relative h-[100px] sm:h-[120px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-3.5 sm:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-[#DC2626]/10 rounded-full flex items-center justify-center shrink-0">
                    <Icon size={11} className="text-[#DC2626]" />
                  </div>
                  <h3 className="text-[var(--foreground)] font-bold text-[13px] sm:text-sm leading-tight tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[var(--muted-text)] text-[11px] sm:text-xs leading-relaxed flex-1 mb-3 line-clamp-3">
                  {service.desc}
                </p>

                {/* Price row */}
                <div className="pt-2.5 border-t border-[var(--card-border)] flex items-center justify-between gap-2">
                  <div>
                    {service.prices.length === 1 ? (
                      <span className="text-[#DC2626] font-black text-sm">
                        {service.prices[0].value}
                      </span>
                    ) : (
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#DC2626] font-black text-[13px]">
                          {service.prices[0].value}
                        </span>
                        <span className="text-[var(--muted-text)] text-[11px]">/</span>
                        <span className="text-[#DC2626] font-black text-[13px]">
                          {service.prices[1].value}
                        </span>
                      </div>
                    )}
                    {service.prices.length === 2 && (
                      <p className="text-[var(--muted-text)] text-[10px] leading-none mt-0.5">
                        sm / SUV
                      </p>
                    )}
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 inline-flex items-center gap-1 min-h-[30px] text-[10px] font-bold text-[var(--foreground)] hover:text-[#DC2626] transition-colors duration-150 group/link"
                  >
                    Book
                    <ArrowUpRight
                      size={11}
                      className="group-hover/link:rotate-45 transition-transform duration-200"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ── Pricing disclaimer ────────────────────────────────── */}
      <div className="mt-2 flex items-start gap-2.5 px-4 py-3 rounded-2xl bg-[var(--muted-bg)] border border-[var(--card-border)]">
        <span className="text-[#DC2626] text-[11px] shrink-0 mt-0.5">✦</span>
        <p className="text-[var(--muted-text)] text-[11px] sm:text-xs leading-relaxed">
          <span className="font-semibold text-[var(--foreground)]">Prices may vary</span> depending on the condition of the vehicle. Final quote provided before work begins.{" "}
          <Link
            href="/contact"
            className="underline underline-offset-2 hover:text-[#DC2626] transition-colors duration-150"
          >
            Contact us for a custom estimate.
          </Link>
        </p>
      </div>

    </div>
  );
}

export { premiumServices, standardServices };
