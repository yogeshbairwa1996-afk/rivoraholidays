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

      <main>
        <Hero />

        {/* SEO Content */}
        <section
          aria-labelledby="travel-agency-jaipur"
          className="bg-[#05070d] px-6 py-20 text-white"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="travel-agency-jaipur"
              className="text-3xl font-bold md:text-4xl"
            >
              Travel Agency in Jaipur for Domestic & International Holidays
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-gray-300 md:text-lg">
              <p>
                Rivora Holidays is a premium travel agency in Jaipur offering
                personalised domestic and international tour packages,
                holiday planning and complete travel solutions for individuals,
                couples, families, groups and corporate travellers.
              </p>

              <p>
                From flights and hotel reservations to visa assistance,
                honeymoon holidays, group travel, corporate travel, MICE and
                destination weddings, our team helps you plan your journey
                from start to finish. We create customised travel experiences
                based on your destination, budget, travel dates and
                requirements.
              </p>

              <p>
                Looking for a reliable tour operator in Jaipur? Rivora
                Holidays provides carefully planned holidays across India and
                international destinations including Dubai, Thailand, Bali,
                Singapore, Maldives and Vietnam, along with customised
                itineraries for other destinations worldwide.
              </p>
            </div>
          </div>
        </section>

        <Stats />

        <WhyChoose />

        <Destinations />

        <Services />

        {/* Additional SEO Content */}
        <section
          aria-labelledby="holiday-services"
          className="bg-[#080b12] px-6 py-16 text-white"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="holiday-services"
              className="text-3xl font-bold md:text-4xl"
            >
              Complete Travel Services by Rivora Holidays
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-yellow-400">
                  Domestic Tour Packages
                </h3>
                <p className="mt-2 leading-7 text-gray-300">
                  Explore India with customised domestic holiday packages,
                  family holidays, couple trips, group tours and weekend
                  getaways.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400">
                  International Tour Packages
                </h3>
                <p className="mt-2 leading-7 text-gray-300">
                  Plan international holidays with customised packages,
                  flights, hotels, transfers and sightseeing for destinations
                  around the world.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400">
                  Flights, Hotels & Visa Assistance
                </h3>
                <p className="mt-2 leading-7 text-gray-300">
                  Get assistance with flight bookings, hotel reservations and
                  visa requirements for domestic and international travel.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400">
                  Corporate Travel, MICE & Weddings
                </h3>
                <p className="mt-2 leading-7 text-gray-300">
                  From corporate travel and group bookings to MICE events and
                  destination weddings, Rivora Holidays manages travel
                  requirements with personalised planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}
