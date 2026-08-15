import { useParams } from "react-router-dom";
import Footer from "../components/Layouts/Footer";
import NavBar from "../components/Layouts/NavBar";
import Description from "../components/Services/Description";
import GetAppoinmentBanner from "../components/Services/GetAppoinmentBanner";
import NotFoundPage from "./NotFoundPage";
import { serviceBySlug } from "../DataModel/ServicesModel";

/**
 * /services/<slug> — one indexable page per treatment.
 *
 * An unrecognised slug renders the 404 page rather than an empty shell, so a
 * mistyped or retired treatment URL behaves like any other missing page.
 */
function ServiceDetailPage() {
  const { slug } = useParams();
  const service = serviceBySlug(slug);

  if (!service) return <NotFoundPage />;

  return (
    <>
      <NavBar />
      <Description service={service} />
      <GetAppoinmentBanner />
      <Footer />
    </>
  );
}

export default ServiceDetailPage;
