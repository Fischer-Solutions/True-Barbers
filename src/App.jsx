import { useState } from "react";
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

export default function App() {
  const [siteInfo, setSiteInfo] = useState(defaultSiteInfo);
  const basePath = "/True-Barbers/";
  const pathname = window.location.pathname.replace(basePath, "/");
  const isAdminPath = pathname === "/admin";
  const isProductsPath = pathname === "/products";

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
