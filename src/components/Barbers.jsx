const defaultBarbers = [
  {
    name: "Greg Lilly",
    title: "Master Barber",
    image: "/Images/Greg_Lily.png",
    bio:
      "Greg has been cutting hair since 1995 and excels at bald fades, high & tight styles, and AFRO textures. He brings master-level technique and straight razor precision to every appointment.",
  },
  {
    name: "Carlton Campbell",
    title: "Barber",
    image: "/Images/Carlton_Campbell.png",
    bio:
      "Carlton’s goal is simple: satisfaction and smiles. He specializes in fades, tapers, scissor work, and a friendly, calm experience for kids and adults alike.",
  },
  {
    name: "Tara Fowler",
    title: "Barbertologist",
    image: "/Images/Tara_Fowler.png",
    bio:
      "Tara delivers polished cuts, facial treatments, and expertly crafted styles across all hair textures. She is patient, professional, and ready to help clients feel refreshed.",
  },
  {
    name: "Emad Geris",
    title: "Senior Barber",
    image: "/Images/Emad_Geris.png",
    bio:
      "Emad has over 25 years of barbering experience and provides sharp line-ups, razor cuts, and a calm first-visit experience for young clients and families.",
  },
  {
    name: "Marvin Reese",
    title: "Barber",
    image: "/Images/Marvin_Reese.png",
    bio:
      "Magic Marvin brings strong style skills for pompadours, fades, and contemporary looks. He is great with kids and enjoys making every guest feel confident.",
  },
  {
    name: "Asia Robinson",
    title: "Barber",
    image: "/Images/Asia_Robinson.png",
    bio:
      "Asia is passionate about delivering the haircut clients want across all textures, from buzz cuts to fades, beard trims, and first-time barbershop experiences.",
  },
];

export default function Barbers({ barbers = defaultBarbers }) {
  return (
    <section
      id="barbers"
      className="py-24 bg-[#08172c] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-[#D4AF37] uppercase tracking-[4px] font-semibold">
            Our Barbers
          </p>

          <h2 className="section-title font-bold mt-3">
            Professional Barbers
          </h2>

          <p className="section-description text-gray-300 mt-6 max-w-2xl mx-auto">
            Every member of our team is trained in modern barbering, classic techniques, and the details that make the True Barbers experience feel premium.
          </p>

        </div>


        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {barbers.map((barber) => (

            <div
              key={barber.name}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-lg transition hover:-translate-y-1 hover:border-[#D4AF37]"
            >

              <img
                src={barber.image}
                alt={barber.name}
                className="h-96 w-full object-cover"
              />


              <div className="p-8">

                <h3 className="barber-name font-semibold text-white">
                  {barber.name}
                </h3>


                <p className="barber-role mt-2 text-[#D4AF37] font-medium">
                  {barber.title}
                </p>


                <p className="barber-bio mt-5 text-gray-300 leading-relaxed">
                  {barber.bio}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}