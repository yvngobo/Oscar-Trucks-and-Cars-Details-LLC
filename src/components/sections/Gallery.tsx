"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pairs = [
  {
    before: {
      src: "https://images.unsplash.com/photo-1597328407749-c9d2b16f9a34?w=800&q=85&auto=format&fit=crop",
      alt: "Before - dirty car interior in Grayson GA",
    },
    after: {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&auto=format&fit=crop",
      alt: "After - clean car interior detail Grayson GA",
    },
    label: "Interior Detail",
  },
  {
    before: {
      src: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=800&q=85&auto=format&fit=crop",
      alt: "Before - oxidized car paint Gwinnett County",
    },
    after: {
      src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=85&auto=format&fit=crop",
      alt: "After - paint correction in Grayson GA",
    },
    label: "Paint Correction",
  },
  {
    before: {
      src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=85&auto=format&fit=crop",
      alt: "Before - dirty truck exterior Grayson GA",
    },
    after: {
      src: "https://images.unsplash.com/photo-1595933419139-6da6e2bd3f15?w=800&q=85&auto=format&fit=crop",
      alt: "After - clean truck exterior detail Grayson GA",
    },
    label: "Truck Detail",
  },
];

export function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {pairs.map((pair, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="bg-[var(--card)] rounded-[24px] border border-[var(--card-border)] overflow-hidden p-3"
        >
          <p className="text-[var(--foreground)] font-bold text-sm px-3 pt-1 pb-3 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#DC2626]" />
            {pair.label}
          </p>

          <div className="grid grid-cols-2 gap-2">
            {/* Before */}
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src={pair.before.src}
                alt={pair.before.alt}
                fill
                className="object-cover grayscale"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 16vw"
              />
              <div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-[var(--foreground)] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
                Before
              </div>
            </div>

            {/* After */}
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src={pair.after.src}
                alt={pair.after.alt}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 16vw"
              />
              <div className="absolute top-2 left-2 bg-[#DC2626] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
                After
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
