
import Footer from "../components/Layouts/Footer";
import NavBar from "../components/Layouts/NavBar";
import PageHeader from "../components/Layouts/PageHeader";
import AboutDescriptionComponents from "../components/About/AboutDescriptionComponents";
import GalleryComponents from "../components/About/GalleryComponents";

function AboutPage() {
  return (
    <>
      <NavBar />
      <PageHeader title="Ayurvedic Spa in Sigiriya" subtitle="About Us" />
      <AboutDescriptionComponents />
      <GalleryComponents />
      <Footer />
    </>
  );
}

export default AboutPage;
