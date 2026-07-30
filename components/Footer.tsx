import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Rivora <span className="text-yellow-400">Holidays</span>
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              Your trusted travel partner for Domestic & International Tours,
              Flight Booking, Hotel Booking, Visa Assistance, Corporate Travel,
              MICE, Group Tours and Destination Weddings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#destinations">Destinations</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Flight Booking</li>
              <li>Hotel Booking</li>
              <li>International Tours</li>
              <li>Domestic Tours</li>
              <li>Visa Assistance</li>
              <li>Corporate Travel</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>
                <strong className="text-yellow-400">Phone:</strong><br />
                +91 9828260533
              </p>

              <p>
                <strong className="text-yellow-400">Email:</strong><br />
                info@rivoraholidays.com
              </p>

              <p>
                <strong className="text-yellow-400">Location:</strong><br />
                Jaipur, Rajasthan, India
              </p>

              <div className="pt-4 flex gap-3">

                <a
                  href="https://instagram.com/rivoraholidays"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-300 transition"
                >
                  Instagram
                </a>

                <a
                  href="https://www.facebook.com/share/19QsF7uoC3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-300 transition"
                >
                  Facebook
                </a>

              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Rivora Holidays. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}