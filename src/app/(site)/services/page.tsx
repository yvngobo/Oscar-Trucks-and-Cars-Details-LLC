import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Phone, ArrowUpRight } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

const pricingTable = [
  { service: "Basic Wash", small: "$30", suv: "$50" },
  { service: "Basic Wash + Interior", small: "$50", suv: "$75" },
  { service: "Wash + Wax", small: "$125", suv: "$175" },
  { service: "Full Exterior Detail", small: "$120", suv: "$160" },
  { service: "Interior Deep Clean", small: "$100", suv: "$140" },
  { service: "Paint Correction", small: "From $250", suv: "From $300" },
  { service: "Full Detail Package", small: "$200", suv: "$275" },
  { service: "Truck & Fleet", small: "—", suv: "Custom Quote" },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[var(--background)]">
        {/* Hero */}
        <section className="pt-28 pb-12 lg:pt-36 lg:pb-16">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <FadeUp>
              <p className="text-[#DC2626] text-xs font-semibold uppercase tracking-widest mb-4">
                ✦ Services
              </p>
              <h1 className="text-6xl lg:text-8xl font-black text-[var(--foreground)] leading-[0.9] tracking-[-0.04em] mb-6">
                What we
                <br />
                <span className="italic font-serif text-[#DC2626]">offer.</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-[var(--muted-text)] text-lg max-w-xl leading-relaxed">
                From basic washes to full paint correction — professional results
                for every vehicle in Grayson, GA and Gwinnett County.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Service cards */}
        <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <FadeUp delay={0.1}>
            <ServiceGrid />
          </FadeUp>
        </section>

        {/* Pricing table */}
        <section className="bg-[var(--card)] border-y border-[var(--card-border)]">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="text-center mb-12 max-w-lg mx-auto">
              <FadeUp>
                <p className="text-[#DC2626] text-xs font-semibold uppercase tracking-widest mb-3">
                  ✦ Transparent Pricing
                </p>
                <h2 className="text-5xl lg:text-6xl font-black text-[var(--foreground)] leading-[0.95] tracking-[-0.035em] mb-4">
                  No surprises.
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-[var(--muted-text)] text-sm">
                  Prices may vary based on vehicle condition. We&apos;ll confirm
                  the quote before any work begins.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.15}>
            <div className="bg-[var(--background)] border border-[var(--card-border)] rounded-3xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--card-border)]">
                      <th className="text-left py-4 px-6 text-[var(--muted-text)] font-semibold uppercase tracking-wider text-[11px]">
                        Service
                      </th>
                      <th className="text-center py-4 px-6 text-[var(--muted-text)] font-semibold uppercase tracking-wider text-[11px]">
                        Car / Small
                      </th>
                      <th className="text-center py-4 px-6 text-[var(--muted-text)] font-semibold uppercase tracking-wider text-[11px]">
                        SUV / Truck
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingTable.map((row, i) => (
                      <tr
                        key={row.service}
                        className={
                          i !== pricingTable.length - 1
                            ? "border-b border-[var(--card-border)]"
                            : ""
                        }
                      >
                        <td className="py-4 px-6 text-[var(--foreground)] font-semibold">
                          {row.service}
                        </td>
                        <td className="py-4 px-6 text-center text-[#DC2626] font-bold">
                          {row.small}
                        </td>
                        <td className="py-4 px-6 text-center text-[#DC2626] font-bold">
                          {row.suv}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            </FadeUp>

            <FadeUp delay={0.2}>
            <p className="text-[var(--muted-text)] text-xs text-center mt-5">
              * Final price may vary depending on vehicle condition and size.
            </p>
            </FadeUp>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-xl mx-auto">
            <FadeUp>
              <h2 className="text-4xl lg:text-5xl font-black text-[var(--foreground)] leading-[0.95] tracking-[-0.035em] mb-4">
                Not sure what you need?
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-[var(--muted-text)] mb-8">
                Give us a call — we&apos;ll recommend the right package for your
                vehicle.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="min-h-[52px] pl-7 pr-6 py-4 bg-[#0A0A0A] hover:bg-[#DC2626] text-white font-semibold text-sm rounded-full flex items-center justify-center gap-2 transition-colors duration-200 group"
                >
                  Get a Quote
                  <ArrowUpRight
                    size={16}
                    className="group-hover:rotate-45 transition-transform duration-200"
                  />
                </Link>
                <a
                  href="tel:4709661113"
                  className="min-h-[52px] px-7 py-4 bg-[var(--card)] hover:bg-[var(--muted-bg)] text-[var(--foreground)] border border-[var(--card-border)] font-semibold text-sm rounded-full flex items-center justify-center gap-2 transition-colors duration-150"
                >
                  <Phone size={15} />
                  (470) 966-1113
                </a>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
