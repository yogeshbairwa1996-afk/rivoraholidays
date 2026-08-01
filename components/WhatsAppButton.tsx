export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919828260533"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-4
        right-4
        md:bottom-6
        md:right-6
        z-50
        flex
        items-center
        gap-2
        rounded-full
        bg-green-500
        px-4
        py-3
        text-sm
        font-semibold
        text-white
        shadow-2xl
        transition-all
        duration-300
        hover:scale-105
        hover:bg-green-600
      "
    >
      <span className="text-lg">💬</span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}