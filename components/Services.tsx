export default function Services() {
  const services = [
    {
      icon: "✈️",
      title: "Flight Bookings",
      description:
        "Best domestic and international flight deals with hassle-free booking.",
    },
    {
      icon: "🏨",
      title: "Hotel Reservations",
      description:
        "Luxury, business and budget hotels across India & Worldwide.",
    },
    {
      icon: "🌍",
      title: "Holiday Packages",
      description:
        "Customized domestic and international tour packages for every traveler.",
    },
    {
      icon: "🛂",
      title: "Visa Assistance",
      description:
        "Fast and reliable visa guidance for multiple international destinations.",
    },
    {
      icon: "🏢",
      title: "Corporate Travel",
      description:
        "Business travel, conferences, MICE and incentive tours.",
    },
    {
      icon: "💍",
      title: "Destination Weddings",
      description:
        "Luxury destination weddings with complete planning & management.",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Group Tours",
      description:
        "Family, friends, school, corporate and customized group departures.",
    },
    {
      icon: "🎯",
      title: "FIT Packages",
      description:
        "Personalized holiday itineraries designed exactly to your travel style.",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0b0b0b] py-24 text-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(#facc15_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[4px] text-yellow-400">
            Our Premium Services
          </span>

          <h2 className="mt-8 text-5xl font-extrabold lg:text-6xl">
            Everything You Need
            <span className="text-yellow-400"> For Your Journey</span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-yellow-400"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
            Rivora Holidays provides complete travel solutions including Flights,
            Hotels, Holiday Packages, Corporate Travel, Visa Assistance,
            Destination Weddings and customized travel experiences worldwide.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-3xl border border-white/10 bg-[#171717] p-8 transition-all duration-300 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(250,204,21,0.20)]"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-400/10 text-5xl transition group-hover:scale-110 group-hover:bg-yellow-400/20">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold group-hover:text-yellow-400">
                {service.title}
              </h3>

              <p className="mt-5 flex-grow leading-8 text-gray-300">
                {service.description}
              </p>

              <button className="mt-8 rounded-full border border-yellow-400 px-6 py-3 font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}