import React from "react";
import Footer from "../Layouts/Footer";
import NavBar from "../Layouts/NavBar";
import AppoinmentComponents from "./AppoinmentComponents";
import Header from "./HeaderComponents";
import PricingComponents from "./PricingComponents";

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
