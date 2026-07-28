export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto mt-4 max-w-7xl rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <a
            href="#home"
            className="text-3xl font-extrabold tracking-wide text-white transition duration-300 hover:text-yellow-400"
          >
            Rivora{" "}
            <span className="text-yellow-400">
              Holidays
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-10 md:flex">
            <a
              href="#home"
              className="text-white transition duration-300 hover:text-yellow-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-white transition duration-300 hover:text-yellow-400"
            >
              About
            </a>

            <a
              href="#services"
              className="text-white transition duration-300 hover:text-yellow-400"
            >
              Services
            </a>

            <a
              href="#contact"
              className="text-white transition duration-300 hover:text-yellow-400"
            >
              Contact
            </a>

            <a
              href="#contact"
              className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              Plan Your Trip
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
