export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      <div className="w-full h-full bg-black/50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">

          <p className="text-yellow-400 uppercase tracking-widest mb-3">
            Holidays • Events • Weddings
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Explore the World
            <br />
            with Rivora Holidays
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
            Discover unforgettable domestic and international travel
            experiences with personalized holiday packages, group tours,
            corporate travel, events, and destination weddings.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg transition"
            >
              Plan Your Trip
            </a>

            <a
              href="#services"
              className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg transition"
            >
              Our Services
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}