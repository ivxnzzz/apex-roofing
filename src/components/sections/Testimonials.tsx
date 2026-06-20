"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="relative bg-[#f0ece6] py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Grain */}
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 mb-6">
            <div className="h-px w-8 bg-amber-700" />
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1613] sm:text-5xl">
            Words that matter.
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Giant quote mark */}
              <div className="text-[8rem] sm:text-[12rem] font-bold text-[#e4ddd4] leading-none select-none -mb-10 sm:-mb-16">
                &ldquo;
              </div>

              <blockquote className="text-xl sm:text-2xl font-medium text-[#1a1613] leading-relaxed sm:text-3xl relative z-10">
                {TESTIMONIALS[current].quote}
              </blockquote>

              <div className="mt-10 flex flex-col items-center gap-3">
                <div className="flex gap-1">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-700 text-amber-700" />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1a1613] uppercase tracking-wider">
                    {TESTIMONIALS[current].name}
                  </div>
                  <div className="text-xs text-[#7a7168]">{TESTIMONIALS[current].location}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div className="mt-14 flex items-center justify-center gap-4">
            <button onClick={prev} aria-label="Previous" className="flex h-10 w-10 items-center justify-center border border-[#e4ddd4] text-[#7a7168] hover:border-amber-700 hover:text-amber-700 transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-1 transition-all duration-300 ${i === current ? "w-8 bg-amber-700" : "w-2 bg-[#e4ddd4]"}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="flex h-10 w-10 items-center justify-center border border-[#e4ddd4] text-[#7a7168] hover:border-amber-700 hover:text-amber-700 transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
