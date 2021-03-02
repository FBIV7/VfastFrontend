import React from "react";
import Slider from "../pages/Slider";
import Verification from "../pages/Verification";
import About from "../pages/About";
import Services from "../pages/Services";
import Landing from "../pages/Landing";
import Membership from '../pages/Membership'
import Footer from "../pages/Footer";
import Aboutfbiv from "../pages/Aboutfbiv"
import Perface from '../pages/Perface'

function Wrapper() {
  return (
    <div>
      <Slider />
      {/* <Verification /> */}
      <Aboutfbiv />

      <About />
      <Perface />
      <Services />
      <Landing />
      <Membership />
      <Footer />
    </div>
  );
}

export default Wrapper;
