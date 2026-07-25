const images = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1512690459411-b0fd1c86b8b8?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-[#D4AF37]">
            Gallery
          </p>

          <h2 className="text-5xl font-bold text-[#08172c] mt-2">
            Our Work
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg group"
            >
              <img
                src={image}
                alt="Barbershop"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}