import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import WhyChoose from "@/components/WhyChoose";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Institutional from "@/components/Institutional";

export default function Home() {
  return (
    <>
  <Navbar />

  <main>
    <Hero />
    <Institutional />
    <Stats />
    <Services />   
    <Projects />
    <WhyChoose />
    <Contact />
    <FinalCTA />
  </main>

  <WhatsAppButton />
</>
  );
}