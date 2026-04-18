"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const services = [
  "Full Exterior Detail",
  "Interior Deep Clean",
  "Paint Correction",
  "Truck & Fleet Services",
  "Full Detail Package",
  "Other / Not Sure",
];

const inputClass =
  "w-full min-h-[48px] bg-[var(--muted-bg)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--muted-text)] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--foreground)] focus:bg-[var(--card)] transition-colors duration-150";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Form data:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-[28px] p-10 flex flex-col items-center justify-center text-center min-h-[420px]">
        <div className="w-14 h-14 bg-[#DC2626] rounded-full flex items-center justify-center mb-5">
          <CheckCircle2 size={28} className="text-white" />
        </div>
        <h3 className="text-[var(--foreground)] font-black text-2xl tracking-tight mb-3">
          We&apos;ll be in touch.
        </h3>
        <p className="text-[var(--muted-text)] text-sm max-w-xs leading-relaxed">
          Thanks for reaching out. Oscar&apos;s team will contact you within a
          few hours to confirm your appointment.
        </p>
        <p className="text-[var(--muted-text)] text-sm mt-5">
          Or call directly:{" "}
          <a
            href="tel:4709661113"
            className="text-[#DC2626] font-semibold"
          >
            (470) 966-1113
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[var(--card)] border border-[var(--card-border)] rounded-[28px] p-6 sm:p-10 space-y-5"
      noValidate
    >
      <div className="mb-2">
        <p className="text-[#DC2626] text-xs font-semibold uppercase tracking-widest mb-2">
          ✦ Request a Booking
        </p>
        <h2 className="text-[var(--foreground)] font-black text-3xl tracking-tight">
          Tell us about your ride.
        </h2>
      </div>

      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[var(--foreground)] text-sm font-semibold mb-1.5">
            Full Name <span className="text-[#DC2626]">*</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="John Smith"
            className={inputClass}
          />
          {errors.name && (
            <p className="text-[#DC2626] text-xs mt-1.5">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-[var(--foreground)] text-sm font-semibold mb-1.5">
            Email <span className="text-[#DC2626]">*</span>
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            type="email"
            placeholder="john@email.com"
            className={inputClass}
          />
          {errors.email && (
            <p className="text-[#DC2626] text-xs mt-1.5">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone + Service */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[var(--foreground)] text-sm font-semibold mb-1.5">
            Phone Number <span className="text-[#DC2626]">*</span>
          </label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            type="tel"
            placeholder="(470) 555-0100"
            className={inputClass}
          />
          {errors.phone && (
            <p className="text-[#DC2626] text-xs mt-1.5">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className="block text-[var(--foreground)] text-sm font-semibold mb-1.5">
            Service Interested In
          </label>
          <select
            {...register("service")}
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-[#0A0A0A] text-sm font-semibold mb-1.5">
          Message / Notes
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us about your vehicle and what you need..."
          className="w-full bg-[var(--muted-bg)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--muted-text)] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--foreground)] focus:bg-[var(--card)] transition-colors duration-150 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group w-full min-h-[56px] bg-[#0A0A0A] hover:bg-[#DC2626] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm tracking-wide rounded-full flex items-center justify-center gap-2 transition-colors duration-200"
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
            Sending...
          </>
        ) : (
          <>
            Send Request
            <ArrowUpRight
              size={16}
              className="group-hover:rotate-45 transition-transform duration-200"
            />
          </>
        )}
      </button>

      <p className="text-[var(--muted-text)] text-xs text-center">
        We&apos;ll respond within a few hours. Or call{" "}
        <a href="tel:4709661113" className="text-[#DC2626] font-semibold">
          (470) 966-1113
        </a>{" "}
        for same-day service.
      </p>
    </form>
  );
}
