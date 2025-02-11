import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import RecentCaseStudyCardCol from "../../Cards/RecentCaseStudyCardCol";
import RecentCaseStudiesCSS from "./RecentCaseStudies.module.css";

const RecentCaseStudies = () => {
  return (
    <>
      <Container fluid className={RecentCaseStudiesCSS.section}>
        <div className={RecentCaseStudiesCSS["section-header"]}>
          <h3>Recent Case Studies</h3>
        </div>
        <Row className="justify-content-between gap-5">
          <RecentCaseStudyCardCol index={1} />
          <RecentCaseStudyCardCol
            imageUrl={
              "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg"
            }
            cardStep={-56}
            index={2}
          />
        </Row>
      </Container>
    </>
  );
};

export default RecentCaseStudies;
