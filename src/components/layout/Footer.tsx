import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

/* ── Brand SVG icons ──────────────────────────────────────────────── */

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100091267248312",
    icon: FacebookIcon,
    hoverColor: "hover:text-[#1877F2] hover:border-[#1877F2]/40",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@oscarsdetailingdudes",
    icon: TikTokIcon,
    hoverColor: "hover:text-white hover:border-white/40",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/oscarsdetailingdudes",
    icon: InstagramIcon,
    hoverColor: "hover:text-[#E1306C] hover:border-[#E1306C]/40",
  },
];

export { FacebookIcon, TikTokIcon, InstagramIcon };

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
              <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>

      {/* Middle — contact info */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 border-b border-white/8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex items-start gap-3">
            <Phone size={14} className="text-[var(--action)] mt-0.5 shrink-0" />
            <div>
              <p className="text-white/40 text-[11px] uppercase tracking-widest font-semibold mb-1">
                Call us
              </p>
              <a href="tel:4709661113" className="text-white font-semibold hover:text-[var(--action)] transition-colors duration-150">
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

      {/* Social — follow us */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 border-b border-white/8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-white/40 text-[11px] uppercase tracking-widest font-semibold mb-1">
              Follow us
            </p>
            <p className="text-white/60 text-sm">
              See our work on social media
            </p>
          </div>
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`group flex items-center gap-2.5 min-h-[44px] px-4 border border-white/12 text-white/45 text-[12px] font-medium rounded-full transition-all duration-200 ${hoverColor}`}
              >
                <Icon size={16} />
                <span className="hidden sm:block">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom — legal */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Oscar Trucks and Cars Details LLC · Licensed &amp; Insured
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-white/30 text-xs hover:text-white/60 transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/30 text-xs hover:text-white/60 transition-colors duration-150">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
