import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import imageOpinionCardColCSS from "./ImageOpinionCardCol.module.css";

const ImageOpinionCardCol = ({ index }) => {
  return (
    <Col className={`${imageOpinionCardColCSS.card} rounded-3`}>
      <Row>
        <Col
          xs="2"
          style={{
            "--bg-image": `url('https://images.unsplash.com/photo-1557837201-38eaf28b3031?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
          className={`${imageOpinionCardColCSS["card-image"]}`}
        ></Col>
        <Col className="pt-4 pb-3">
          <Row className="align-content-between h-100">
            <Col xs="12" className={imageOpinionCardColCSS["card-title"]}>
              Influencers and Brand Defamation + {index}
              <div className={imageOpinionCardColCSS["opinion-author"]}>
                <img
                  src="/src/assets/images/eventOrganizer.png"
                  className="d-inline-block"
                  alt={`Picture of Rute Franco`}
                />
                <span className="d-inline-block">Rute Franco</span>
              </div>
            </Col>
            <Col xs="12" className={imageOpinionCardColCSS.footer}>
              <Badge
                pill
                bg="light"
                text="dark"
                className={`border border-dark me-2 ${imageOpinionCardColCSS["card-badge"]}`}
              >
                Opinion Article
              </Badge>
              <span>12 July 2023</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default ImageOpinionCardCol;
