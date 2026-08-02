export default function WhyChoose() {
  const features = [
    {
      icon: "⭐",
      title: "100% Customer Satisfaction",
      description:
        "Delivering exceptional travel experiences with complete customer satisfaction at every step.",
    },
    {
      icon: "💰",
      title: "Best Price Guarantee",
      description:
        "Competitive pricing with transparent quotations and no hidden charges.",
    },
    {
      icon: "✈️",
      title: "End-to-End Travel Solutions",
      description:
        "From flights and hotels to visas and transfers, everything is managed under one roof.",
    },
    {
      icon: "🤝",
      title: "Trusted Travel Experts",
      description:
        "Professional travel consultants committed to making every journey smooth and memorable.",
    },
    {
      icon: "🌍",
      title: "Worldwide Destinations",
      description:
        "Explore handpicked destinations across India and around the world.",
    },
    {
      icon: "🔒",
      title: "Secure Payments",
      description:
        "Safe, secure and reliable payment options for complete peace of mind.",
    },
  ];

  return (
    <section
      id="why-us"
      className="rivora-section py-24 text-white"
    >
      <div className="rivora-content mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-semibold uppercase tracking-[0.30em] text-yellow-400">
            WHY RIVORA HOLIDAYS
          </span>

          <h2 className="mt-5 text-4xl font-extrabold lg:text-5xl">
            Why Choose{" "}
            <span className="text-yellow-400">
              Rivora Holidays?
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-yellow-400"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
            We combine premium service, expert planning and personalized travel
            solutions to create unforgettable journeys across the world.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => (

            <div
              key={index}
              className="glass-card group rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400"
            >

              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-400/10 text-5xl transition duration-300 group-hover:scale-110 group-hover:bg-yellow-400/20">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold transition group-hover:text-yellow-400">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}