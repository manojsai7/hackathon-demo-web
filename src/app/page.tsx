import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import Prizes from "@/components/sections/Prizes";
import Achievements from "@/components/sections/Achievements";
import Sponsors from "@/components/sections/Sponsors";
import Testimonials from "@/components/sections/Testimonials";
import RegistrationForm from "@/components/sections/RegistrationForm";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Prizes />
      <Achievements />
      <Testimonials />
      <Sponsors />
      <RegistrationForm />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
