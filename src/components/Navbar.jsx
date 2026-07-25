import { useState } from "react";
import { Menu, X, Scissors } from "lucide-react";

const links = [
  { name: "Home", href: "/#" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Products", href: "/products" },
  { name: "Barbers", href: "/#barbers" },
  { name: "Contact", href: "/#contact" },
];

const socialIcons = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/truebarberscarmel",
    src: "https://www.truebarbers.com/wp-content/uploads/2019/10/facebook.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/truebarbers/",
    src: "https://www.truebarbers.com/wp-content/uploads/2019/10/instagram.png",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/True_Barbers",
    src: "https://www.truebarbers.com/wp-content/uploads/2019/10/twitter.png",
  },
  {
    name: "Map",
    href: "https://www.google.com/maps/place/True+Barbers/@39.96121,-86.1287697,17z/data=!3m1!4b1!4m5!3m4!1s0x8814ada8e1a144b5:0x309866bcc6e917a4!8m2!3d39.96121!4d-86.126581",
    src: "https://www.truebarbers.com/wp-content/uploads/2019/10/gplus.png",
  },
  {
    name: "Yelp",
    href: "https://www.yelp.com/biz/true-barbers-carmel",
    src: "https://www.truebarbers.com/wp-content/uploads/2019/10/yelp.png",
  },
];

export default function Navbar({ siteInfo }) {
  const [open, setOpen] = useState(false);
  const navbar = siteInfo?.navbar ?? {
    siteName: "TRUE BARBERS",
    siteTagline: "Family Owned",
    bookNowLabel: "Book Now",
    bookNowUrl: "#contact",
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d1b2a]/95 backdrop-blur border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 md:py-6">
        <a href="#" className="flex items-center gap-4 md:gap-5">
          <div className="bg-yellow-500 p-3 md:p-4 rounded-full">
            <Scissors className="text-[#0d1b2a]" size={26} />
          </div>

          <div>
            <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wide">
              {navbar.siteName}
            </h1>
            <p className="text-yellow-400 text-sm md:text-base uppercase tracking-[4px]">
              {navbar.siteTagline}
            </p>
          </div>
        </a>

        <nav className="hidden md:flex gap-10 text-lg md:text-xl">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-yellow-400 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href={navbar.bookNowUrl}
          className="hidden md:inline-flex items-center justify-center bg-yellow-500 text-[#0d1b2a] px-6 py-3 rounded-full font-semibold text-lg md:text-xl hover:bg-yellow-400 transition"
        >
          {navbar.bookNowLabel}
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      <div className="hidden md:flex items-center justify-center gap-4 border-t border-white/10 bg-[#0d1b2a]/80 px-6 py-3">
        {socialIcons.map((icon) => (
          <a
            key={icon.name}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-80"
          >
            <img src={icon.src} alt={icon.name} className="h-8 w-auto" />
          </a>
        ))}
      </div>

      {open && (
        <div className="md:hidden bg-[#10243b]">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-5 border-b border-white/10 text-white text-lg hover:bg-[#18304d]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="block text-center bg-yellow-500 text-[#0d1b2a] font-bold py-5 text-lg"
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}