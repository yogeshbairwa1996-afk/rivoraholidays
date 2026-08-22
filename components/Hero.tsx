export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-5xl">

          <span className="rounded-full border border-yellow-400 bg-yellow-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.30em] text-yellow-400">
            Premium Travel Agency
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-7xl">
            Premium Travel Agency
            <br />
            <span className="text-yellow-400">
              For Luxury Travel Experiences
            </span>
          </h1>

          <div className="mt-8 h-1 w-28 rounded-full bg-yellow-400" />

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-200">
            Discover handcrafted domestic and international holidays,
            luxury hotels, flights, honeymoon packages, cruises,
            group travel, corporate journeys and unforgettable experiences
            with Rivora Holidays.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            <span className="rounded-full border border-yellow-400/30 bg-white/10 px-5 py-2 text-white">
              ✈ Flights
            </span>

            <span className="rounded-full border border-yellow-400/30 bg-white/10 px-5 py-2 text-white">
              🏨 Hotels
            </span>

            <span className="rounded-full border border-yellow-400/30 bg-white/10 px-5 py-2 text-white">
              🌍 Holidays
            </span>

            <span className="rounded-full border border-yellow-400/30 bg-white/10 px-5 py-2 text-white">
              🛂 Visa
            </span>

            <span className="rounded-full border border-yellow-400/30 bg-white/10 px-5 py-2 text-white">
              💼 Corporate Travel
            </span>

            <span className="rounded-full border border-yellow-400/30 bg-white/10 px-5 py-2 text-white">
              💍 Destination Weddings
            </span>

          </div>

          <div className="mt-12 flex flex-wrap gap-5">

            <a
              href="#destinations"
              className="rounded-full bg-yellow-400 px-8 py-4 text-lg font-bold text-black transition hover:scale-105 hover:bg-yellow-300"
            >
              Explore Packages
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Plan Your Trip
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
