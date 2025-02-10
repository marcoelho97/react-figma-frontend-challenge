import Carousel from "react-bootstrap/Carousel";

import bannerCarouselCSS from "./BannerCarousel.module.css";
import arrowIcon from "/src/assets/icons/arrowright.svg";

const BannerCarousel = () => {
  return (
    <Carousel
      className={bannerCarouselCSS.carousel}
      controls={false}
      indicators={false}
      pause={false}
      fade={false}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Carousel.Item key={`carousel-slider-${i}`}>
          <div className={bannerCarouselCSS["carousel-slide"]}>
            <img
              className="img-fluid"
              src={`https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              alt="Second slide"
            />
          </div>
          <Carousel.Caption className={`${bannerCarouselCSS.captions}`}>
            <h4 className={bannerCarouselCSS.subtitle}>
              Consectetur leo quis vitae viverra aenean ornare + {i}
            </h4>
            <h2 className={bannerCarouselCSS.title}>
              Ullamcorper id at dolor sed eu ornare orci sem
            </h2>
            <p className={bannerCarouselCSS.body}>
              Consequat egestas volutpat mattis suscipit. At semper urna tortor
              sed purus proin volutpat. Neque nisl quis nulla etiam.
            </p>
            <p className={bannerCarouselCSS["read-more"]}>
              <span>Read more</span>
              <img src={arrowIcon} alt="Arrow icon pointing right" />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
