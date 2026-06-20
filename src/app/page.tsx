  import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import LeadForm from "@/components/sections/LeadForm";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <Process />
      <FAQ />
      <LeadForm />
      <Contact />
    </>
  );
}
