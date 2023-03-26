import React, { useState } from "react";
import Footer from "../components/Layouts/Footer";
import NavBar from "../components/Layouts/NavBar";
import PageHeader from "../components/Layouts/PageHeader";
import DescriptionModal from "../components/Services/Description";
import GetAppoinmentBanner from "../components/Services/GetAppoinmentBanner";
import ServicesComponents from "../components/Services/ServicesComponents";

function ServicesPage() {
  return (
    <>
      <NavBar />
      <PageHeader title="What We Do" subtitle="Our services" />
      <ServicesComponents />
      <GetAppoinmentBanner />
      <Footer />
    </>
  );
}

export default ServicesPage;
