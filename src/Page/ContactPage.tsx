import React from "react";
import ContactCards from "../components/Contact/ContactCards";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Layouts/Footer";
import NavBar from "../components/Layouts/NavBar";
import PageHeader from "../components/Layouts/PageHeader";

function ContactPage() {
  return (
    <>
      <NavBar />
      <PageHeader title="Get In Touch" subtitle="Contact Us" />
      <ContactCards />
      <ContactForm />
      <Footer />
    </>
  );
}

export default ContactPage;
