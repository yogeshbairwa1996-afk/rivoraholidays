export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">
            Rivora Holidays
          </h2>

          <p className="mt-4 text-gray-300">
            Holidays • Events • Weddings
          </p>

          <p className="mt-3 text-gray-400 text-sm">
            Your trusted travel partner for unforgettable journeys across India
            and around the world.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Destinations</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>

          <p className="text-gray-300">
            📞 +91 9828260533
          </p>

          <p className="text-gray-300 mt-2">
            📧 info@rivoraholidays.com
          </p>

          <p className="text-gray-300 mt-2">
            📍 Jaipur, Rajasthan, India
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © 2026 Rivora Holidays. All Rights Reserved.
      </div>
    </footer>
  );
}