export default function Loyalty() {
  const plans = [
    {
      title: "Loyalty Plan",
      description: "2 quality haircuts per month",
      price: "$66 / Month",
      details: [
        "Perfect for men who get their haircut regularly.",
        "Saves money while keeping you groomed and polished.",
      ],
    },
    {
      title: "True Premier Plan",
      description: "2 haircuts & a shave per month",
      price: "$131 / Month",
      details: [
        "Includes a straight razor shave with every visit.",
        "Designed for guests who prefer frequent barbering services.",
      ],
    },
    {
      title: "Father / Son Plan",
      description: "2 haircuts each per month",
      price: "$123 / Month",
      details: [
        "A great option for fathers and sons who visit together.",
        "Build the bonding tradition of a barbershop visit.",
      ],
    },
  ];

  return (
    <section id="loyalty" className="py-24 bg-[#f8f7f4] text-[#08172c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] uppercase tracking-[4px] font-semibold">
            Loyalty Program
          </p>
          <h2 className="text-5xl font-bold mt-3">Our Loyalty Subscription Program</h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Save on regular barbering services with membership plans designed for busy men, father-son duos, and guests who want premium care every visit.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.title} className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-semibold">{plan.title}</h3>
              <p className="mt-3 text-[#D4AF37] font-bold text-xl">{plan.price}</p>
              <p className="mt-4 text-gray-600">{plan.description}</p>
              <ul className="mt-5 space-y-3 text-gray-600">
                {plan.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="text-[#D4AF37]">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-yellow-400/20 bg-[#08172c] p-10 text-white shadow-2xl">
          <h3 className="text-3xl font-bold">Take-5 Discount Package Plan</h3>
          <p className="mt-4 text-gray-200 max-w-2xl">
            For guests who don’t get their haircut regularly but want to save money, our Take Five package includes discounted bundles for haircuts, shaves, and beard trims.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white/10 p-6">
              <p className="font-semibold">5 Haircut Package</p>
              <p className="mt-3 text-xl font-bold">$170.00</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6">
              <p className="font-semibold">5 Shave Package</p>
              <p className="mt-3 text-xl font-bold">$158.00</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6">
              <p className="font-semibold">5 Haircuts & Deluxe Beard Trims</p>
              <p className="mt-3 text-xl font-bold">$284.00</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6">
              <p className="font-semibold">5 Haircuts for Boys (Under 12)</p>
              <p className="mt-3 text-xl font-bold">$135.00</p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-white/10 p-6">
            <h4 className="text-2xl font-semibold">Wedding Party Big Day</h4>
            <p className="mt-3 text-gray-200">Haircut & shaves for groomsmen: $75 each. Bring a party of 4+ and the groom's haircut is free.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
