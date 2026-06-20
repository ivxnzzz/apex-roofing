"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const NUMBERS = ["01", "02", "03", "04"];

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32 bg-[#faf9f7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left header — sticky */}
          <motion.div
            {...fadeInUp}
            className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
          >
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 mb-6">
              <div className="h-px w-8 bg-amber-700" />
              Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1613] sm:text-5xl leading-[0.95]">
              What we
              <br />
              <span className="text-[#7a7168]">bring to the table.</span>
            </h2>
            <p className="mt-6 text-sm text-[#7a7168] leading-relaxed max-w-sm">
              Comprehensive roofing solutions built to protect your most valuable asset.
            </p>
          </motion.div>

          {/* Right cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {SERVICES.map((service, index) => (
                <motion.div key={service.title} variants={staggerItem}>
                  <Card className="group relative overflow-hidden border border-[#e4ddd4] bg-white hover:border-amber-700/30 transition-all duration-500 rounded-none h-full">
                    {/* Large number watermark */}
                    <div className="absolute -top-4 -right-2 text-[8rem] font-bold text-[#f0ece6] leading-none select-none pointer-events-none group-hover:text-amber-700/5 transition-colors">
                      {NUMBERS[index]}
                    </div>

                    <CardContent className="relative z-10 flex flex-col p-6 sm:p-8">
                      <div className="mb-6 flex items-center gap-3">
                        <span className="text-xs font-bold text-amber-700">{NUMBERS[index]}</span>
                        <div className="h-px flex-1 bg-[#e4ddd4] group-hover:bg-amber-700/30 transition-colors" />
                      </div>

                      <h3 className="text-xl font-bold text-[#1a1613]">
                        {service.title}
                      </h3>

                      <p className="mt-3 flex-1 text-sm text-[#7a7168] leading-relaxed">
                        {service.description}
                      </p>

                      <a
                        href={service.href}
                        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1a1613] group-hover:text-amber-700 transition-colors"
                      >
                        Learn More
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
