import React from "react";
import AppoinmentComponents from "../components/HomePage/AppoinmentComponents";
import Footer from "../components/Layouts/Footer";
import NavBar from "../components/Layouts/NavBar";
import PageHeader from "../components/Layouts/PageHeader";

function AppoinmentPage() {
  return (
    <>
      <NavBar />
      <PageHeader title="Appoinment" subtitle="Book your Treatment" />
      <AppoinmentComponents />
      <Footer />
    </>
  );
}

export default AppoinmentPage;
