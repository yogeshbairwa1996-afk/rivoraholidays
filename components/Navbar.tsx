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
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-4">
        <nav className="w-full max-w-7xl rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl shadow-2xl">
          <div className="flex h-20 items-center justify-between px-6 lg:px-8">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Rivora Holidays"
                width={220}
                height={60}
                priority
                className="h-12 w-auto lg:h-14"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden items-center gap-10 md:flex">
              <NavLinks />
            </div>

            {/* Mobile */}
            <button
              onClick={() => setIsOpen(true)}
              className="text-white md:hidden"
              aria-label="Open Menu"
            >
              <Menu size={28} />
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