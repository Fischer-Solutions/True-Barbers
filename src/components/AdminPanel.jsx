import { X } from "lucide-react";
import { defaultSiteInfo } from "../siteData";

function setNestedValue(obj, keys, value) {
  let cursor = obj;
  for (let i = 0; i < keys.length - 1; i += 1) {
    const key = Number.isFinite(+keys[i]) ? Number(keys[i]) : keys[i];
    cursor = cursor[key];
  }
  const finalKey = Number.isFinite(+keys[keys.length - 1])
    ? Number(keys[keys.length - 1])
    : keys[keys.length - 1];
  cursor[finalKey] = value;
}

function updateValue(siteInfo, onChange, path, value) {
  const next = JSON.parse(JSON.stringify(siteInfo));
  setNestedValue(next, path.split("."), value);
  onChange(next);
}

function FormInput({ label, value, onChange, ...props }) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      <span className="mb-2 block">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
        {...props}
      />
    </label>
  );
}

function FormTextarea({ label, value, onChange, rows = 4 }) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      <span className="mb-2 block">{label}</span>
      <textarea
        value={value}
        rows={rows}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
      />
    </label>
  );
}

function addBarber(siteInfo, onChange) {
  const next = JSON.parse(JSON.stringify(siteInfo));
  next.barbers = next.barbers ?? [];
  next.barbers.push({
    name: "",
    title: "",
    image: "",
    bio: "",
  });
  onChange(next);
}

function removeBarber(siteInfo, onChange, index) {
  const next = JSON.parse(JSON.stringify(siteInfo));
  next.barbers = next.barbers ?? [];
  next.barbers.splice(index, 1);
  onChange(next);
}

export default function AdminPanel({ siteInfo, onChange }) {
  if (!siteInfo) return null;

  return (
    <div className="min-h-screen bg-[#f8f7f4] py-10 text-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-6 shadow-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Site Admin
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900">
                Edit site information
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                Changes will update the live content in the app state.
              </p>
            </div>
            <a
              href="/"
              className="inline-flex rounded-full border border-slate-300 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Return to site
            </a>
          </div>
        </div>

        <div className="space-y-8">
          <section className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Barbers</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Add, update, or remove the barbers shown on the team section.
                </p>
              </div>
              <button
                type="button"
                onClick={() => addBarber(siteInfo, onChange)}
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#08172c] transition hover:bg-yellow-400"
              >
                Add barber
              </button>
            </div>

            {siteInfo.barbers?.length ? (
              siteInfo.barbers.map((barber, index) => (
                <div
                  key={`${barber.name || "barber"}-${index}`}
                  className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-700">
                        Barber {index + 1}
                      </p>
                      <p className="text-xs text-slate-500">
                        Edit the barber's name, title, photo URL, and bio.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeBarber(siteInfo, onChange, index)}
                      className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                      Remove
                    </button>
                  </div>

                  <FormInput
                    label="Name"
                    value={barber.name}
                    onChange={(value) => updateValue(siteInfo, onChange, `barbers.${index}.name`, value)}
                  />
                  <FormInput
                    label="Title"
                    value={barber.title}
                    onChange={(value) => updateValue(siteInfo, onChange, `barbers.${index}.title`, value)}
                  />
                  <FormInput
                    label="Photo URL"
                    value={barber.image}
                    onChange={(value) => updateValue(siteInfo, onChange, `barbers.${index}.image`, value)}
                  />
                  <FormTextarea
                    label="Description"
                    value={barber.bio}
                    rows={4}
                    onChange={(value) => updateValue(siteInfo, onChange, `barbers.${index}.bio`, value)}
                  />
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-600">No barbers added yet. Use Add barber to create one.</p>
            )}
          </section>

          <section className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">Brand & navigation</h3>
            <FormInput
              label="Site name"
              value={siteInfo.navbar.siteName}
              onChange={(value) => updateValue(siteInfo, onChange, "navbar.siteName", value)}
            />
            <FormInput
              label="Navbar tagline"
              value={siteInfo.navbar.siteTagline}
              onChange={(value) => updateValue(siteInfo, onChange, "navbar.siteTagline", value)}
            />
            <FormInput
              label="Navbar button label"
              value={siteInfo.navbar.bookNowLabel}
              onChange={(value) => updateValue(siteInfo, onChange, "navbar.bookNowLabel", value)}
            />
            <FormInput
              label="Navbar button URL"
              value={siteInfo.navbar.bookNowUrl}
              onChange={(value) => updateValue(siteInfo, onChange, "navbar.bookNowUrl", value)}
            />
          </section>

          <section className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">Hero section</h3>
            <FormInput
              label="Hero subtitle"
              value={siteInfo.hero.preTitle}
              onChange={(value) => updateValue(siteInfo, onChange, "hero.preTitle", value)}
            />
            <FormTextarea
              label="Hero heading"
              value={siteInfo.hero.title}
              rows={3}
              onChange={(value) => updateValue(siteInfo, onChange, "hero.title", value)}
            />
            <FormTextarea
              label="Hero description"
              value={siteInfo.hero.description}
              onChange={(value) => updateValue(siteInfo, onChange, "hero.description", value)}
            />
            <FormInput
              label="Primary CTA label"
              value={siteInfo.hero.primaryCtaLabel}
              onChange={(value) => updateValue(siteInfo, onChange, "hero.primaryCtaLabel", value)}
            />
            <FormInput
              label="Primary CTA URL"
              value={siteInfo.hero.primaryCtaUrl}
              onChange={(value) => updateValue(siteInfo, onChange, "hero.primaryCtaUrl", value)}
            />
            <FormInput
              label="Secondary CTA label"
              value={siteInfo.hero.secondaryCtaLabel}
              onChange={(value) => updateValue(siteInfo, onChange, "hero.secondaryCtaLabel", value)}
            />
            <FormInput
              label="Secondary CTA URL"
              value={siteInfo.hero.secondaryCtaUrl}
              onChange={(value) => updateValue(siteInfo, onChange, "hero.secondaryCtaUrl", value)}
            />
          </section>

          <section className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">About section</h3>
            <FormInput
              label="About eyebrow"
              value={siteInfo.about.eyebrow}
              onChange={(value) => updateValue(siteInfo, onChange, "about.eyebrow", value)}
            />
            <FormInput
              label="About heading"
              value={siteInfo.about.heading}
              onChange={(value) => updateValue(siteInfo, onChange, "about.heading", value)}
            />
            <FormTextarea
              label="About description"
              value={siteInfo.about.description}
              onChange={(value) => updateValue(siteInfo, onChange, "about.description", value)}
            />
            {siteInfo.about.bulletPoints.map((bullet, index) => (
              <FormInput
                key={index}
                label={`Bullet point ${index + 1}`}
                value={bullet}
                onChange={(value) => updateValue(siteInfo, onChange, `about.bulletPoints.${index}`, value)}
              />
            ))}
            <FormTextarea
              label="About highlight"
              value={siteInfo.about.highlight}
              onChange={(value) => updateValue(siteInfo, onChange, "about.highlight", value)}
            />
            <FormInput
              label="About primary CTA label"
              value={siteInfo.about.primaryCtaLabel}
              onChange={(value) => updateValue(siteInfo, onChange, "about.primaryCtaLabel", value)}
            />
            <FormInput
              label="About secondary CTA label"
              value={siteInfo.about.secondaryCtaLabel}
              onChange={(value) => updateValue(siteInfo, onChange, "about.secondaryCtaLabel", value)}
            />
          </section>

          <section className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">Contact info</h3>
            <FormInput
              label="Section title"
              value={siteInfo.contact.title}
              onChange={(value) => updateValue(siteInfo, onChange, "contact.title", value)}
            />
            <FormTextarea
              label="Section subtitle"
              value={siteInfo.contact.subtitle}
              onChange={(value) => updateValue(siteInfo, onChange, "contact.subtitle", value)}
            />
            <FormInput
              label="Address"
              value={siteInfo.contact.address}
              onChange={(value) => updateValue(siteInfo, onChange, "contact.address", value)}
            />
            <FormInput
              label="Phone"
              value={siteInfo.contact.phone}
              onChange={(value) => updateValue(siteInfo, onChange, "contact.phone", value)}
            />
            <FormInput
              label="Email"
              value={siteInfo.contact.email}
              onChange={(value) => updateValue(siteInfo, onChange, "contact.email", value)}
            />
            <FormTextarea
              label="Contact hours"
              value={siteInfo.contact.hours}
              rows={4}
              onChange={(value) => updateValue(siteInfo, onChange, "contact.hours", value)}
            />
          </section>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => onChange(defaultSiteInfo)}
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Reset defaults
            </button>
            <a
              href="/"
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 text-center"
            >
              Return to site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}