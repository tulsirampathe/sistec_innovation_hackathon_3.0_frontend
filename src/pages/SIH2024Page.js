import React from "react";
import "../stylesheets/HomePageStyle.css";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import AnnouncementTab from "../components/home_components/AnnouncementTab";
import ThemeSlider, { ThemeSlider2k24 } from "../components/home_components/ThemeSlider";
import SIHTimeLine from "../components/home_components/SIHTimeLine";
import EventSchedule from "../components/home_components/EventSchedule";
import EventSchedule2k24 from "../components/explore_sih_components/EventSchedule2k24";
import SIH2k24Outcomes from "../components/explore_sih_components/SIH2k24Outcomes";
import SIH2k24Prizes from "../components/explore_sih_components/SIH2k24Prizes";
import SIH2k24Winners from "../components/explore_sih_components/SIH2k24Winners";
import SIH2k24TopBanner from "../components/explore_sih_components/SIH2k24TopBanner";

const SIH2024Page = () => {
  return (
    <>
      <Navbar />
      {/* <AnnouncementTab /> */}
      {/* <ThemeSlider /> */}
      {/* <SIHTimeLine /> */}
      {/* <EventSchedule /> */}
      <SIH2k24TopBanner />
      <ThemeSlider2k24 />
      <SIH2k24Winners />
      <SIH2k24Prizes />
      <SIH2k24Outcomes />
      <EventSchedule2k24 />
      <Footer />
    </>
  );
};

export default SIH2024Page;
