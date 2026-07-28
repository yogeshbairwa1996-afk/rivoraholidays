export default function Destinations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Popular Destinations
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Explore our most loved travel destinations.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Bali"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Bali</h3>
              <p className="text-gray-600 mt-2">
                Beaches, temples and unforgettable sunsets.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
              alt="Dubai"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Dubai</h3>
              <p className="text-gray-600 mt-2">
                Luxury shopping, skyscrapers and desert adventures.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada"
              alt="Thailand"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Thailand</h3>
              <p className="text-gray-600 mt-2">
                Crystal-clear beaches and vibrant nightlife.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}