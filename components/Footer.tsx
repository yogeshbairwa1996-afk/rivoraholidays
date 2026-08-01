"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05070d] text-white">

      {/* Premium Dot Background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#facc15_1.2px,transparent_1.2px)] [background-size:22px_22px]"></div>

      {/* Golden Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 via-transparent to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>

            <h2 className="text-3xl font-bold text-yellow-400">
              Rivora Holidays
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Rivora Holidays is your trusted travel partner for Domestic &
              International Holidays, Flight Bookings, Hotels, Visa
              Assistance, Corporate Travel, Destination Weddings and
              MICE Services.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link href="#home" className="transition hover:text-yellow-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#about" className="transition hover:text-yellow-400">
                  About
                </Link>
              </li>

              <li>
                <Link href="#services" className="transition hover:text-yellow-400">
                  Services
                </Link>
              </li>

              <li>
                <Link href="#destinations" className="transition hover:text-yellow-400">
                  Destinations
                </Link>
              </li>

              <li>
                <Link href="#contact" className="transition hover:text-yellow-400">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Our Services
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Domestic Holidays</li>
              <li>International Tours</li>
              <li>Flight Bookings</li>
              <li>Hotel Reservations</li>
              <li>Visa Assistance</li>
              <li>Corporate Travel</li>
              <li>Destination Weddings</li>
              <li>MICE Events</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <MapPin
                  className="mt-1 text-yellow-400"
                  size={20}
                />

                <p className="leading-7 text-gray-400">
                  349, Vaishno Vihar, Block-B,<br />
                  Sanganer, Jaipur, Rajasthan
                </p>

              </div>

              <div className="flex items-center gap-4">

                <Phone
                  className="text-yellow-400"
                  size={20}
                />

                <span className="text-gray-400">
                  +91 9828260533
                </span>

              </div>

              <div className="flex items-center gap-4">

                <Mail
                  className="text-yellow-400"
                  size={20}
                />

                <span className="text-gray-400">
                  info@rivoraholidays.com
                </span>

              </div>

              <div className="flex items-center gap-4">

                <Globe
                  className="text-yellow-400"
                  size={20}
                />

                <span className="text-gray-400">
                  www.rivoraholidays.com
                </span>

              </div>

            </div>

            {/* Social Links */}

            <div className="mt-8 flex gap-6 text-sm text-gray-400">

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                Instagram
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                Facebook
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8 pb-8">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Rivora Holidays. Crafted with ❤️ in India.
            </p>

            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-full border border-yellow-400 px-6 py-3 text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
            >
              <ArrowUp size={18} />
              Back To Top
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}