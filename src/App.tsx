import { Routes, Route, Navigate, useSearchParams } from "react-router-dom";
import ScrollToTop from "./components/Layouts/ScrollToTop";
import Seo from "./components/Layouts/Seo";
import { serviceById } from "./DataModel/ServicesModel";

/**
 * Route components are imported statically rather than with React.lazy.
 *
 * Every page is prerendered to real HTML now, and a lazy boundary breaks the
 * hydration of that HTML: the chunk has not arrived when React hydrates, so the
 * boundary suspends, hydration fails (React error #418) and the whole tree is
 * thrown away and re-rendered on the client — which defeats the point of having
 * prerendered it. Static imports cost ~60 KB on the initial bundle and buy back
 * a clean hydration onto markup the visitor can already see.
 */
import HomePage from "./Page/HomePage";
import ServicesPage from "./Page/ServicesPage";
import ServiceDetailPage from "./Page/ServiceDetailPage";
import AppoinmentPage from "./Page/AppoinmentPage";
import AboutPage from "./Page/AboutPage";
import ContactPage from "./Page/ContactPage";
import NotFoundPage from "./Page/NotFoundPage";

/**
 * Treatments used to live at /description?id=3. Query-string URLs cannot carry
 * their own title or canonical, so every treatment shared the homepage's
 * identity in search results. They now live at /services/<slug>; this keeps the
 * old links — including any Google has already indexed — working.
 */
function LegacyDescriptionRedirect() {
  const [searchParams] = useSearchParams();
  const service = serviceById(searchParams.get("id"));
  return <Navigate to={service ? `/services/${service.slug}` : "/services"} replace />;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Seo />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/appointment" element={<AppoinmentPage />} />

        {/* Legacy URLs. Both stay reachable so nothing 404s. */}
        <Route path="/appoinment" element={<Navigate to="/appointment" replace />} />
        <Route path="/description" element={<LegacyDescriptionRedirect />} />

        {/* /404 is prerendered to 404.html so the host can serve it with a
            real 404 status; "*" catches everything during client navigation. */}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
