export default function About({ about }) {
  const aboutData = about ?? {
    eyebrow: "Welcome to True Barbers",
    heading: "Enjoy the Authentic Barbershop Experience",
    description:
      "A barber skilled to cut men & boys hair, a quality haircut complete with shampoo, straight razor neck shave, soothing hot towel, and a refreshing beverage of your choice.",
    bulletPoints: [
      "Classic cuts for men and boys.",
      "Professional straight razor neck shaves and hot towels.",
      "Now offering professional shoeshine service.",
    ],
    highlight:
      "Ask us about our loyalty program — the only place in Carmel for a hot shave!",
    primaryCtaLabel: "Book Appointment",
    primaryCtaUrl: "https://truebarbers.clientrakskyline.com/scheduling/index.cfm",
    secondaryCtaLabel: "Contact Us",
    secondaryCtaUrl: "#contact",
    hours: {
      monFri: "10AM – 7PM",
      saturday: "9AM – 6PM",
      sunday: "Noon – 5PM",
    },
  };

  return (
    <section id="about" className="py-24 bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">

        <div>

          <p className="text-[#D4AF37] uppercase tracking-[4px] font-semibold mb-4">
            {aboutData.eyebrow}
          </p>

          <h2
            className="font-bold text-[#08172c] mb-6"
            style={{ fontSize: "var(--font-sectionTitle)" }}
          >
            {aboutData.heading}
          </h2>


          <p
            className="text-gray-600 leading-relaxed mb-8"
            style={{ fontSize: "var(--font-sectionDescription)" }}
          >
            {aboutData.description}
          </p>


          <div
            className="space-y-3 text-gray-700 mb-8"
            style={{ fontSize: "var(--font-sectionDescription)" }}
          >
            {aboutData.bulletPoints.map((point, index) => (
              <div key={index} className="flex gap-3 items-start">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>{point}</span>
              </div>
            ))}
          </div>


          <p
            className="text-[#08172c] font-semibold mb-4"
            style={{ fontSize: "var(--font-sectionDescription)" }}
          >
            {aboutData.highlight}
          </p>


          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href={aboutData.primaryCtaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-[#08172c] font-bold hover:bg-yellow-400 transition"
              style={{ fontSize: "var(--font-button)" }}
            >
              {aboutData.primaryCtaLabel}
            </a>


            <a
              href={aboutData.secondaryCtaUrl}
              className="inline-flex items-center justify-center rounded-full border border-[#08172c] px-8 py-4 text-[#08172c] hover:bg-[#08172c] hover:text-white transition"
              style={{ fontSize: "var(--font-button)" }}
            >
              {aboutData.secondaryCtaLabel}
            </a>

          </div>

        </div>


        <div className="rounded-3xl bg-[#08172c] text-white p-10 shadow-2xl">

          <h3
            className="font-bold mb-6"
            style={{ fontSize: "var(--font-serviceTitle)" }}
          >
            Shop Hours
          </h3>


          <div
            className="space-y-4"
            style={{ fontSize: "var(--font-sectionDescription)" }}
          >

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Mon – Fri</span>
              <span>{aboutData.hours.monFri}</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Saturday</span>
              <span>{aboutData.hours.saturday}</span>
            </div>

            <div className="flex justify-between pb-3">
              <span>Sunday</span>
              <span>{aboutData.hours.sunday}</span>
            </div>

          </div>


          <div className="mt-10 space-y-4">

            <a
              href="#services"
              className="block rounded-full bg-white px-6 py-4 text-center font-bold text-[#08172c] hover:bg-gray-100 transition"
              style={{ fontSize: "var(--font-button)" }}
            >
              See Services
            </a>


            <div className="grid grid-cols-2 gap-4">

              <a
                href="#contact"
                className="rounded-full border border-white px-4 py-3 text-center hover:bg-white/10 transition"
                style={{ fontSize: "var(--font-button)" }}
              >
                Gift Cards
              </a>


              <a
                href="/products"
                className="rounded-full border border-white px-4 py-3 text-center hover:bg-white/10 transition"
                style={{ fontSize: "var(--font-button)" }}
              >
                Shop Products
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}