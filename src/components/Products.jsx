export default function Products() {
  return (
    <section className="min-h-screen bg-white text-[#08172c]">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center gap-8 text-center">
          <img
            src="https://www.truebarbers.com/wp-content/uploads/2019/10/barberlogo.jpg"
            alt="True Barbers Logo"
            className="mx-auto max-h-32"
          />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
              True Barbers Products
            </p>
            <h1 className="mt-4 text-5xl font-bold">True Barbers Products</h1>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p>1 E. Carmel Drive — Carmel, IN</p>
            <p>317-844-2277</p>
            <p>
              <a href="mailto:info@truebarbers.com" className="text-[#08172c] underline">
                info@truebarbers.com
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.facebook.com/truebarberscarmel" target="_blank" rel="noreferrer">
              <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/facebook.png" alt="Facebook" className="h-10" />
            </a>
            <a href="https://www.instagram.com/truebarbers/" target="_blank" rel="noreferrer">
              <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/instagram.png" alt="Instagram" className="h-10" />
            </a>
            <a href="https://twitter.com/True_Barbers" target="_blank" rel="noreferrer">
              <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/twitter.png" alt="Twitter" className="h-10" />
            </a>
            <a href="https://www.google.com/maps/place/True+Barbers/@39.96121,-86.1287697,17z/data=!3m1!4b1!4m5!3m4!1s0x8814ada8e1a144b5:0x309866bcc6e917a4!8m2!3d39.96121!4d-86.126581" target="_blank" rel="noreferrer">
              <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/gplus.png" alt="Map Location" className="h-10" />
            </a>
            <a href="https://www.yelp.com/biz/true-barbers-carmel" target="_blank" rel="noreferrer">
              <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/yelp.png" alt="Yelp" className="h-10" />
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-8">
            <img
              src="https://www.truebarbers.com/wp-content/uploads/2019/10/banner1.jpg"
              alt="True Barbers Banner"
              className="w-full rounded-3xl object-cover shadow-xl"
            />

            <div className="max-w-none text-left text-gray-700">
              <p className="mb-6">
                True Barbers carries a full line of men’s products, including premium shaving and styling brands.
              </p>

              <div className="flex flex-wrap items-center gap-6 py-6">
                <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/gage_logo_new.jpg" alt="Gage Logo" className="h-20" />
                <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/logoS.jpg" alt="Logo" className="h-20" />
              </div>

              <div className="space-y-10">
                <section>
                  <h2 className="text-3xl font-semibold mb-4">Shaving essentials</h2>
                  <p className="mb-4">
                    Pre-Shave Oil is the first step in The Art of Shaving. It softens the beard and protects the skin for a close and comfortable shave without leaving an oily residue.
                  </p>
                  <p className="mb-4">
                    The Art of Shaving Shaving Cream softens and lifts the beard for a close and comfortable shave, and protects the skin from irritation and razor burn.
                  </p>
                  <p>
                    The Art of Shaving crafts each Shaving Brush using only the finest badger hair available.
                  </p>
                </section>

                <div className="grid gap-6 sm:grid-cols-2">
                  <article className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                    <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/carryonperfect.jpg" alt="Carry-On Kit" className="mb-4 w-full rounded-2xl object-cover" />
                    <h3 className="text-xl font-semibold mb-2">Carry-On Kit</h3>
                    <p className="text-gray-700">
                      Contains the essentials for a close and comfortable shave on the go. Designed with a zip top pouch for secure transport and TSA-friendly packing.
                    </p>
                  </article>

                  <article className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                    <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/Gage_Shampoo_8oz.jpg" alt="Gage Daily Shampoo" className="mb-4 w-full rounded-2xl object-cover" />
                    <h3 className="text-xl font-semibold mb-2">GAGE Daily Shampoo</h3>
                    <p className="text-gray-700">
                      A hair and scalp cleanser that leaves your hair feeling fresh and clean. Ideal for everyday use.
                    </p>
                  </article>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <article className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                    <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/Conditioner_8oz.gif" alt="Gage Daily Conditioner" className="mb-4 w-full rounded-2xl object-cover" />
                    <h3 className="text-xl font-semibold mb-2">GAGE Daily Conditioner</h3>
                    <p className="text-gray-700">
                      A minty conditioner that energizes the hair and scalp. Ideal for everyday use.
                    </p>
                  </article>

                  <article className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                    <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/shaping-gel-small.jpg" alt="GAGE Shaping Gel" className="mb-4 w-full rounded-2xl object-cover" />
                    <h3 className="text-xl font-semibold mb-2">GAGE Shaping Gel</h3>
                    <p className="text-gray-700">
                      Create body and strong hold. GAGE will spike it up or lay it down.
                    </p>
                  </article>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <article className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                    <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/3-4cream.gif" alt="GAGE 3/4 Cream" className="mb-4 w-full rounded-2xl object-cover" />
                    <h3 className="text-xl font-semibold mb-2">GAGE 3/4 Cream</h3>
                    <p className="text-gray-700">
                      A firm holding cream that provides structure and style with a sleek finish.
                    </p>
                  </article>

                  <article className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                    <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/Shapingpaste.gif" alt="GAGE Shaping Paste" className="mb-4 w-full rounded-2xl object-cover" />
                    <h3 className="text-xl font-semibold mb-2">GAGE Shaping Paste</h3>
                    <p className="text-gray-700">
                      Strong hold with a matte finish. Shape and form any style with ease.
                    </p>
                  </article>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <article className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                    <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/Pomadedressing.gif" alt="GAGE Pomade Dressing" className="mb-4 w-full rounded-2xl object-cover" />
                    <h3 className="text-xl font-semibold mb-2">GAGE Pomade Dressing</h3>
                    <p className="text-gray-700">
                      Soft hold and shine. Manages curls and adds texture.
                    </p>
                  </article>

                  <article className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                    <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/Shapingcream.gif" alt="GAGE Shaping Cream" className="mb-4 w-full rounded-2xl object-cover" />
                    <h3 className="text-xl font-semibold mb-2">GAGE Shaping Cream</h3>
                    <p className="text-gray-700">
                      Flexible hold and medium finish for sculpting and molding styles.
                    </p>
                  </article>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <article className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                    <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/Pomadegrip.gif" alt="GAGE Pomade Grip" className="mb-4 w-full rounded-2xl object-cover" />
                    <h3 className="text-xl font-semibold mb-2">GAGE Pomade Grip</h3>
                    <p className="text-gray-700">
                      Serious hold with shine. For undone texture or polished styles.
                    </p>
                  </article>

                  <article className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                    <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/Kentbrushog2.gif" alt="Kent OG2 Hair Brush" className="mb-4 w-full rounded-2xl object-cover" />
                    <h3 className="text-xl font-semibold mb-2">Kent OG2 Hair Brush</h3>
                    <p className="text-gray-700">
                      A beech wood brush with pure black bristles for clean styling.
                    </p>
                  </article>
                </div>

                <article className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <img src="https://www.truebarbers.com/wp-content/uploads/2019/10/Kentbrushog3.gif" alt="Kent OG4 Hair Brush" className="mb-4 w-full rounded-2xl object-cover" />
                  <h3 className="text-xl font-semibold mb-2">Kent OG4 Hair Brush</h3>
                  <p className="text-gray-700">
                    A rectangular club-handled brush with pure white bristles for crisp grooming.
                  </p>
                </article>
              </div>
            </div>
          </div>

          <aside className="space-y-8 rounded-3xl border border-slate-200 bg-[#f8f7f4] p-8 shadow-xl">
            <div>
              <h2 className="text-3xl font-bold">Shop links</h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <a href="/" className="text-[#08172c] hover:text-[#D4AF37]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/our-services/" className="text-[#08172c] hover:text-[#D4AF37]">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/our-barbers/" className="text-[#08172c] hover:text-[#D4AF37]">
                    Our Barbers
                  </a>
                </li>
                <li>
                  <a href="/our-loyalty-program/" className="text-[#08172c] hover:text-[#D4AF37]">
                    Our Loyalty Program
                  </a>
                </li>
                <li>
                  <a href="/our-story/" className="text-[#08172c] hover:text-[#D4AF37]">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="/contact-us/" className="text-[#08172c] hover:text-[#D4AF37]">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/employment/" className="text-[#08172c] hover:text-[#D4AF37]">
                    Employment
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
