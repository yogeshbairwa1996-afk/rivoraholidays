import {
  Plane,
  Hotel,
  Globe,
  Map,
  Users,
  Briefcase,
  BadgeCheck,
  Building2,
  CalendarDays,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Flight Booking",
    description: "Domestic & international flight bookings with the best available fares.",
    icon: Plane,
  },
  {
    title: "Hotel Booking",
    description: "Luxury, business and budget hotel reservations across the world.",
    icon: Hotel,
  },
  {
    title: "International Tours",
    description: "Explore the world's most beautiful destinations with curated tour packages.",
    icon: Globe,
  },
  {
    title: "Domestic Tours",
    description: "Discover incredible India through carefully planned holiday experiences.",
    icon: Map,
  },
  {
    title: "Group Tours",
    description: "Well-organized tours for families, friends, schools and corporate groups.",
    icon: Users,
  },
  {
    title: "FIT Packages",
    description: "Customized travel plans designed exclusively for individual travelers.",
    icon: Sparkles,
  },
  {
    title: "Visa Assistance",
    description: "Reliable documentation and visa support for international travel.",
    icon: BadgeCheck,
  },
  {
    title: "Corporate Travel",
    description: "Professional travel management for businesses and executives.",
    icon: Briefcase,
  },
  {
    title: "Events & Weddings",
    description: "Destination weddings, celebrations and memorable special events.",
    icon: CalendarDays,
  },
  {
    title: "MICE",
    description: "Meetings, Incentives, Conferences and Exhibitions with complete planning.",
    icon: Building2,
  },
  {
    title: "Customized Holiday Packages",
    description: "Tailor-made holidays created around your interests and travel style.",
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[4px] text-yellow-400">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Complete Travel Solutions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            From flight bookings to destination weddings, Rivora Holidays
            provides complete travel solutions with premium service and
            personalized experiences.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400/10 transition-all duration-300 group-hover:bg-yellow-400">
                  <Icon
                    size={32}
                    className="text-yellow-400 transition-all duration-300 group-hover:text-black"
                  />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="leading-7 text-gray-400">
                  {service.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}