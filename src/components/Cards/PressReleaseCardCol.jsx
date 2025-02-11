import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import pressReleaseCardColCSS from "./PressReleaseCardCol.module.css";

const PressReleaseCardCol = ({ index, imageUrl }) => {
  return (
    <Col className={`${pressReleaseCardColCSS.card} rounded-3`}>
      <Row>
        {imageUrl !== undefined && (
          <Col
            xs="2"
            style={{
              "--bg-image": `url('${imageUrl}')`,
            }}
            className={`${pressReleaseCardColCSS["card-image"]}`}
          ></Col>
        )}
        <Col className="pt-3 pb-3 px-4">
          <Row className="align-content-between h-100">
            <Col xs="12" className={pressReleaseCardColCSS["card-header"]}>
              <div className={pressReleaseCardColCSS["card-subtitle"]}>
                Leader league 2023
              </div>
              <div className={pressReleaseCardColCSS["card-title"]}>
                Influencers and Brand Defamation + {index}
              </div>
            </Col>
            <Col xs="12" className={pressReleaseCardColCSS.footer}>
              <Badge
                pill
                bg="light"
                text="dark"
                className={`border border-dark me-2 ${pressReleaseCardColCSS["card-badge"]}`}
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

export default PressReleaseCardCol;
