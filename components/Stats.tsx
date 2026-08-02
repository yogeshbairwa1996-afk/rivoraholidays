export default function Stats() {
  const stats = [
    {
      number: "7,500+",
      label: "Happy Travellers",
    },
    {
      number: "120+",
      label: "Destinations",
    },
    {
      number: "24×7",
      label: "Customer Support",
    },
    {
      number: "100%",
      label: "Personalized Service",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0b0b] py-24"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(#facc15_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[4px] text-yellow-400">
              About Rivora Holidays
            </span>

            <h2 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
              Creating{" "}
              <span className="text-yellow-400">
                Memorable Travel Experiences
              </span>
            </h2>

            <div className="mt-6 h-1 w-32 rounded-full bg-yellow-400"></div>

            <p className="mt-8 text-xl leading-10 text-gray-300">
              Rivora Holidays is a premium travel company offering Domestic &
              International Holiday Packages, Flight Bookings, Hotel
              Reservations, Visa Assistance, Corporate Travel, Destination
              Weddings and MICE Services.
            </p>

            <p className="mt-8 text-lg leading-9 text-gray-400">
              We believe every journey should be stress-free, memorable and
              perfectly planned. Our dedicated team ensures personalized
              service, transparent pricing and unforgettable travel
              experiences for every client.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#171717] p-6 md:p-10 text-center transition duration-300 hover:border-yellow-400 hover:-translate-y-2 min-h-[180px]"
              >
                <h3 className="whitespace-nowrap text-4xl font-extrabold leading-none text-yellow-400 md:text-6xl">
                  {item.number}
                </h3>

                <p className="mt-5 text-lg text-gray-300 md:text-2xl">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}