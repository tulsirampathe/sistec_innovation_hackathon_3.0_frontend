import React from "react";
import "../stylesheets/ResultPageStyle.css";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import SIH_2023Winners from "../components/result_components/SIH_2023Winners";

const SIH_2023WinnersPage = () => {
  return (
    <>
      <Navbar />
      <SIH_2023Winners />
      <Footer />
    </>
  );
};

export default SIH_2023WinnersPage;
