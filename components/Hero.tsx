export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/35"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <p className="mb-5 text-yellow-400 uppercase tracking-[6px] font-semibold">
            Holidays • Events • Weddings
          </p>

          <h1 className="text-white font-extrabold leading-tight text-5xl md:text-7xl lg:text-8xl max-w-5xl">
            Discover The
            <span className="block text-yellow-400">
              World With Luxury
            </span>

            <span className="block">
              Rivora Holidays
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-300 leading-9">
            Experience unforgettable domestic and international journeys,
            customized holiday packages, corporate travel, group tours,
            destination weddings, luxury stays and seamless travel planning
            designed exclusively for you.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#contact"
              className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              Plan Your Trip →
            </a>

            <a
              href="#services"
              className="rounded-full border border-white px-8 py-4 text-white transition duration-300 hover:bg-white hover:text-black"
            >
              Explore Services
            </a>

          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">

            <div>
              <h2 className="text-4xl font-bold text-yellow-400">1000+</h2>
              <p className="text-gray-300 mt-2">
                Happy Travelers
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-yellow-400">50+</h2>
              <p className="text-gray-300 mt-2">
                Destinations
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-yellow-400">24/7</h2>
              <p className="text-gray-300 mt-2">
                Customer Support
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-yellow-400">100%</h2>
              <p className="text-gray-300 mt-2">
                Personalized Trips
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}