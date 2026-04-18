"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { value: "5+",    label: "Years in business"  },
  { value: "500+",  label: "Vehicles detailed"  },
  { value: "29",    label: "Five-star reviews"  },
  { value: "100%",  label: "Satisfaction rate"  },
];

export function StatsBar() {
  return (
    <section className="bg-[#0A0A0A] text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1}>
              <div>
                <p className="text-5xl lg:text-6xl font-black text-white tracking-[-0.03em] leading-none mb-2">
                  <CountUp value={s.value} />
                </p>
                <p className="text-white/50 text-xs font-medium uppercase tracking-widest">
                  {s.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
