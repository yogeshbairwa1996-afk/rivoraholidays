"use client";

import Image from "next/image";
import { X } from "lucide-react";
import NavLinks from "./NavLinks";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/90 backdrop-blur-lg transition-all duration-300 ${
        isOpen
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
        <Image
          src="/logo.png"
          alt="Rivora Holidays"
          width={180}
          height={55}
          priority
          className="h-12 w-auto object-contain"
        />

        <button
          onClick={onClose}
          className="text-white hover:text-yellow-400 transition"
        >
          <X size={30} />
        </button>
      </div>

      <div className="flex flex-col gap-2 px-6 py-8">
        <NavLinks mobile onClick={onClose} />
      </div>
    </div>
  );
}