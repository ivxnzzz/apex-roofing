"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SERVICES_OPTIONS, PROPERTY_TYPES } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  propertyType: z.string().min(1, "Please select a property type"),
  message: z.string().min(10, "Please provide more details"),
});

type FormData = z.infer<typeof formSchema>;

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      setSubmitted(true);
      reset();
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "bg-[#2a231d] border-[#3d352d] text-[#faf9f7] placeholder:text-[#7a7168] focus:border-amber-700 focus:ring-amber-700 rounded-none";

  return (
    <section id="contact" className="relative bg-[#1a1613] py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20" />
      <div className="absolute top-0 left-[20%] h-full w-px bg-[#3d352d]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div {...fadeInUp}>
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 mb-6">
              <div className="h-px w-8 bg-amber-700" />
              Contact
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#faf9f7] sm:text-5xl leading-[0.95]">
              Ready to start?
            </h2>
            <p className="mt-6 text-sm text-[#7a7168] leading-relaxed max-w-md">
              Fill out the form and we&apos;ll get back to you within 24 hours
              with a free, no-obligation quote.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Free roof inspection included",
                "No obligation, no pressure",
                "Response within 24 hours",
                "Licensed and insured team",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-amber-700" />
                  <span className="text-sm text-[#7a7168]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="border border-[#3d352d] bg-[#2a231d] p-10 text-center">
                  <CheckCircle2 className="mx-auto h-14 w-14 text-amber-700" />
                  <h3 className="mt-6 text-2xl font-bold text-[#faf9f7]">Thank You!</h3>
                  <p className="mt-3 text-sm text-[#7a7168]">We&apos;ll get back to you within 24 hours.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-8 border-[#3d352d] text-[#7a7168] hover:bg-[#3d352d] hover:text-[#faf9f7] rounded-none">
                    Submit Another
                  </Button>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit(onSubmit)} className="border border-[#3d352d] bg-[#2a231d]/50 p-8">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[#7a7168]">Full Name</Label>
                      <Input id="name" placeholder="John Smith" {...register("name")} className={`mt-2 ${inputClass} ${errors.name ? "border-red-500" : ""}`} />
                      {errors.name && <p className="mt-1 text-xs text-red-400" role="alert">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-[#7a7168]">Phone</Label>
                      <Input id="phone" type="tel" placeholder="(03) 0000 0000" {...register("phone")} className={`mt-2 ${inputClass} ${errors.phone ? "border-red-500" : ""}`} />
                      {errors.phone && <p className="mt-1 text-xs text-red-400" role="alert">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[#7a7168]">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" {...register("email")} className={`mt-2 ${inputClass} ${errors.email ? "border-red-500" : ""}`} />
                      {errors.email && <p className="mt-1 text-xs text-red-400" role="alert">{errors.email.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-[#7a7168]">Service</Label>
                      <Select value={watch("service")} onValueChange={(v) => setValue("service", v ?? "")}>
                        <SelectTrigger id="service" className={`mt-2 ${inputClass} ${errors.service ? "border-red-500" : ""}`}>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2a231d] border-[#3d352d]">
                          {SERVICES_OPTIONS.map((o) => <SelectItem key={o.value} value={o.value} className="text-[#faf9f7] focus:bg-amber-700/20">{o.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      {errors.service && <p className="mt-1 text-xs text-red-400" role="alert">{errors.service.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="propertyType" className="text-xs font-semibold uppercase tracking-wider text-[#7a7168]">Property</Label>
                      <Select value={watch("propertyType")} onValueChange={(v) => setValue("propertyType", v ?? "")}>
                        <SelectTrigger id="propertyType" className={`mt-2 ${inputClass} ${errors.propertyType ? "border-red-500" : ""}`}>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2a231d] border-[#3d352d]">
                          {PROPERTY_TYPES.map((o) => <SelectItem key={o.value} value={o.value} className="text-[#faf9f7] focus:bg-amber-700/20">{o.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      {errors.propertyType && <p className="mt-1 text-xs text-red-400" role="alert">{errors.propertyType.message}</p>}
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[#7a7168]">Message</Label>
                      <Textarea id="message" placeholder="Tell us about your roofing needs..." rows={4} {...register("message")} className={`mt-2 ${inputClass} ${errors.message ? "border-red-500" : ""}`} />
                      {errors.message && <p className="mt-1 text-xs text-red-400" role="alert">{errors.message.message}</p>}
                    </div>
                  </div>

                  {error && <div className="mt-5 border border-red-500/20 bg-red-500/10 p-4"><p className="text-sm text-red-400" role="alert">{error}</p></div>}

                  <Button type="submit" disabled={submitting} className="mt-6 w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-6 h-auto text-xs uppercase tracking-wider rounded-none group">
                    {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting...</> : <>Request Free Quote<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></>}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
