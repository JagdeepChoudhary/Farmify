import React from "react";
import Menubar from "./Header";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";

const Home = () => {
  return (
    <>
      <Menubar />
      <HeroSection />
      <Footer />
    </>
  );
};

export default Home;
