import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Contact Us
          </p>


          <h2
            className="font-bold text-[#08172c] mt-2"
            style={{ fontSize: "var(--font-sectionTitle)" }}
          >
            We'd Love to See You
          </h2>


          <p
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
            style={{ fontSize: "var(--font-sectionDescription)" }}
          >
            Have questions or ready to schedule your next haircut? Give us a
            call, stop by the shop, or send us a message.
          </p>

        </div>


        <div className="grid lg:grid-cols-2 gap-12">


          <div className="space-y-6">


            {[
              {
                icon: <MapPin className="text-[#08172c]" />,
                title: "Address",
                text: (
                  <>
                    1 E. Carmel Drive
                    <br />
                    Carmel, IN
                  </>
                ),
              },
              {
                icon: <Phone className="text-[#08172c]" />,
                title: "Phone",
                text: "(317)-844-2277",
              },
              {
                icon: <Mail className="text-[#08172c]" />,
                title: "Email",
                text: "info@truebarbers.com",
              },
              {
                icon: <Clock className="text-[#08172c]" />,
                title: "Business Hours",
                text: (
                  <>
                    Monday - Friday: 10:00 AM - 7:00 PM
                    <br />
                    Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: Noon - 5:00 PM
                  </>
                ),
              },
            ].map((item) => (

              <div
                key={item.title}
                className="flex items-start gap-4 p-6 rounded-2xl shadow-lg"
              >

                <div className="bg-[#D4AF37] p-3 rounded-full">
                  {item.icon}
                </div>


                <div>

                  <h3
                    className="font-bold text-[#08172c]"
                    style={{ fontSize: "var(--font-serviceTitle)" }}
                  >
                    {item.title}
                  </h3>


                  <p
                    className="text-gray-600 mt-1"
                    style={{ fontSize: "var(--font-sectionDescription)" }}
                  >
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>



          <div className="bg-gray-50 rounded-3xl p-8 shadow-xl">

            <form className="space-y-5">

              {[
                {
                  label: "Full Name",
                  type: "text",
                  placeholder: "Your Name",
                },
                {
                  label: "Email",
                  type: "email",
                  placeholder: "you@example.com",
                },
                {
                  label: "Phone",
                  type: "tel",
                  placeholder: "(555)-555-5555",
                },
              ].map((field) => (

                <div key={field.label}>

                  <label
                    className="block font-semibold mb-2"
                    style={{ fontSize: "var(--font-button)" }}
                  >
                    {field.label}
                  </label>


                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />

                </div>

              ))}


              <div>

                <label
                  className="block font-semibold mb-2"
                  style={{ fontSize: "var(--font-button)" }}
                >
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
                style={{ fontSize: "var(--font-button)" }}
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