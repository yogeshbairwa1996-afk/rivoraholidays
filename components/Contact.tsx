export default function Contact() {
  return (
    <section
      id="contact"
      className="rivora-section py-24 text-white"
    >
      <div className="rivora-content mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="font-semibold uppercase tracking-[0.30em] text-yellow-400">
            CONTACT US
          </span>

          <h2 className="mt-5 text-4xl font-extrabold lg:text-5xl">
            Let's Plan Your
            <span className="text-yellow-400">
              {" "}Next Journey
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-yellow-400"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
            Whether you're planning a family holiday, honeymoon,
            destination wedding, corporate event or international
            tour, our travel experts are ready to help.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Contact Details */}

          <div className="glass-card rounded-3xl p-10">

            <h3 className="text-3xl font-bold">
              Get In Touch
            </h3>

            <div className="mt-10 space-y-8">

              <div>
                <h4 className="font-semibold text-yellow-400">
                  📍 Office
                </h4>

                <p className="mt-2 leading-8 text-gray-300">
                  349, Vaishno Vihar,
                  Block-B, Sanganer,
                  Jaipur, Rajasthan – 302029
                </p>

              </div>

              <div>
                <h4 className="font-semibold text-yellow-400">
                  📞 Phone
                </h4>

                <p className="mt-2 text-gray-300">
                  +91 9828260533
                </p>

              </div>

              <div>
                <h4 className="font-semibold text-yellow-400">
                  📧 Email
                </h4>

                <p className="mt-2 text-gray-300">
                  info@rivoraholidays.com
                </p>

              </div>

              <div>
                <h4 className="font-semibold text-yellow-400">
                  🌐 Website
                </h4>

                <p className="mt-2 text-gray-300">
                  www.rivoraholidays.com
                </p>

              </div>

            </div>

          </div>

          {/* Form */}

          <div className="glass-card rounded-3xl p-10">

            <h3 className="text-3xl font-bold">
              Send an Enquiry
            </h3>

            <form className="mt-8 space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-yellow-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-yellow-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-yellow-400"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your travel plan..."
                className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-yellow-400"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-yellow-400 py-4 font-bold text-black transition hover:bg-yellow-300"
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