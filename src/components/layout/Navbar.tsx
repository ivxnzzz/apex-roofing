"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      setHidden(y > lastScrollY.current && y > 300);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-[#faf9f7]/90 backdrop-blur-xl border-b border-[#e4ddd4]"
          : "bg-transparent"
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link
            href="#home"
            aria-label="Apex Roofing - Home"
            onClick={(e) => { e.preventDefault(); nav("#home"); }}
            className="flex items-center gap-3"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-none font-bold text-lg transition-colors ${
                scrolled ? "bg-[#1a1613] text-[#faf9f7]" : "bg-[#faf9f7] text-[#1a1613]"
              }`}
            >
              A
            </div>
            <span className={`text-sm font-bold uppercase tracking-[0.2em] transition-colors ${scrolled ? "text-[#1a1613]" : "text-[#faf9f7]"}`}>
              Apex
            </span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); nav(link.href); }}
                className={`text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                  scrolled ? "text-[#7a7168] hover:text-[#1a1613]" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a
              href={SITE.phoneLink}
              aria-label={`Call ${SITE.phone}`}
              className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider ${scrolled ? "text-[#7a7168]" : "text-white/70"}`}
            >
              <Phone className="h-3.5 w-3.5" />
              {SITE.phone}
            </a>
            <Link
              href="#contact"
              onClick={(e) => { e.preventDefault(); nav("#contact"); }}
              className={buttonVariants({
                variant: "default",
                size: "sm",
                className: "bg-amber-700 hover:bg-amber-800 text-white font-semibold px-5 py-2.5 h-auto text-xs uppercase tracking-wider rounded-none",
              })}
            >
              Get Quote
            </Link>
          </div>

          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={<Button variant="ghost" size="icon" aria-label="Open menu" className={scrolled ? "text-[#1a1613]" : "text-[#faf9f7]"} />}
              >
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0 bg-[#faf9f7]">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b border-[#e4ddd4] px-6 py-4">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#1a1613]">{SITE.name}</span>
                    <Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex-1 px-6 py-8">
                    <div className="flex flex-col gap-1">
                      {NAV_LINKS.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={(e) => { e.preventDefault(); nav(link.href); }}
                          className="block px-4 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#3d352d] hover:text-[#1a1613] hover:bg-[#f0ece6] transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-[#e4ddd4] px-6 py-6 space-y-3">
                    <a href={SITE.phoneLink} className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#7a7168]">
                      <Phone className="h-4 w-4" />{SITE.phone}
                    </a>
                    <Link
                      href="#contact"
                      onClick={(e) => { e.preventDefault(); nav("#contact"); }}
                      className={buttonVariants({ variant: "default", size: "default", className: "w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-none py-3 text-xs uppercase tracking-wider" })}
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
