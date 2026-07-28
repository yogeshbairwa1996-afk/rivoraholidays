export default function Contact() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          We'd love to help you plan your next journey.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">
              Get In Touch
            </h3>

            <p className="mb-4">
              📞 <strong>Phone:</strong> +91 9828260533
            </p>

            <p className="mb-4">
              💬 <strong>WhatsApp:</strong> +91 9828260533
            </p>

            <p className="mb-4">
              📧 <strong>Email:</strong> info@rivoraholidays.com
            </p>

            <p>
              📍 <strong>Location:</strong> Jaipur, Rajasthan, India
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">
              Send a Message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full border rounded-lg p-3"
              />

              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}