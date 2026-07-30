import {
  ShieldCheck,
  BadgeDollarSign,
  Headset,
  HeartHandshake,
} from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: <ShieldCheck size={42} className="text-yellow-400" />,
      title: "Trusted Travel Experts",
      description:
        "Experienced professionals creating seamless and memorable journeys for every traveler.",
    },
    {
      icon: <BadgeDollarSign size={42} className="text-yellow-400" />,
      title: "Best Price Guarantee",
      description:
        "Competitive pricing with the best value on every booking without compromising quality.",
    },
    {
      icon: <Headset size={42} className="text-yellow-400" />,
      title: "24×7 Customer Support",
      description:
        "Our travel experts are always available before, during and after your journey.",
    },
    {
      icon: <HeartHandshake size={42} className="text-yellow-400" />,
      title: "100% Customer Satisfaction",
      description:
        "We are committed to delivering unforgettable travel experiences with complete peace of mind.",
    },
  ];

  return (
    <section
      id="why-choose"
      className="bg-black py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <p className="text-center font-semibold uppercase tracking-[4px] text-yellow-400">
          Why Choose Us
        </p>

        <h2 className="mt-3 text-center text-4xl font-bold text-white md:text-5xl">
          Why Choose Rivora Holidays
        </h2>

        <p className="mx-auto mt-5 mb-14 max-w-2xl text-center text-gray-400">
          We don't just plan trips — we create unforgettable travel experiences
          with trust, transparency and personalized service.
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              <div className="mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}