export default function Destinations() {
  const destinations = [
    {
      image: "/Dubai.jpg",
      title: "Dubai",
      subtitle: "Luxury • Shopping • Desert Safari",
    },
    {
      image: "/Thailand.jpg",
      title: "Thailand",
      subtitle: "Beaches • Nightlife • Islands",
    },
    {
      image: "/Bali.jpg",
      title: "Bali",
      subtitle: "Honeymoon • Nature • Temples",
    },
    {
      image: "/Kashmir.jpg",
      title: "India",
      subtitle: "Mountains • Beaches • Heritage",
    },
    {
      image: "/Maldives.jpg",
      title: "Maldives",
      subtitle: "Luxury Water Villas",
    },
    {
      image: "/Singapore.jpg",
      title: "Singapore",
      subtitle: "Family • Universal Studios",
    },
  ];

  return (
    <section
      id="destinations"
      className="rivora-section py-24 text-white"
    >
      <div className="rivora-content mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="font-semibold uppercase tracking-[0.30em] text-yellow-400">
            EXPLORE THE WORLD
          </span>

          <h2 className="mt-5 text-4xl font-extrabold lg:text-5xl">
            Popular <span className="text-yellow-400">Destinations</span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-yellow-400"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
            Discover handpicked destinations across the world with customized
            holiday packages designed for unforgettable travel experiences.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="glass-card group overflow-hidden rounded-3xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold transition group-hover:text-yellow-400">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-300">
                  {item.subtitle}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-block rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
                >
                  Explore Tours
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}