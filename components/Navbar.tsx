"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">

        <nav className="w-full max-w-7xl rounded-2xl border border-yellow-400/15 bg-black/55 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]">

          <div className="flex h-16 items-center justify-between px-5 md:h-20 lg:px-8">

            {/* Logo */}

            <a
              href="#home"
              className="flex items-center"
            >

              <Image
                src="/logo.png"
                alt="Rivora Holidays"
                width={220}
                height={60}
                priority
                className="h-10 w-auto transition duration-300 hover:scale-105 md:h-12 lg:h-14"
              />

            </a>

            {/* Desktop Navigation */}

            <div className="hidden items-center gap-10 md:flex">

              <NavLinks />

            </div>

            {/* Mobile Button */}

            <button
              onClick={() => setIsOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-400 md:hidden"
              aria-label="Open Menu"
            >

              <Menu
                size={28}
                strokeWidth={2.3}
              />

            </button>

          </div>

        </nav>

      </header>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

    </>
  );
}