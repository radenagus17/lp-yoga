import React from "react";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Facts from "./components/Facts";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Pricing from "./components/Pricing";

function App() {
  // aos init
  Aos.init({
    duration: 1800,
    offset: 100,
  });

  return (
    <div className="overflow-hidden">
      <Hero />
      <Cards />
      <Facts />
      <Features />
      <Courses />
      <Pricing />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
