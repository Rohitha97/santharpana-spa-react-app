import React from "react";
import Footer from "../Layouts/Footer";
import NavBar from "../Layouts/NavBar";
import PageHeader from "../Layouts/PageHeader";
import GetAppoinmentBanner from "./GetAppoinmentBanner";
import ServicesComponents from "./ServicesComponents";

function ServicesPage() {
  return (
    <>
      <NavBar />
      <PageHeader />
      <ServicesComponents />
      <GetAppoinmentBanner />
      <Footer />
    </>
  );
}

export default ServicesPage;
