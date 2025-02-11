import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Slider from "react-slick";
import ImageOpinionCardCol from "../../Cards/ImageOpinionCardCol";
import OpinionArticlesCSS from "./OpinionArticles.module.css";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./OpinionArticle.css";

const OpinionArticles = () => {
  const settings = {
    draggable: true,
    infinite: false,
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container fluid className={OpinionArticlesCSS.section}>
        <h3>Opinion Articles</h3>
        <Row className="justify-content-between gap-5">
          <Slider {...settings}>
            {Array.from({ length: 5 }, (_, i) => (
              <ImageOpinionCardCol index={i} key={`image-opinion-card-${i}`} />
            ))}
          </Slider>
        </Row>
      </Container>
    </>
  );
};

export default OpinionArticles;
