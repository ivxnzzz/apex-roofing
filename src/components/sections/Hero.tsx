"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
} as const;

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#1a1613]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
          alt="Professional roofing work on a Melbourne home"
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1613]/70 via-[#1a1613]/60 to-[#1a1613]" />
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 bg-noise opacity-30" />

      {/* Accent line */}
      <div className="absolute top-0 left-[15%] h-full w-px bg-gradient-to-b from-transparent via-amber-700/20 to-transparent" />
      <div className="absolute top-0 right-[15%] h-full w-px bg-gradient-to-b from-transparent via-amber-700/10 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex min-h-screen flex-col justify-center py-24 sm:py-32">
          {/* Top label */}
          <motion.div variants={item} className="mb-4 sm:mb-8">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              <div className="h-px w-8 bg-amber-700" />
              Melbourne, Australia
            </div>
          </motion.div>

          {/* Giant headline */}
          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[9rem]"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            ROOFING
            <br />
            <span className="text-white">REDEFINED.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            className="mt-5 sm:mt-8 max-w-md text-sm sm:text-base text-[#c4bdb4] leading-relaxed"
          >
            Precision craftsmanship for Melbourne&apos;s most demanding homes.
            We don&apos;t just build roofs — we engineer shelter.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-8 sm:mt-12 flex flex-col gap-3 sm:gap-4 sm:flex-row"
          >
            <Link
              href="#contact"
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-6 h-auto text-sm uppercase tracking-wider group rounded-none",
              })}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={SITE.phoneLink}
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "border-[#3d352d] text-[#7a7168] hover:bg-[#2a231d] hover:text-[#faf9f7] font-semibold px-8 py-6 h-auto text-sm uppercase tracking-wider rounded-none",
              })}
            >
              <Phone className="mr-2 h-4 w-4" />
              {SITE.phone}
            </Link>
          </motion.div>

          {/* Bottom stats strip */}
          <motion.div
            variants={item}
            className="mt-auto pt-10 sm:pt-16 flex gap-8 sm:gap-12 border-t border-[#3d352d]"
          >
            {[
              { value: "10+", label: "Years" },
              { value: "500+", label: "Projects" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-[#faf9f7]">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-[#a89f94]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
