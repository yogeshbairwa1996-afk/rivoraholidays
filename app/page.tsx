import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Destinations from "../components/Destinations";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Stats from "../components/Stats";
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
      <About />
      <Contact />
<Footer />
<WhatsAppButton />
    </>
  );
}