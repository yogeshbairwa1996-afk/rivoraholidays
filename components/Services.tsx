export default function Services() {
  const services = [
    {
      icon: "✈️",
      title: "Flight Booking",
      desc: "Domestic & international flight bookings at the best fares.",
    },
    {
      icon: "🏨",
      title: "Hotel Booking",
      desc: "Comfortable stays from budget to luxury hotels.",
    },
    {
      icon: "🌍",
      title: "International Tours",
      desc: "Explore the world's most loved destinations.",
    },
    {
      icon: "🇮🇳",
      title: "Domestic Tours",
      desc: "Discover India's incredible travel experiences.",
    },
    {
      icon: "👥",
      title: "Group Tours",
      desc: "Well-planned group trips for families and organizations.",
    },
    {
      icon: "🧳",
      title: "FIT Packages",
      desc: "Fully customized travel for individual travelers.",
    },
    {
      icon: "🛂",
      title: "Visa Assistance",
      desc: "Reliable visa guidance for international travel.",
    },
    {
      icon: "👨‍💼",
      title: "Corporate Travel",
      desc: "Professional business travel management solutions.",
    },
    {
      icon: "🎉",
      title: "Events & Weddings",
      desc: "Destination weddings and memorable event planning.",
    },
    {
      icon: "🏢",
      title: "MICE",
      desc: "Meetings, Incentives, Conferences & Exhibitions.",
    },
    {
      icon: "🎯",
      title: "Customized Holiday Packages",
      desc: "Tailor-made holidays designed around your preferences.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Everything you need for a seamless travel experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 hover:shadow-xl hover:border-yellow-500 transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>

              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}