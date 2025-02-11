import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import recentCaseStudyCardColCSS from "./RecentCaseStudyCardCol.module.css";

const RecentCaseStudyCardCol = ({ index, imageUrl, cardStep }) => {
  return (
    <Col
      className={`${recentCaseStudyCardColCSS.card} rounded-3 px-4`}
      style={{ marginTop: `${cardStep}px` }}
    >
      <Row>
        {imageUrl !== undefined && (
          <Col
            xs="3"
            className={`${recentCaseStudyCardColCSS["card-image"]} pt-3 pb-3`}
          >
            <img
              src={imageUrl}
              alt="Recent case study's logo"
              className="img-fluid"
            />
          </Col>
        )}
        <Col className="pt-3 pb-3">
          <Row className="align-content-between h-100 pt-2">
            <Col xs="12" className={recentCaseStudyCardColCSS["card-content"]}>
              <div className={recentCaseStudyCardColCSS["card-subtitle"]}>
                Litigation
              </div>
              <div className={recentCaseStudyCardColCSS["card-title"]}>
                Influencers and Brand Defamation + {index}
              </div>
              <div className={recentCaseStudyCardColCSS["card-body"]}>
                Eu in ultricies molestie amet malesuada. Pretium id risus odio
                consectetur commodo. Pretium elementum fusce congue eget. Ut
                velit dis cum nec vitae. Quis semper a ipsum auctor habitasse.
              </div>
            </Col>
            <Col xs="12" className={recentCaseStudyCardColCSS.footer}>
              <Badge
                pill
                bg="light"
                text="dark"
                className={`border border-dark me-2 ${recentCaseStudyCardColCSS["card-badge"]}`}
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

export default RecentCaseStudyCardCol;
