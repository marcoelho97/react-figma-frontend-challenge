import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";

import ImageCardCol from "../Cards/ImageCardCol";

import BasicCardCol from "../Cards/BasicCardCol";
import DateCardCol from "../Cards/DateCardCol";
import TopNavbarCSS from "./TopNavbar.module.css";

const TopNavbar = () => {
  const navbarItems = [
    {
      menuName: `Expertise`,
      hyperlink: "https://www.google.com/",
    },
    {
      menuName: `Jurisdictions`,
      hyperlink: "https://www.google.com/",
    },
    {
      menuName: `Team`,
      hyperlink: "https://www.google.com/",
    },
    {
      menuName: `IP News & Insights`,
      hyperlink: "https://www.google.com/",
      subMenus: [
        {
          subMenuName: "Opinion Articles",
          hyperlink: "https://www.google.com/",
        },
        {
          subMenuName: "Opinion Articles 2",
          hyperlink: "https://www.google.com/",
        },
        {
          subMenuName: "Opinion Articles 3",
          hyperlink: "https://www.google.com/",
        },
        {
          subMenuName: "Opinion Articles",
          hyperlink: "https://www.google.com/",
        },
        {
          subMenuName: "Opinion Articles 2",
          hyperlink: "https://www.google.com/",
        },
        {
          subMenuName: "Opinion Articles 3",
          hyperlink: "https://www.google.com/",
        },
      ],
      mainCard: {
        image:
          "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: `GI products such as figs, pepper and olive oil grow under cooperation between the EU and Africa`,
        categories: ["Case Study"],
        hyperlink: "https://www.google.com/",
      },
      secondaryCard: {
        subTitle: "Leaders League 2023",
        title: `The Legal 500: Intellectual Property Comparative Guide - Portugal`,
        categories: ["Press Release"],
        hyperlink: "https://www.google.com/",
      },
      eventCard: {
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
      },
    },
    {
      menuName: `About Us`,
      hyperlink: "https://www.google.com/",
    },
    {
      menuName: `Contacts`,
      hyperlink: "https://www.google.com/",
    },
  ];

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`align-items-end ${TopNavbarCSS.topnavbar}`}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto pe-5">
            {navbarItems.map((navbarItem, index) => (
              <Nav.Link
                key={`menu-item-${index}`}
                className={TopNavbarCSS["navbar-item"]}
                as={"div"}
              >
                <a href={navbarItem.hyperlink}>{navbarItem.menuName}</a>

                {navbarItem.subMenus?.length > 0 && (
                  <div className={`${TopNavbarCSS.submenu} py-5`}>
                    <Container>
                      <Row className={`gap-4`}>
                        <Col>
                          {navbarItem.subMenus.map((subMenuItem, index) => (
                            <div
                              key={index}
                              className={`${TopNavbarCSS["navbar-sub-item"]} ${
                                index < navbarItem.subMenus.length - 1 ? "" : ""
                              }`}
                            >
                              <a href={subMenuItem.hyperlink}>
                                {subMenuItem.subMenuName}
                              </a>
                            </div>
                          ))}
                        </Col>
                        <ImageCardCol
                          imageUrl={navbarItem.mainCard.image}
                          title={navbarItem.mainCard.title}
                          categories={navbarItem.mainCard.categories}
                        />
                        <Col>
                          <Row className={`gap-2 align-items-stretch h-100`}>
                            <BasicCardCol
                              xs="12"
                              title={navbarItem.secondaryCard.title}
                              subTitle={navbarItem.secondaryCard.subTitle}
                              categories={navbarItem.mainCard.categories}
                            />
                            <DateCardCol
                              xs="12"
                              title={navbarItem.eventCard.title}
                              eventOrganizer={
                                navbarItem.eventCard.eventOrganizer
                              }
                              dates={navbarItem.eventCard.dates}
                              location={navbarItem.eventCard.location}
                            />
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                )}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
