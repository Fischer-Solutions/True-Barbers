import { Scissors, Sparkles, UserRound, Brush, Star } from "lucide-react";

const services = [
  {
    icon: <Scissors size={40} />,
    title: "Haircuts",
    text: "Classic cuts, fades, tapers, and modern styles for all ages."
  },
  {
    icon: <UserRound size={40} />,
    title: "Beard Trims",
    text: "Professional shaping and detailing to keep your beard sharp."
  },
  {
    icon: <Brush size={40} />,
    title: "Hot Towel Shaves",
    text: "Traditional straight razor service with hot towels and a smooth finish."
  },
  {
    icon: <Sparkles size={40} />,
    title: "Kids Cuts",
    text: "Comfortable and friendly haircuts for younger clients."
  },
  {
    icon: <Star size={40} />,
    title: "Shoeshine Service",
    text: "Professional shoeshine service to finish your look with polish."
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="section-title font-bold text-center text-[#08172c]">
          Our Services
        </h2>

        <p className="section-description text-center text-gray-500 mt-4 mb-16">
          Quality barbering with attention to every detail.
        </p>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="border rounded-2xl p-8 hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >

              <div className="text-[#D4AF37] mb-5">
                {service.icon}
              </div>


              <h3 className="service-title font-bold mb-3">
                {service.title}
              </h3>


              <p className="service-description text-gray-600">
                {service.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}