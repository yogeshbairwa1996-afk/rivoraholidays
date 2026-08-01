export default function About() {
  return (
    <section
      id="about"
      className="rivora-section py-24 text-white"
    >
      <div className="rivora-content mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
              About Rivora Holidays
            </span>

            <h2 className="mt-8 text-4xl font-extrabold leading-tight lg:text-5xl">
              Creating
              <span className="text-yellow-400">
                {" "}Memorable Travel Experiences
              </span>
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-yellow-400"></div>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              Rivora Holidays is a premium travel company offering
              Domestic & International Holiday Packages,
              Flight Bookings, Hotel Reservations,
              Visa Assistance, Corporate Travel,
              Destination Weddings and MICE Services.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-400">
              We believe every journey should be stress-free,
              memorable and perfectly planned.
              Our dedicated team ensures personalized service,
              transparent pricing and unforgettable travel
              experiences for every client.
            </p>

          </div>

          {/* Right */}

          <div>

            <div className="grid gap-6 sm:grid-cols-2">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                <h3 className="text-5xl font-extrabold text-yellow-400">
                  100+
                </h3>

                <p className="mt-4 text-lg text-gray-300">
                  Happy Travellers
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                <h3 className="text-5xl font-extrabold text-yellow-400">
                  25+
                </h3>

                <p className="mt-4 text-lg text-gray-300">
                  Destinations
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                <h3 className="text-5xl font-extrabold text-yellow-400">
                  24×7
                </h3>

                <p className="mt-4 text-lg text-gray-300">
                  Customer Support
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                <h3 className="text-5xl font-extrabold text-yellow-400">
                  100%
                </h3>

                <p className="mt-4 text-lg text-gray-300">
                  Personalized Service
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}