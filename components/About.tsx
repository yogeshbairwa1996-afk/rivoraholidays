export default function About() {
  return (
    <section
      id="about"
      className="bg-black py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <p className="font-semibold uppercase tracking-[4px] text-yellow-400">
              About Us
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Your Trusted Travel Partner
            </h2>

            <p className="mt-8 leading-8 text-gray-400">
              Rivora Holidays is a professional travel company based in Jaipur,
              Rajasthan, dedicated to creating memorable travel experiences
              across India and around the world.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              We specialize in Domestic & International Tours, Flight Booking,
              Hotel Reservations, Visa Assistance, Corporate Travel, Group
              Tours, FIT Packages, MICE, Events and Destination Weddings.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              Our focus is simple — personalized service, transparent pricing,
              reliable support and unforgettable journeys for every traveler.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-block rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              Plan Your Journey
            </a>

          </div>

          {/* Right Side */}
          <div className="rounded-3xl border border-yellow-400/20 bg-white/5 p-10 backdrop-blur-sm">

            <h3 className="text-3xl font-bold text-white">
              Why Rivora Holidays?
            </h3>

            <div className="mt-8 space-y-6">

              <div className="flex items-start gap-4">
                <span className="text-2xl text-yellow-400">✓</span>
                <p className="text-gray-300">
                  Trusted Travel Experts with personalized planning.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl text-yellow-400">✓</span>
                <p className="text-gray-300">
                  Best Price Guarantee without compromising quality.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl text-yellow-400">✓</span>
                <p className="text-gray-300">
                  24×7 Customer Support before, during and after your trip.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl text-yellow-400">✓</span>
                <p className="text-gray-300">
                  Domestic & International holiday experiences tailored for you.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}