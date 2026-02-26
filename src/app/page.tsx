import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Institutional from "@/components/Institutional";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Institutional />
        <Projects />
        <Contact />
      </main>
      <WhatsAppButton />
    </>
  );
}