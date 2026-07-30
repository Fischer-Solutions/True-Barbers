import { useState } from "react";

const defaults = {
  "--font-logo": "32px",
  "--font-nav": "20px",

  "--font-heroTitle": "72px",
  "--font-heroDescription": "18px",

  "--font-sectionTitle": "48px",
  "--font-sectionDescription": "18px",

  "--font-serviceTitle": "24px",
  "--font-serviceDescription": "18px",

  "--font-barberName": "24px",
  "--font-barberRole": "16px",
  "--font-barberBio": "18px",

  "--font-button": "16px",
};

const labels = {
  "--font-logo": "Logo",
  "--font-nav": "Navigation",

  "--font-heroTitle": "Hero Title",
  "--font-heroDescription": "Hero Description",

  "--font-sectionTitle": "Section Titles",
  "--font-sectionDescription": "Section Descriptions",

  "--font-serviceTitle": "Service Titles",
  "--font-serviceDescription": "Service Descriptions",

  "--font-barberName": "Barber Names",
  "--font-barberRole": "Barber Roles",
  "--font-barberBio": "Barber Bios",

  "--font-button": "Buttons",
};

export default function TypographyControls() {
  const [values, setValues] = useState(defaults);

  const updateFont = (variable, value) => {
    const newValue = `${value}px`;

    document.documentElement.style.setProperty(
      variable,
      newValue
    );

    setValues((prev) => ({
      ...prev,
      [variable]: newValue,
    }));
  };

  const resetFonts = () => {
    Object.entries(defaults).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });

    setValues(defaults);
  };

  return (
    <div className="fixed right-5 bottom-5 z-[999] w-80 max-h-[80vh] overflow-y-auto rounded-xl bg-white shadow-2xl border p-5">

      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">
          Typography Debug
        </h2>

        <button
          onClick={resetFonts}
          className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
        >
          Reset
        </button>
      </div>


      <div className="space-y-4">

        {Object.entries(values).map(([variable, value]) => (
          <div key={variable}>

            <label className="block text-sm font-semibold mb-1">
              {labels[variable]}
            </label>

            <div className="flex items-center gap-3">

              <input
                type="range"
                min="10"
                max="100"
                value={parseInt(value)}
                onChange={(e) =>
                  updateFont(
                    variable,
                    e.target.value
                  )
                }
                className="flex-1"
              />

              <span className="w-12 text-right text-sm">
                {value}
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}