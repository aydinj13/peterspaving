import About from "@/components/About";
import Banner from "@/components/Banner";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
    <Navbar />
    <Hero />
    <About />
    <ContactSection />
    </div>
  )
}
