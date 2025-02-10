import "./App.css";

import BannerCarousel from "./components/Carousel/BannerCarousel";
import TopNavbar from "./components/Navbar/TopNavbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import OpinionArticles from "./components/Sections/OpinionArticles";

function App() {
  return (
    <>
      <TopNavbar />
      <BannerCarousel />
      <OpinionArticles />
    </>
  );
}

export default App;
