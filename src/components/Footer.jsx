import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYelp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#08172c] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              TRUE <span className="text-[#D4AF37]">BARBERS</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Family owned barbering with classic service and modern style.
              Quality cuts, hot towel shaves, and a welcoming atmosphere for
              everyone.
            </p>

            <div className="flex gap-3 mt-6">

              <a
                href="#"
                aria-label="Facebook"
                className="bg-white/10 p-3 rounded-full hover:bg-[#D4AF37] hover:text-[#08172c] transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="bg-white/10 p-3 rounded-full hover:bg-[#D4AF37] hover:text-[#08172c] transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Yelp"
                className="bg-white/10 p-3 rounded-full hover:bg-[#D4AF37] hover:text-[#08172c] transition"
              >
                <FaYelp size={18} />
              </a>

            </div>
          </div>


          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#home" className="hover:text-[#D4AF37] transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#barbers" className="hover:text-[#D4AF37] transition">
                  Barbers
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#booking" className="hover:text-[#D4AF37] transition">
                  Book Appointment
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>


          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Men's Haircuts</li>
              <li>Fades & Tapers</li>
              <li>Beard Trims</li>
              <li>Hot Towel Shaves</li>
              <li>Kids Cuts</li>
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3">
                <MapPin
                  className="text-[#D4AF37] flex-shrink-0"
                  size={20}
                />

                <p>
                  1 E. Carmel Drive
                  <br />
                  Carmel, IN
                </p>
              </div>


              <div className="flex gap-3 items-center">
                <Phone
                  className="text-[#D4AF37]"
                  size={20}
                />

                <p>
                  (317)-844-2277
                </p>
              </div>


              <div className="flex gap-3 items-center">
                <Mail
                  className="text-[#D4AF37]"
                  size={20}
                />

                <p>
                  info@truebarbers.com
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} True Barbers. All rights reserved.
          </p>


          <div className="flex flex-col md:flex-row items-center gap-3 text-sm text-gray-400">



            <p>
              Website designed & developed by{" "}
              <a
                href="https://fischersolutions.nx.kg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline transition"
              >
                Fischer Solutions
              </a>
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}