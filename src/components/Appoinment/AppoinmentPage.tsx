import React from "react";
import AppoinmentComponents from "../HomePage/AppoinmentComponents";
import Footer from "../Layouts/Footer";
import NavBar from "../Layouts/NavBar";
import PageHeader from "../Layouts/PageHeader";

function AppoinmentPage() {
  return (
    <>
      <NavBar />
      <PageHeader />
      <AppoinmentComponents />
      <Footer />
    </>
  );
}

export default AppoinmentPage;
