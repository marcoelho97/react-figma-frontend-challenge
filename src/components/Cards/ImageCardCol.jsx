import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import imageCardColCSS from "./ImageCardCol.module.css";

const ImageCardCol = ({ imageUrl, title, categories }) => {
  return (
    <Col
      className={`${imageCardColCSS.card} ${imageCardColCSS["main-card"]} rounded-3`}
    >
      <Row className="h-100">
        <Col
          xs="3"
          style={{ "--bg-image": `url('${imageUrl}')` }}
          className={`${imageCardColCSS["card-image"]}`}
        ></Col>
        <Col className="pt-4 pb-3">
          <Row className="align-content-between h-100">
            <Col xs="12" className={imageCardColCSS["card-title"]}>
              {title}
            </Col>
            <Col xs="12">
              {categories.map((category, index) => (
                <Badge
                  pill
                  key={`CardCategory-${category}-${index}`}
                  bg="light"
                  text="dark"
                  className={`border border-dark me-2 ${imageCardColCSS["card-badge"]}`}
                >
                  {category}
                </Badge>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default ImageCardCol;
