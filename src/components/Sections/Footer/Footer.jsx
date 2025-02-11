import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FooterCSS from "./Footer.module.css";

import socialFacebook from "/src/assets/icons/FacebookLogo.svg";
import socialInstagram from "/src/assets/icons/InstagramLogo.svg";
import socialLinkedin from "/src/assets/icons/LinkedinLogo.svg";
import socialWechat from "/src/assets/icons/WechatLogo.svg";
import socialX from "/src/assets/icons/XLogo.svg";
import logo from "/src/assets/images/logo.svg";

const Footer = () => {
  return (
    <>
      <Container fluid className={FooterCSS.section}>
        <Row className={`${FooterCSS.navigation} justify-content-between`}>
          <Col>
            <img src={logo} alt="Inventa logo" />
          </Col>
          <Col className="text-end">
            <a className="me-4" href="#">
              About Us
            </a>
            <a className="me-4" href="#">
              Careers
            </a>
            <a className="me-4" href="#">
              Contacts
            </a>
            <a className="me-4" href="#">
              Offices
            </a>
          </Col>
        </Row>
        <Row className={`${FooterCSS.social} mb-5`}>
          <Col className="text-end">
            <a className="me-4" href="#">
              <img src={socialLinkedin} />
            </a>
            <a className="me-4" href="#">
              <img src={socialFacebook} />
            </a>
            <a className="me-4" href="#">
              <img src={socialX} />
            </a>
            <a className="me-4" href="#">
              <img src={socialInstagram} />
            </a>
            <a className="me-4" href="#">
              <img src={socialWechat} />
            </a>
          </Col>
        </Row>
        <Row className={`${FooterCSS.extras} justify-content-between`}>
          <Col className={FooterCSS.disclaimers}>
            <a className="me-4" href="#">
              Disclaimer
            </a>
            <a className="me-4" href="#">
              Privacy Policy
            </a>
            <a className="me-5" href="#">
              Terms of Service
            </a>
            Copyright &copy; 2023 Inventa. All rights reserved
          </Col>
          <Col className={`${FooterCSS.newsletter} text-end`}>
            <a href="#">Subscribe to our Newsletter</a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
