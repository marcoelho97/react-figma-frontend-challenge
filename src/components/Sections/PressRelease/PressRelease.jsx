import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PressReleaseCardCol from "../../Cards/PressReleaseCardCol";
import PressReleaseCSS from "./PressRelease.module.css";

const PressRelease = () => {
  return (
    <>
      <Container fluid className={PressReleaseCSS.section}>
        <div className={PressReleaseCSS["section-header"]}>
          <h3>Press Release</h3>
          <a href="#" className={PressReleaseCSS["read-more"]}>
            <span>Read more</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M16.3153 16.6681C15.9247 17.0587 15.9247 17.6918 16.3153 18.0824C16.7058 18.4729 17.339 18.4729 17.7295 18.0824L22.3951 13.4168C23.1761 12.6357 23.1761 11.3694 22.3951 10.5883L17.7266 5.9199C17.3361 5.52938 16.703 5.52938 16.3124 5.91991C15.9219 6.31043 15.9219 6.9436 16.3124 7.33412L19.9785 11.0002L2 11.0002C1.44772 11.0002 1 11.4479 1 12.0002C1 12.5524 1.44772 13.0002 2 13.0002L19.9832 13.0002L16.3153 16.6681Z"
                  fill="#171C35"
                ></path>{" "}
              </g>
            </svg>
          </a>
        </div>
        <Row className="justify-content-between gap-5">
          {Array.from({ length: 3 }, (_, i) => (
            <PressReleaseCardCol
              imageUrl={
                "https://images.unsplash.com/photo-1557837201-38eaf28b3031?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              index={i}
              key={`press-release-card-${i}`}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default PressRelease;
