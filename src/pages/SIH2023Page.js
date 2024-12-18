import React from "react";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import "../stylesheets/ExploreSIHPageStyle.css";
import SIH2k23Winners from "../components/explore_sih_components/SIH2k23Winners";
import SIH2k23TopBanner from "../components/explore_sih_components/SIH2k23TopBanner";
import { ThemeSlider2k23 } from "../components/home_components/ThemeSlider";
import GlimpseGallery from "../components/explore_sih_components/GlimpseGallery";
import SIH2k23Prizes from "../components/explore_sih_components/SIH2k23Prizes";
import EventSchedule2k23 from "../components/explore_sih_components/EventSchedule2k23";
import SIH2k23Guests from "../components/explore_sih_components/SIH2k23Guests";
import SIH2k23Outcomes from "../components/explore_sih_components/SIH2k23Outcomes";
import Summary from "../components/explore_sih_components/Summary";

const SIH2023Page = () => {
  return (
    <>
      <Navbar />
      <SIH2k23TopBanner />
      <ThemeSlider2k23 />
      <SIH2k23Winners />
      <SIH2k23Prizes />
      <SIH2k23Outcomes />
      <EventSchedule2k23 />
      <GlimpseGallery />
      <SIH2k23Guests />
      <Summary />
      <Footer />
    </>
  );
};

export default SIH2023Page;
