import { ArrowRight } from "lucide-react";

export default function Hero({ hero }) {
  const heroData = hero ?? {
    preTitle: "Family Owned • Professional Service",
    title: "Experience Real Barbers",
    description:
      "Classic cuts, modern styles, hot towel shaves, beard trims, and a welcoming atmosphere for the entire family.",
    primaryCtaLabel: "Book Appointment",
    primaryCtaUrl: "https://truebarbers.clientrakskyline.com/scheduling/index.cfm",
    secondaryCtaLabel: "View Services",
    secondaryCtaUrl: "#services",
    cards: [
      {
        title: "Open 6 Days",
        description: "Flexible hours for your schedule.",
      },
      {
        title: "Convenient Location",
        description: "Easy to find with plenty of parking.",
      },
      {
        title: "20+",
        description: "Years Serving Our Community",
        highlight: true,
      },
    ],
  };

  const titleLines = heroData.title.split("\n");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('Images/banner1.png')",
        }}
      />

      <div className="absolute inset-0 bg-[#08172c]/75" />


      <div className="relative z-10 max-w-7xl px-6 text-center text-white">


        <p className="uppercase tracking-[6px] text-[#D4AF37] mb-4">
          {heroData.preTitle}
        </p>


        <h1 className="hero-title font-bold leading-tight">
          {titleLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h1>


        <p className="hero-description max-w-2xl mx-auto mt-8 text-gray-300">
          {heroData.description}
        </p>


        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

          <a
            href={heroData.primaryCtaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-text bg-[#D4AF37] text-[#08172c] px-8 py-4 rounded-full font-bold hover:scale-105 transition flex items-center justify-center gap-2"
          >
            {heroData.primaryCtaLabel}
            <ArrowRight size={20} />
          </a>


          <a
            href={heroData.secondaryCtaUrl}
            className="button-text border border-white px-8 py-4 rounded-full hover:bg-white hover:text-[#08172c] transition"
          >
            {heroData.secondaryCtaLabel}
          </a>

        </div>


        <div className="grid md:grid-cols-3 gap-6 mt-20">

          {heroData.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur rounded-xl p-6"
            >

              {card.title && (
                <h3
                  className={`font-bold ${
                    card.highlight
                      ? "text-3xl text-[#D4AF37]"
                      : ""
                  }`}
                >
                  {card.title}
                </h3>
              )}

              <p className="section-description text-gray-300">
                {card.description}
              </p>

            </div>
          ))}

        </div>


      </div>

    </section>
  );
}