export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[4px] text-yellow-400">
            Contact Us
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Let's Plan Your Next Journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Whether you're planning a family vacation, international tour,
            corporate travel or destination wedding, our team is ready to
            create the perfect journey for you.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Info */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">

            <h3 className="mb-8 text-3xl font-bold text-white">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
                  Phone
                </p>

                <p className="mt-2 text-xl text-white">
                  +91 9828260533
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
                  Email
                </p>

                <p className="mt-2 break-all text-xl text-white">
                  info@rivoraholidays.com
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
                  Office
                </p>

                <p className="mt-2 text-xl text-white">
                  Jaipur, Rajasthan, India
                </p>
              </div>

            </div>

            <a
              href="https://wa.me/919828260533"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              Chat on WhatsApp
            </a>

          </div>

          {/* Contact Form */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">

            <h3 className="mb-8 text-3xl font-bold text-white">
              Send an Enquiry
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-yellow-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-yellow-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-yellow-400"
              />

              <input
                type="text"
                placeholder="Destination"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-yellow-400"
              />

              <input
                type="date"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-yellow-400"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your travel plan..."
                className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-yellow-400"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-yellow-400 py-4 font-bold text-black transition-all duration-300 hover:bg-yellow-300"
              >
                Send Enquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}