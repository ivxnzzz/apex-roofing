"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-[#f0ece6]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 mb-6">
            <div className="h-px w-8 bg-amber-700" />
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1613] sm:text-5xl">
            Questions answered.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion className="space-y-0">
            {FAQS.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="border-b border-[#e4ddd4]"
              >
                <AccordionTrigger className="text-left text-sm font-bold text-[#1a1613] hover:text-amber-700 hover:no-underline py-6 uppercase tracking-wider">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm text-[#7a7168] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
