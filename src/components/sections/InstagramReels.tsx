"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";

const INSTAGRAM_URL = "https://www.instagram.com/oscarsdetailingdudes/reels/";
const HANDLE = "@oscarsdetailingdudes";

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const reels = [
  { id: 1, src: "/reels/reel1.mp4", label: "Detailing in action" },
  { id: 2, src: "/reels/reel2.mp4", label: "Full detail service" },
  { id: 3, src: "/reels/reel3.mp4", label: "Showroom finish" },
];

function ReelCard({ reel }: { reel: typeof reels[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleMouseEnter = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setPlaying(false);
  };

  const handleTap = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
      }}
      className="group relative shrink-0 w-[200px] sm:w-auto"
    >
      <div
        className="relative aspect-[9/16] rounded-[20px] overflow-hidden bg-[#111] cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleTap}
      >
        {/* Video */}
        <video
          ref={videoRef}
          src={reel.src}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/25 pointer-events-none" />

        {/* Instagram / Reels badge — top right */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1 pointer-events-none">
          <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          <span className="text-white text-[10px] font-semibold">Reels</span>
        </div>

        {/* Play button — hidden when playing */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-200 ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <Play size={18} className="text-white fill-white ml-0.5" />
          </div>
        </div>

        {/* Label at bottom */}
        <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
          <p className="text-white font-bold text-xs tracking-wide truncate">{reel.label}</p>
          <p className="text-white/60 text-[10px] mt-0.5">{HANDLE}</p>
        </div>
      </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export function InstagramReels() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-28">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#DC2626] text-xs font-semibold uppercase tracking-widest">
              ✦ Instagram
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-[var(--foreground)] leading-[0.95] tracking-[-0.035em]">
            Watch us
            <br />
            <span className="italic font-serif text-[var(--muted-text)]">work.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 min-h-[44px] pl-5 pr-4 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold text-sm rounded-full hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <InstagramIcon size={15} />
            Follow {HANDLE}
          </Link>
        </motion.div>
      </div>

      {/* Reel cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 sm:pb-0 sm:grid sm:grid-cols-3
                   [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
      >
        {reels.map((reel) => (
          <ReelCard key={reel.id} reel={reel} />
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 flex items-center justify-center"
      >
        <Link
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[var(--muted-text)] hover:text-[var(--foreground)] text-sm font-medium transition-colors duration-150"
        >
          <InstagramIcon size={13} />
          See all our work on Instagram →
        </Link>
      </motion.div>

    </section>
  );
}
