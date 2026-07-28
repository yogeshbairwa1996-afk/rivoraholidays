export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-white text-3xl font-bold hover:text-yellow-400 transition"
        >
          Rivora Holidays
        </a>

        <div className="hidden md:flex gap-8 text-white font-medium">
          <a href="#home" className="hover:text-yellow-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>

          <a href="#services" className="hover:text-yellow-400 transition">
            Services
          </a>

          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}