import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";

import basicCardColCSS from "./BasicCardCol.module.css";

const BasicCardCol = ({ subTitle, title, categories, xs }) => {
  return (
    <Col
      xs={xs}
      className={`${basicCardColCSS.card} ${basicCardColCSS["main-card"]} rounded-3 pt-2 pb-3 d-flex flex-column justify-content-between`}
    >
      <div>
        <small className={basicCardColCSS["card-subtitle"]}>{subTitle}</small>
        <div className={basicCardColCSS["card-title"]}>{title}</div>
      </div>
      <div>
        {categories.map((category, index) => (
          <Badge
            pill
            key={`CardCategory-${category}-${index}`}
            bg="light"
            text="dark"
            className={`border border-dark me-2 ${basicCardColCSS["card-badge"]}`}
          >
            {category}
          </Badge>
        ))}
      </div>
    </Col>
  );
};

export default BasicCardCol;
