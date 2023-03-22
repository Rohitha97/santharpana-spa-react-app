import React from "react";
import Footer from "../components/Layouts/Footer";
import NavBar from "../components/Layouts/NavBar";
import PageHeader from "../components/Layouts/PageHeader";
import AboutDescriptionComponents from "../components/About/AboutDescriptionComponents";
import GalleryComponents from "../components/About/GalleryComponents";

function AboutPage() {
  return (
    <>
      <NavBar />
      <PageHeader title="About Us" subtitle="About Us" />
      <AboutDescriptionComponents />
      <GalleryComponents />
      <Footer />
    </>
  );
}

export default AboutPage;
