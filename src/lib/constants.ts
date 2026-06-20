import { Wrench, Home, Shield, CloudRain } from "lucide-react";

export const SITE = {
  name: "Apex Roofing Solutions",
  phone: "(03) 5555 1234",
  phoneLink: "tel:+61355551234",
  email: "info@apexroofingsolutions.com",
  emailLink: "mailto:info@apexroofingsolutions.com",
  address: "Melbourne, Victoria, Australia",
  hours: "Monday - Friday, 8:00 AM - 5:00 PM",
  title: "Apex Roofing Solutions | Professional Roofing Services Melbourne",
  description:
    "Trusted roofing specialists providing roof repairs, replacements, and maintenance services in Melbourne.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    icon: Wrench,
    title: "Roof Repairs",
    description:
      "Fast and reliable repairs for damaged roofs, leaks, and weather-related issues.",
    href: "#contact",
  },
  {
    icon: Home,
    title: "Roof Replacement",
    description:
      "Complete roofing replacement solutions using high-quality materials.",
    href: "#contact",
  },
  {
    icon: Shield,
    title: "Roof Maintenance",
    description:
      "Regular inspections and maintenance to prevent expensive repairs.",
    href: "#contact",
  },
  {
    icon: CloudRain,
    title: "Gutter Installation",
    description:
      "Professional gutter solutions to protect your property.",
    href: "#contact",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Team",
    description:
      "Skilled professionals with years of industry experience delivering exceptional results.",
  },
  {
    title: "Quality Materials",
    description:
      "Using reliable, durable materials built to withstand Australian conditions.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees. Clear and honest quotes with upfront pricing.",
  },
  {
    title: "Fast Response",
    description:
      "Quick service and reliable communication from first contact to project completion.",
  },
] as const;

export const PROJECTS = [
  {
    title: "Residential Roof Replacement",
    location: "Brighton, VIC",
    category: "residential",
    image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&q=80",
  },
  {
    title: "Commercial Roof Repair",
    location: "Richmond, VIC",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    title: "Storm Damage Restoration",
    location: "St Kilda, VIC",
    category: "residential",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    title: "Gutter System Installation",
    location: "South Yarra, VIC",
    category: "residential",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    title: "Warehouse Roof Replacement",
    location: "Footscray, VIC",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    title: "Emergency Leak Repair",
    location: "Caulfield, VIC",
    category: "residential",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Excellent service from start to finish. The team repaired our roof quickly and professionally. Highly recommend their work.",
    name: "Sarah Mitchell",
    location: "Brighton, VIC",
    rating: 5,
  },
  {
    quote:
      "Professional, reliable, and great communication throughout the project. They kept us informed every step of the way.",
    name: "James Anderson",
    location: "Richmond, VIC",
    rating: 5,
  },
  {
    quote:
      "Our new roof looks amazing. The quality of work exceeded our expectations. Would definitely use them again.",
    name: "Michael Brown",
    location: "South Yarra, VIC",
    rating: 5,
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Contact Us",
    description: "Tell us about your roofing needs and we'll get back to you promptly.",
  },
  {
    step: 2,
    title: "Free Inspection",
    description: "Our team evaluates your property and identifies the best solution.",
  },
  {
    step: 3,
    title: "Receive Quote",
    description: "Get a clear, detailed project estimate with no hidden costs.",
  },
  {
    step: 4,
    title: "Complete The Job",
    description: "Professional installation and service with quality guarantees.",
  },
] as const;

export const FAQS = [
  {
    question: "How much does roof repair cost?",
    answer:
      "Roof repair costs vary depending on the extent of damage, materials needed, and complexity of the job. We provide free, no-obligation quotes after inspecting your property. Contact us to schedule your free inspection.",
  },
  {
    question: "How long does a roof replacement take?",
    answer:
      "Most residential roof replacements are completed within 2-5 days, depending on the size of your roof and weather conditions. We'll provide a timeline estimate during your quote consultation.",
  },
  {
    question: "Do you provide free inspections?",
    answer:
      "Yes, we offer free roof inspections for all potential customers. Our team will assess your roof's condition and provide honest recommendations without any obligation.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. Apex Roofing Solutions is fully licensed and insured. We carry comprehensive public liability insurance and all our team members are qualified professionals.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We service Melbourne and surrounding areas including the CBD, inner suburbs, bayside, and southeastern regions. Contact us to confirm if we service your specific location.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer:
      "Yes, we stand behind our work with comprehensive warranties on both materials and workmanship. Specific warranty details are provided with your project quote.",
  },
] as const;

export const SERVICES_OPTIONS = [
  { value: "repairs", label: "Roof Repairs" },
  { value: "replacement", label: "Roof Replacement" },
  { value: "maintenance", label: "Roof Maintenance" },
  { value: "gutters", label: "Gutter Installation" },
  { value: "other", label: "Other" },
] as const;

export const PROPERTY_TYPES = [
  { value: "residential", label: "Residential Home" },
  { value: "commercial", label: "Commercial Property" },
  { value: "industrial", label: "Industrial Property" },
  { value: "strata", label: "Strata / Apartment" },
  { value: "other", label: "Other" },
] as const;
