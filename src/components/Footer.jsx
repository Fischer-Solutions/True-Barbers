import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYelp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#08172c] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">


          <div>

            <h2
              className="font-bold"
              style={{ fontSize: "var(--font-logo)" }}
            >
              TRUE <span className="text-[#D4AF37]">BARBERS</span>
            </h2>


            <p
              className="text-gray-400 mt-4 leading-relaxed"
              style={{ fontSize: "var(--font-sectionDescription)" }}
            >
              Family owned barbering with classic service and modern style.
              Quality cuts, hot towel shaves, and a welcoming atmosphere for
              everyone.
            </p>


            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-[#D4AF37] hover:text-[#08172c] transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-[#D4AF37] hover:text-[#08172c] transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-[#D4AF37] hover:text-[#08172c] transition"
              >
                <FaYelp size={18} />
              </a>

            </div>

          </div>



          {[
            {
              title: "Quick Links",
              items: [
                "Home",
                "Services",
                "Barbers",
                "Gallery",
                "Book Appointment",
                "Contact",
              ],
            },
            {
              title: "Services",
              items: [
                "Men's Haircuts",
                "Fades & Tapers",
                "Beard Trims",
                "Hot Towel Shaves",
                "Kids Cuts",
              ],
            },
          ].map((section) => (

            <div key={section.title}>

              <h3
                className="font-bold mb-5"
                style={{ fontSize: "var(--font-serviceTitle)" }}
              >
                {section.title}
              </h3>


              <ul
                className="space-y-3 text-gray-400"
                style={{ fontSize: "var(--font-sectionDescription)" }}
              >

                {section.items.map((item) => (

                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#D4AF37] transition"
                    >
                      {item}
                    </a>
                  </li>

                ))}

              </ul>

            </div>

          ))}



          <div>

            <h3
              className="font-bold mb-5"
              style={{ fontSize: "var(--font-serviceTitle)" }}
            >
              Contact
            </h3>


            <div
              className="space-y-4 text-gray-400"
              style={{ fontSize: "var(--font-sectionDescription)" }}
            >

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



      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">


          <p
            className="text-gray-400"
            style={{ fontSize: "var(--font-button)" }}
          >
            © {new Date().getFullYear()} True Barbers. All rights reserved.
          </p>


          <p
            className="text-gray-400"
            style={{ fontSize: "var(--font-button)" }}
          >
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


    </footer>
  );
}