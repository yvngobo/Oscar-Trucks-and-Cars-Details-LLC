"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marcus T.",
    text: "Oscar's team did an incredible job on my F-150. Paint correction made it look like a brand new truck. Hands down the best detailer in Gwinnett County.",
    service: "Paint Correction",
    initials: "MT",
    col: 1,
  },
  {
    name: "Janelle R.",
    text: "My SUV had three years of family mess — crumbs, stains, everything. They got it spotless. Smells fresh and looks like it just rolled off the lot.",
    service: "Interior Deep Clean",
    initials: "JR",
    col: 2,
  },
  {
    name: "DeShawn W.",
    text: "I run a small fleet of four work trucks. Oscar gives me a great bulk rate and the quality is always consistent. Been using them for over a year.",
    service: "Fleet Services",
    initials: "DW",
    col: 1,
  },
  {
    name: "Priya S.",
    text: "Booked a full exterior detail for my black BMW. The finish is flawless — water sheets right off. Worth every penny.",
    service: "Full Exterior Detail",
    initials: "PS",
    col: 2,
  },
  {
    name: "Carlos M.",
    text: "Called on a Monday, had an appointment by Wednesday. Professional, on time, and the results speak for themselves. My car looks better than when I bought it.",
    service: "Full Detail Package",
    initials: "CM",
    col: 1,
  },
];

function ReviewCard({
  review,
  delay,
}: {
  review: (typeof reviews)[0];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.18)" }}
      whileTap={{ scale: 0.98 }}
      style={{ transition: "box-shadow 0.3s ease" }}
      className="bg-[var(--card)] border border-[var(--card-border)] rounded-[20px] p-6 flex flex-col gap-4 cursor-default"
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={13} className="fill-[var(--action)] text-[var(--action)]" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[var(--foreground)] text-sm leading-[1.7] font-medium flex-1">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-[var(--card-border)]">
        <div className="w-9 h-9 rounded-lg bg-[var(--foreground)] flex items-center justify-center text-[var(--background)] font-bold text-xs shrink-0">
          {review.initials}
        </div>
        <div>
          <p className="text-[var(--foreground)] font-semibold text-sm leading-none mb-1">
            {review.name}
          </p>
          <p className="text-[var(--muted-text)] text-xs">{review.service}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const col1 = reviews.filter((r) => r.col === 1);
  const col2 = reviews.filter((r) => r.col === 2);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Col 1 */}
      <div className="flex flex-col gap-4">
        {col1.map((r, i) => (
          <ReviewCard key={r.name} review={r} delay={i * 0.08} />
        ))}
      </div>

      {/* Col 2 */}
      <div className="flex flex-col gap-4 sm:mt-8">
        {col2.map((r, i) => (
          <ReviewCard key={r.name} review={r} delay={0.1 + i * 0.08} />
        ))}
      </div>

      {/* Col 3 — aggregate stat card on large screens */}
      <div className="hidden lg:flex flex-col gap-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
          whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(220,38,38,0.25)" }}
          whileTap={{ scale: 0.98 }}
          className="bg-[var(--action)] rounded-[20px] p-8 text-white flex flex-col justify-between h-full cursor-default"
        >
          <div>
            <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-6">
              ✦ Google Reviews
            </p>
            <p className="text-[80px] font-black leading-none tracking-[-0.05em] tabular-nums">
              5.0
            </p>
            <p className="text-white/70 text-sm mt-2">Average rating</p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white font-black text-3xl leading-none tabular-nums">
              29
            </p>
            <p className="text-white/70 text-sm mt-1">verified reviews</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
