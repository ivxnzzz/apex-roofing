import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE, NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1613] text-[#faf9f7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center bg-[#faf9f7] text-[#1a1613] font-bold text-lg">A</div>
              <span className="text-sm font-bold uppercase tracking-[0.2em]">{SITE.name}</span>
            </div>
            <p className="text-sm text-[#7a7168] leading-relaxed max-w-xs">
              Professional roofing services for Melbourne. Licensed, insured, committed to quality.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7a7168] mb-5">Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => <li key={s.title}><Link href="#services" className="text-sm text-[#7a7168] hover:text-[#faf9f7] transition-colors">{s.title}</Link></li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7a7168] mb-5">Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => <li key={l.href}><Link href={l.href} className="text-sm text-[#7a7168] hover:text-[#faf9f7] transition-colors">{l.label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7a7168] mb-5">Contact</h3>
            <ul className="space-y-3">
              <li><a href={SITE.phoneLink} className="flex items-center gap-2.5 text-sm text-[#7a7168] hover:text-[#faf9f7] transition-colors"><Phone className="h-3.5 w-3.5 text-amber-700" />{SITE.phone}</a></li>
              <li><a href={SITE.emailLink} className="flex items-center gap-2.5 text-sm text-[#7a7168] hover:text-[#faf9f7] transition-colors"><Mail className="h-3.5 w-3.5 text-amber-700" />{SITE.email}</a></li>
              <li><span className="flex items-center gap-2.5 text-sm text-[#7a7168]"><MapPin className="h-3.5 w-3.5 text-amber-700" />{SITE.address}</span></li>
              <li><span className="flex items-center gap-2.5 text-sm text-[#7a7168]"><Clock className="h-3.5 w-3.5 text-amber-700" />{SITE.hours}</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3d352d] py-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-[#7a7168]">&copy; {year} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-[10px] text-[#3d352d]">Privacy Policy</span>
            <span className="text-[10px] text-[#3d352d]">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
