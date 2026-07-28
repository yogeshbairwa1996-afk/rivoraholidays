export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Rivora Holidays
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-bold">Domestic Tours</h3>
            <p className="mt-3 text-gray-600">
              Explore the best destinations across India.
            </p>
          </div>

          <div className="rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <div className="text-5xl mb-4">✈️</div>
            <h3 className="text-xl font-bold">International Tours</h3>
            <p className="mt-3 text-gray-600">
              Discover amazing destinations around the world.
            </p>
          </div>

          <div className="rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <div className="text-5xl mb-4">🏨</div>
            <h3 className="text-xl font-bold">Hotel Booking</h3>
            <p className="mt-3 text-gray-600">
              Luxury stays at the best prices.
            </p>
          </div>

          <div className="rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-xl font-bold">Premium Service</h3>
            <p className="mt-3 text-gray-600">
              24×7 support with personalized travel planning.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}