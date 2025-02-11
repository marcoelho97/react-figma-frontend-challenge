import "./App.css";

import BannerCarousel from "./components/Carousel/BannerCarousel";
import TopNavbar from "./components/Navbar/TopNavbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Announcements from "./components/Sections/Announcements/Announcements";
import Events from "./components/Sections/Events/Events";
import Footer from "./components/Sections/Footer/Footer";
import LowerBanner from "./components/Sections/LowerBanner/LowerBanner";
import OpinionArticles from "./components/Sections/OpinionArticles/OpinionArticles";
import PressRelease from "./components/Sections/PressRelease/PressRelease";
import RecentCaseStudies from "./components/Sections/RecentCaseStudies/RecentCaseStudies";

function App() {
  return (
    <>
      <TopNavbar />
      <BannerCarousel />
      <OpinionArticles />
      <PressRelease />
      <RecentCaseStudies />
      <Events />
      <Announcements />
      <LowerBanner />
      <Footer />
    </>
  );
}

export default App;
