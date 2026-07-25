const reviews = [
  {
    name: "James R.",
    text: "Great service and a welcoming atmosphere."
  },
  {
    name: "Coco C.",
    text: "Best barber shop in Carmel Hands down .... Customer friendly and the barbers do a great job.",
  },
  {
    name: "David P.",
    text: "Professional barbers and excellent attention to detail."
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#08172c] text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Client Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white/10 p-8 rounded-2xl"
            >
              <p className="text-gray-300">
                "{review.text}"
              </p>

              <h3 className="mt-6 text-[#D4AF37] font-bold">
                {review.name}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}