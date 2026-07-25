import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold text-[#08172c] mt-2">
            We'd Love to See You
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions or ready to schedule your next haircut? Give us a
            call, stop by the shop, or send us a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-2xl shadow-lg">
              <div className="bg-[#D4AF37] p-3 rounded-full">
                <MapPin className="text-[#08172c]" />
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#08172c]">Address</h3>
                <p className="text-gray-600 mt-1">
                  1 E. Carmel Drive
                  <br />
                  Carmel, IN
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl shadow-lg">
              <div className="bg-[#D4AF37] p-3 rounded-full">
                <Phone className="text-[#08172c]" />
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#08172c]">Phone</h3>
                <p className="text-gray-600 mt-1">(317)-844-2277</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl shadow-lg">
              <div className="bg-[#D4AF37] p-3 rounded-full">
                <Mail className="text-[#08172c]" />
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#08172c]">Email</h3>
                <p className="text-gray-600 mt-1">info@truebarbers.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl shadow-lg">
              <div className="bg-[#D4AF37] p-3 rounded-full">
                <Clock className="text-[#08172c]" />
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#08172c]">
                  Business Hours
                </h3>

                <p className="text-gray-600 mt-1">
                  Monday - Friday: 10:00 AM - 7:00 PM
                  <br />
                  Saturday: 9:00 AM - 6:00 PM
                  <br />
                  Sunday: Noon - 5:00 PM
                </p> 
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 shadow-xl">
            <form className="space-y-5">
              <div>
                <label className="block font-semibold mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Phone
                </label>

                <input
                  type="tel"
                  placeholder="(555)-555-5555"
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-[#08172c] font-bold py-4 rounded-xl hover:bg-[#c59f28] transition"
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