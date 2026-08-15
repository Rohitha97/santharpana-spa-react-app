import Footer from "../components/Layouts/Footer";
import NavBar from "../components/Layouts/NavBar";
import AppoinmentComponents from "../components/HomePage/AppoinmentComponents";
import Header from "../components/HomePage/HeaderComponents";
import PricingComponents from "../components/HomePage/PricingComponents";
import ReviewsComponents from "../components/HomePage/ReviewsComponents";
import FaqComponents from "../components/HomePage/FaqComponents";

function HomePage() {
  return (
    <>
      <NavBar />
      <Header />
      <PricingComponents />
      {/* Proof before the ask: the rating does the persuading, then we invite the booking */}
      <ReviewsComponents />
      <AppoinmentComponents />
      <FaqComponents />
      <Footer />
    </>
  );
}

export default HomePage;
