import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingScreen from "./components/Layouts/LoadingScreen";

const HomePage = lazy(() => import("./Page/HomePage"));
const ServicesPage = lazy(() => import("./Page/ServicesPage"));
const ServicesDescription = lazy(() => import("./Page/ServicesDescription"));
const AppoinmentPage = lazy(() => import("./Page/AppoinmentPage"));
const AboutPage = lazy(() => import("./Page/AboutPage"));
const ContactPage = lazy(() => import("./Page/ContactPage"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    {/* Branded Santharpana loading screen shown while lazy chunks are fetched */}
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/description" element={<ServicesDescription />} />
        <Route path="/appoinment" element={<AppoinmentPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Suspense>
  </Router>
);
