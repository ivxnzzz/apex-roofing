"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function Process() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#faf9f7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="max-w-2xl">
          <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 mb-6">
            <div className="h-px w-8 bg-amber-700" />
            Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1613] sm:text-5xl leading-[0.95]">
            How we work.
          </h2>
          <p className="mt-4 text-sm text-[#7a7168]">
            Simple. Transparent. Efficient.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-0 md:grid-cols-4"
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              variants={staggerItem}
              className="relative border border-[#e4ddd4] p-6 sm:p-8 md:border-r-0 last:md:border-r"
            >
              {/* Connecting line */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-4 h-px bg-amber-700 translate-x-full" />
              )}

              <div className="text-5xl sm:text-6xl font-bold text-[#f0ece6] mb-3 sm:mb-4 leading-none">
                {String(step.step).padStart(2, "0")}
              </div>

              <h3 className="text-lg font-bold text-[#1a1613]">{step.title}</h3>
              <p className="mt-2 text-sm text-[#7a7168] leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
