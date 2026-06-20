"use client";

import { motion } from "framer-motion";
import { Award, Shield, DollarSign, Zap } from "lucide-react";
import { fadeInUp, staggerContainer, fadeInLeft } from "@/lib/animations";

const POINTS = [
  { icon: Award, title: "Licensed Experts", desc: "Fully licensed and insured professionals.", stat: "10+", statLabel: "YEARS" },
  { icon: Shield, title: "Built to Last", desc: "Premium materials, ironclad warranties.", stat: "500+", statLabel: "PROJECTS" },
  { icon: DollarSign, title: "Fair Pricing", desc: "Transparent quotes, zero hidden costs.", stat: "$0", statLabel: "HIDDEN FEES" },
  { icon: Zap, title: "Fast Response", desc: "Same-day quotes, rapid turnaround.", stat: "24H", statLabel: "RESPONSE" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#1a1613] py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Grain */}
      <div className="absolute inset-0 bg-noise opacity-20" />

      {/* Vertical accent lines */}
      <div className="absolute top-0 left-[20%] h-full w-px bg-[#3d352d]" />
      <div className="absolute top-0 right-[20%] h-full w-px bg-[#3d352d]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div {...fadeInUp}>
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 mb-6">
              <div className="h-px w-8 bg-amber-700" />
              Why Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#faf9f7] sm:text-5xl leading-[0.95]">
              We don&apos;t just fix roofs.
              <br />
              <span className="text-[#7a7168]">We build trust.</span>
            </h2>
            <p className="mt-6 text-sm text-[#7a7168] leading-relaxed max-w-md">
              Every project is a promise. Quality workmanship, honest pricing,
              and an experience that keeps customers coming back.
            </p>

            {/* Mini stats */}
            <div className="mt-10 flex gap-10 border-t border-[#3d352d] pt-8">
              {[
                { val: "4.9", lbl: "Rating" },
                { val: "48h", lbl: "Turnaround" },
                { val: "0", lbl: "Complaints" },
              ].map((s) => (
                <div key={s.lbl}>
                  <div className="text-3xl font-bold text-[#faf9f7]">{s.val}</div>
                  <div className="text-xs uppercase tracking-wider text-[#7a7168]">{s.lbl}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {POINTS.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeInLeft}
                className="group relative border border-[#3d352d] p-6 transition-all duration-300 hover:border-amber-700/40"
              >
                {/* Stat watermark */}
                <div className="absolute top-3 right-4 text-5xl font-bold text-[#2a231d] group-hover:text-amber-700/10 transition-colors leading-none">
                  {p.stat}
                </div>

                <div className="relative z-10">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center border border-[#3d352d] text-amber-700">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#faf9f7]">{p.title}</h3>
                  <p className="mt-2 text-xs text-[#7a7168] leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
