import React from "react";
import Footer from "../components/Layouts/Footer";
import NavBar from "../components/Layouts/NavBar";
import AppoinmentComponents from "../components/HomePage/AppoinmentComponents";
import Header from "../components/HomePage/HeaderComponents";
import PricingComponents from "../components/HomePage/PricingComponents";

function HomePage() {
  return (
    <>
      <NavBar />
      <Header />
      <PricingComponents />
      <AppoinmentComponents />
      <Footer />
    </>
  );
}

export default HomePage;
