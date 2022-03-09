import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import Slider from "../../components/slider/Slider";
import BelowSlider from "../../components/belowslider/belowSlider";
import { useState } from "react";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import "./Home.scss";
import Popup from "../../components/popup/Popup";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections" onClick={() => setMenuOpen(false)}>
        <Slider />
        <BelowSlider />
        <Newsletter isOpen={isOpen} setIsOpen={setIsOpen} />
        <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
