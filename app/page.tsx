import About from "@/components/About";
import Banner from "@/components/Banner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div>
    <Banner />
    <Navbar />
    <Hero />
    <About />
    <ContactSection />
    <Projects />
    <Reviews />
    <Footer />
    </div>
  )
}
