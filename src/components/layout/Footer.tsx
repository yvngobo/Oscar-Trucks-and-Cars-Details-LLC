import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F0E0E] text-white overflow-hidden">
      {/* Top — brand mark + CTA */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 pb-12 border-b border-white/8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="flex items-end gap-5">
            <Image
              src="/oscar-logo.jpg"
              alt="Oscar Trucks and Cars Details LLC"
              width={72}
              height={72}
              className="rounded-xl object-contain mb-1"
            />
            <h2 className="text-[14vw] lg:text-[160px] font-black leading-[0.82] tracking-[-0.04em] text-white">
              Oscar<span className="text-[var(--action)]">.</span>
            </h2>
          </div>
          <div className="lg:pb-3 shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 min-h-[52px] pl-7 pr-5 py-3 bg-[var(--action)] hover:bg-white hover:text-[#0F0E0E] text-white font-semibold text-sm rounded-full transition-colors duration-200"
            >
              Book a Detail
              <ArrowUpRight
                size={15}
                className="group-hover:rotate-45 transition-transform duration-200"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Middle — info */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 border-b border-white/8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex items-start gap-3">
            <Phone size={14} className="text-[var(--action)] mt-0.5 shrink-0" />
            <div>
              <p className="text-white/40 text-[11px] uppercase tracking-widest font-semibold mb-1">
                Call us
              </p>
              <a
                href="tel:4709661113"
                className="text-white font-semibold hover:text-[var(--action)] transition-colors duration-150"
              >
                (470) 966-1113
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={14} className="text-[var(--action)] mt-0.5 shrink-0" />
            <div>
              <p className="text-white/40 text-[11px] uppercase tracking-widest font-semibold mb-1">
                Location
              </p>
              <a
                href="https://www.google.com/maps/search/Grayson+GA+30017"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-[var(--action)] transition-colors duration-150"
              >
                Grayson, GA 30017
              </a>
              <p className="text-white/40 text-xs mt-0.5">Gwinnett County</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={14} className="text-[var(--action)] mt-0.5 shrink-0" />
            <div>
              <p className="text-white/40 text-[11px] uppercase tracking-widest font-semibold mb-1">
                Hours
              </p>
              <p className="text-white font-semibold">Mon–Sat: 8am–6pm</p>
              <p className="text-white/40 text-xs mt-0.5">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom — legal */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Oscar Trucks and Cars Details LLC · Licensed & Insured
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-white/30 text-xs hover:text-white/60 transition-colors duration-150"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/30 text-xs hover:text-white/60 transition-colors duration-150"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
