import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Institutional from "@/components/Institutional";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Institutional />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
