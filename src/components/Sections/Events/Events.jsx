import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DateCardCol from "../../Cards/DateCardCol";
import EventCSS from "./Events.module.css";

const Events = () => {
  const eventCardExample = {
    title: `58th Edition FACIM – Maputo’s International Trade Fair`,
    eventOrganizer: {
      name: "Rute Franco",
      image: "/src/assets/images/eventOrganizer.png",
    },
    dates: {
      initialDate: new Date(2025, 6, 12),
      endDate: new Date(2025, 6, 13),
    },
    location: "Póvoa de Santa Iria",
    hyperlink: "https://www.google.com/",
  };

  return (
    <>
      <Container fluid className={EventCSS.section}>
        <div className={EventCSS["section-header"]}>
          <h3>Events</h3>
          <a href="#" className={EventCSS["read-more"]}>
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
            <DateCardCol
              keepShadow={true}
              biggerCard={true}
              title={eventCardExample.title}
              eventOrganizer={eventCardExample.eventOrganizer}
              dates={eventCardExample.dates}
              location={eventCardExample.location}
              key={`events-card-${i}`}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Events;
