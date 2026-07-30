type NavLinksProps = {
  mobile?: boolean;
  onClick?: () => void;
};

export default function NavLinks({
  mobile = false,
  onClick,
}: NavLinksProps) {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onClick}
          className={`transition hover:text-yellow-400 ${
            mobile
              ? "block py-3 text-lg text-white"
              : "text-white"
          }`}
        >
          {link.name}
        </a>
      ))}

      <a
        href="#contact"
        onClick={onClick}
        className={`rounded-full bg-yellow-400 font-semibold text-black transition hover:bg-yellow-300 ${
          mobile
            ? "mt-4 inline-block px-6 py-3"
            : "px-6 py-3"
        }`}
      >
        Plan Your Trip
      </a>
    </>
  );
}