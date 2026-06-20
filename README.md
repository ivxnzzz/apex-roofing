# Apex Roofing Solutions

A premium, high-converting lead generation website for a Melbourne roofing business. Built with Next.js, TypeScript, and Tailwind CSS.

## Live Demo

[View Live Site](https://apex-roofing-orcin.vercel.app/)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Deployment:** Vercel

## Features

- Fully responsive (mobile-first)
- Brutalist luxury design aesthetic
- Animated section reveals with Framer Motion
- Lead capture form with validation
- Google Maps integration
- SEO optimized (meta tags, Open Graph, structured data)
- Accessible (skip links, ARIA labels, semantic HTML)
- Auto-rotating testimonials carousel
- Project gallery with filter tabs

## Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/apex-roofing.git

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts + metadata
│   ├── page.tsx            # Home page composing all sections
│   ├── globals.css         # Design tokens + Tailwind config
│   ├── error.tsx           # Error boundary
│   ├── robots.txt          # SEO robots
│   └── sitemap.ts          # Auto-generated sitemap
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with mobile menu
│   │   └── Footer.tsx      # Site footer
│   ├── sections/
│   │   ├── Hero.tsx        # Hero with background image
│   │   ├── Services.tsx    # Service cards
│   │   ├── WhyChooseUs.tsx # Trust-building section
│   │   ├── Projects.tsx    # Portfolio gallery
│   │   ├── Testimonials.tsx # Auto-rotating carousel
│   │   ├── Process.tsx     # How it works steps
│   │   ├── FAQ.tsx         # Accordion FAQ
│   │   ├── LeadForm.tsx    # Quote request form
│   │   └── Contact.tsx     # Contact cards + map
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── animations.ts       # Shared Framer Motion variants
│   ├── constants.ts        # Site data + content
│   └── utils.ts            # Utility functions
```

## License

MIT
