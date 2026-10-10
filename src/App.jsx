import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Loyalty from "./components/Loyalty";
import Barbers from "./components/Barbers";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Footer from "./components/Footer";
import AdminPanel from "./components/AdminPanel";
import { defaultSiteInfo } from "./siteData";

function getCurrentRoute() {
  const hashPath = window.location.hash.startsWith("#/")
    ? window.location.hash.slice(1)
    : window.location.hash.startsWith("#")
      ? window.location.hash
      : "";

  if (hashPath) {
    return hashPath;
  }

  const basePath = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  const pathname = window.location.pathname;

  if (!basePath || basePath === "/") {
    return pathname || "/";
  }

  if (pathname.startsWith(basePath)) {
    const relativePath = pathname.slice(basePath.length) || "/";
    return relativePath;
  }

  return pathname || "/";
}

export default function App() {
  const [siteInfo, setSiteInfo] = useState(defaultSiteInfo);
  const [route, setRoute] = useState(() => getCurrentRoute());

  useEffect(() => {
    const updateRoute = () => setRoute(getCurrentRoute());
    window.addEventListener("hashchange", updateRoute);
    window.addEventListener("popstate", updateRoute);

    return () => {
      window.removeEventListener("hashchange", updateRoute);
      window.removeEventListener("popstate", updateRoute);
    };
  }, []);

  const isAdminPath = route === "/admin";
  const isProductsPath = route === "/products";

  if (isAdminPath) {
    return <AdminPanel siteInfo={siteInfo} onChange={setSiteInfo} />;
  }

  return (
    <>
      <Navbar siteInfo={siteInfo} />

      <main>
        {isProductsPath ? (
          <Products />
        ) : (
          <>
            <Hero hero={siteInfo.hero} />
            <About about={siteInfo.about} />
            <Services />
            <Loyalty />
            <Barbers barbers={siteInfo.barbers} />
            <Reviews />
            <Contact contact={siteInfo.contact} />
          </>
        )}
      </main>

      <Footer footer={siteInfo.footer} />
    </>
  );
}
