"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
] as const;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filtered = activeFilter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 bg-[#faf9f7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 mb-6">
              <div className="h-px w-8 bg-amber-700" />
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1613] sm:text-5xl leading-[0.95]">
              Featured work.
            </h2>
          </div>
          <div className="flex gap-2" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                aria-pressed={activeFilter === f.value}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all rounded-none ${
                  activeFilter === f.value
                    ? "bg-[#1a1613] text-[#faf9f7]"
                    : "bg-[#f0ece6] text-[#7a7168] hover:bg-[#e4ddd4]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                variants={scaleIn}
                layout
                className={`group relative overflow-hidden cursor-pointer ${i === 0 ? "lg:row-span-2" : ""}`}
              >
                <div className={`relative ${i === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1613] via-[#1a1613]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Arrow icon */}
                  <div className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center bg-[#faf9f7] text-[#1a1613] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="inline-block w-fit bg-amber-700 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-[#faf9f7]">{project.title}</h3>
                    <div className="mt-1 flex items-center gap-1 text-xs text-[#faf9f7]/60">
                      <MapPin className="h-3 w-3" />{project.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
