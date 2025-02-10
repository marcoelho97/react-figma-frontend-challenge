import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import clockIcon from "/src/assets/icons/clock.svg";
import locationIcon from "/src/assets/icons/gps.svg";

import dateCardColCSS from "./DateCardCol.module.css";

const DateCardCol = ({ title, eventOrganizer, dates, location, xs }) => {
  const initialDateMonth = dates.initialDate.toLocaleString("en-US", {
    month: "short",
  });
  const endDateMonth = dates.endDate.toLocaleString("en-US", { month: "long" });
  return (
    <Col
      xs={xs}
      className={`${dateCardColCSS.card} ${dateCardColCSS["event-card"]} rounded-3`}
    >
      <Row className="h-100">
        <Col xs="3" className={dateCardColCSS["side-date"]}>
          <span className={`${dateCardColCSS.day}`}>
            {dates.initialDate.getDate()}
          </span>
          <span className={`${dateCardColCSS.month}`}>{initialDateMonth}</span>
        </Col>
        <Col className="pt-2 pb-3">
          <Row className="align-content-between h-100">
            <Col xs="12" className={dateCardColCSS["card-title"]}>
              {title}
              <div className={dateCardColCSS["event-organizer"]}>
                <img
                  src={eventOrganizer.image}
                  className="d-inline-block"
                  alt={`Picture of ${eventOrganizer.name}`}
                />
                <span className="d-inline-block">{eventOrganizer.name}</span>
              </div>
            </Col>
            <Col xs="12" className={dateCardColCSS["event-details"]}>
              <div className="d-inline-block">
                <img
                  className={dateCardColCSS.icon}
                  src={locationIcon}
                  alt="Location icon"
                />
                <span>{location}</span>
              </div>
              <div className="d-inline-block">
                <img
                  className={dateCardColCSS.icon}
                  src={clockIcon}
                  alt="clock icon"
                />
                <span>{`${dates.initialDate.getDate()} to ${dates.endDate.getDate()} ${endDateMonth}`}</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default DateCardCol;
