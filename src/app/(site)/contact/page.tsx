import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[var(--background)]">
        {/* Hero */}
        <section className="pt-28 pb-12 lg:pt-36 lg:pb-16">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <FadeUp>
              <p className="text-[#DC2626] text-xs font-semibold uppercase tracking-widest mb-4">
                ✦ Get in Touch
              </p>
              <h1 className="text-6xl lg:text-8xl font-black text-[var(--foreground)] leading-[0.9] tracking-[-0.04em] mb-6">
                Let&apos;s
                <br />
                <span className="italic font-serif text-[#DC2626]">talk.</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-[var(--muted-text)] text-lg max-w-xl leading-relaxed">
                Ready for a showroom finish? Fill out the form or call us
                directly at{" "}
                <a
                  href="tel:4709661113"
                  className="text-[var(--foreground)] font-semibold underline underline-offset-4 decoration-[#DC2626] decoration-2"
                >
                  (470) 966-1113
                </a>
                .
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Form + Info */}
        <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Contact info */}
            <aside className="lg:col-span-4 space-y-5">
              <FadeUp>
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-[28px] p-7">
                <p className="text-[#DC2626] text-xs font-semibold uppercase tracking-widest mb-5">
                  ✦ Contact Info
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[var(--muted-bg)] rounded-full flex items-center justify-center shrink-0">
                      <Phone size={15} className="text-[#DC2626]" />
                    </div>
                    <div>
                      <p className="text-[var(--muted-text)] text-[11px] uppercase tracking-widest font-semibold mb-1">
                        Phone
                      </p>
                      <div className="space-y-1">
                        <div>
                          <p className="text-[var(--muted-text)] text-[10px] uppercase tracking-widest">Front Office</p>
                          <a href="tel:4709661113" className="text-[var(--foreground)] font-bold text-base tracking-tight hover:text-[#DC2626] transition-colors duration-150">
                            (470) 966-1113
                          </a>
                        </div>
                        <div>
                          <p className="text-[var(--muted-text)] text-[10px] uppercase tracking-widest">After Hours</p>
                          <a href="tel:6789339465" className="text-[var(--foreground)] font-bold text-base tracking-tight hover:text-[#DC2626] transition-colors duration-150">
                            (678) 933-9465
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[var(--muted-bg)] rounded-full flex items-center justify-center shrink-0">
                      <Mail size={15} className="text-[#DC2626]" />
                    </div>
                    <div>
                      <p className="text-[var(--muted-text)] text-[11px] uppercase tracking-widest font-semibold mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:Oscarsdetailingdudes@gmail.com"
                        className="text-[var(--foreground)] font-bold text-sm hover:text-[#DC2626] transition-colors duration-150 break-all"
                      >
                        Oscarsdetailingdudes@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[var(--muted-bg)] rounded-full flex items-center justify-center shrink-0">
                      <MapPin size={15} className="text-[#DC2626]" />
                    </div>
                    <div>
                      <p className="text-[var(--muted-text)] text-[11px] uppercase tracking-widest font-semibold mb-1">
                        Location
                      </p>
                      <a
                        href="https://www.google.com/maps/search/2202+Loganville+Hwy+Grayson+GA+30017"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--foreground)] font-bold text-sm hover:text-[#DC2626] transition-colors duration-150 leading-snug block"
                      >
                        2202 Loganville Hwy<br />Grayson, GA 30017
                      </a>
                      <p className="text-[var(--muted-text)] text-xs mt-1 leading-relaxed">
                        Mobile service across Gwinnett County
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[var(--muted-bg)] rounded-full flex items-center justify-center shrink-0">
                      <Clock size={15} className="text-[#DC2626]" />
                    </div>
                    <div>
                      <p className="text-[var(--muted-text)] text-[11px] uppercase tracking-widest font-semibold mb-1">
                        Hours
                      </p>
                      <p className="text-[var(--foreground)] font-bold text-sm">
                        Mon – Sat: 8am – 5pm
                      </p>
                      <p className="text-[var(--muted-text)] text-xs mt-0.5">
                        Sunday: Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              </FadeUp>

              {/* Mobile click-to-call */}
              <a
                href="tel:4709661113"
                className="flex md:hidden min-h-[56px] w-full items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-base rounded-full transition-colors duration-150"
              >
                <Phone size={18} />
                Tap to Call Now
              </a>

              {/* Service area */}
              <FadeUp delay={0.15}>
                <div className="bg-[#0A0A0A] text-white rounded-[28px] p-7">
                  <p className="text-[#DC2626] text-xs font-semibold uppercase tracking-widest mb-3">
                    ✦ Service Area
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We serve Grayson, Loganville, Snellville, Lawrenceville,
                    Buford, and surrounding Gwinnett County areas.
                  </p>
                </div>
              </FadeUp>
            </aside>

            {/* Form */}
            <FadeUp delay={0.1} className="lg:col-span-8">
              <ContactForm />
            </FadeUp>
          </div>
        </section>

        {/* Map */}
        <section className="pb-20 lg:pb-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <FadeUp>
              <p className="text-[#DC2626] text-xs font-semibold uppercase tracking-widest mb-3">
                ✦ Find Us
              </p>
              <p className="text-[var(--foreground)] font-bold mb-5">
                2202 Loganville Hwy, Grayson, GA 30017
              </p>
              <div className="rounded-[24px] overflow-hidden border border-[var(--card-border)] h-[320px] lg:h-[400px]">
                <iframe
                  src="https://www.google.com/maps?q=2202+Loganville+Hwy,+Grayson,+GA+30017&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Oscar Trucks and Cars Details location"
                />
              </div>
            </FadeUp>
          </div>
        </section>

        {/*
          GoHighLevel Integration (uncomment when ready):
          <section className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 pb-20">
            <iframe
              src="YOUR_GHL_FORM_URL"
              width="100%"
              height="600"
              frameBorder="0"
              title="Book Your Appointment"
            />
          </section>
        */}
      </main>
      <Footer />
    </>
  );
}
