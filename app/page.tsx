import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChoose from "../components/WhyChoose";
import Destinations from "../components/Destinations";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <WhyChoose />

      <Destinations />

      <Services />

      <Contact />

      <Footer />

      <WhatsAppButton />
    </>
  );
}