export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24 md:pt-16"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundPosition: "center center",
        }}
      />

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.18),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Your Perfect Partner
              <br />
              <span className="text-yellow-400">
                for Travel, Events & Weddings
              </span>
            </h1>

            <p className="mt-6 text-base leading-8 text-gray-200 md:text-lg">
              Your one-stop destination for Flights, Hotels, Holidays, Visa
              Assistance, Corporate Travel, MICE and Destination Weddings —
              delivered with professionalism, reliability and personalized
              service.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-300 md:text-base">
              Domestic & International Tour Packages • Flight Bookings • Hotel &
              Accommodation • Visa Assistance • Corporate Travel • MICE •
              Destination Weddings • Group Bookings • FIT Packages
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#packages"
                className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition hover:bg-yellow-300"
              >
                Explore Packages
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Plan Your Trip
              </a>
            </div>

            <div className="mt-12 grid gap-4 text-sm text-white md:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                🌍 Domestic & International Tours
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                ✈ Flights • Hotels • Visa Assistance
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                💍 Destination Weddings • Events • MICE
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}