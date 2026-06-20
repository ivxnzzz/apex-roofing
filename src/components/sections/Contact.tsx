"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const CARDS = [
  { icon: Phone, title: "Call", detail: SITE.phone, action: SITE.phoneLink, link: true },
  { icon: Mail, title: "Email", detail: SITE.email, action: SITE.emailLink, link: true },
  { icon: Clock, title: "Hours", detail: SITE.hours },
  { icon: MapPin, title: "Location", detail: SITE.address },
];

export default function Contact() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#faf9f7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 mb-6">
            <div className="h-px w-8 bg-amber-700" />
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1613] sm:text-5xl">
            Let&apos;s talk.
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <motion.div key={c.title} variants={staggerItem}>
              <div className="border border-[#e4ddd4] p-8 text-center hover:border-amber-700/30 transition-colors h-full">
                <div className="mx-auto flex h-12 w-12 items-center justify-center border border-[#e4ddd4] text-[#1a1613]">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xs font-bold uppercase tracking-wider text-[#1a1613]">{c.title}</h3>
                {c.link ? (
                  <a href={c.action!} className="mt-2 block text-sm text-[#7a7168] hover:text-amber-700 transition-colors">{c.detail}</a>
                ) : (
                  <p className="mt-2 text-sm text-[#7a7168]">{c.detail}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 overflow-hidden border border-[#e4ddd4]"
        >
          <iframe
            title="Apex Roofing location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10248.119385234567!2d144.9630576!3d-37.8136293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1234567890"
            width="100%" height="320" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
