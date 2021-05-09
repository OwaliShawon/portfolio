import { Events, ImageEvent, Timeline, UrlButton } from "@merc/react-timeline";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import DorakataShop from "../../../assests/images/projects/doratakata-shop.png";
// projects
import weddingartista from "../../../assests/images/projects/wedding-artista-home.png";
import L_BOOTSTRAP from "../../../assests/images/skills/bootstrap-4.svg";
import L_CSS3 from "../../../assests/images/skills/css3.svg";
import L_HTML5 from "../../../assests/images/skills/html-5.svg";
// skills
import L_REACT from "../../../assests/images/skills/react.svg";
import "./projects-timeline.styles.css";





const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Wedding Artista */}
          <ImageEvent
            date="05/2020"
            className="text-center"
            text="Wedding Artista"
            src={weddingartista}
            alt="Wedding Artista"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        Responsive project with firebase authentication, a photography servicing website where you can find many services and
get an appointment date for your require service.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Only admin can update the client requested booking status and add new admin.</li>
                          <li>Admin can add product , delete order or edit product details and add a new admin.</li>
                          <li>Only admin can update the client requested booking status and add new admin.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://wedding-artista.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Porgramming-Hero-web-course/complete-website-client-OwaliShawon"
                  target="_blank"
                >
                  CLIENT
                </UrlButton>
                <UrlButton
                  href="https://github.com/Porgramming-Hero-web-course/complete-website-server-OwaliShawon"
                  target="_blank"
                >
                  SERVER
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project Dorakata Shop */}
          <ImageEvent
            date="05/2020"
            className="text-center"
            text="Dorakata Shop"
            src={DorakataShop}
            alt="Dorakata Shop"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        Responsive project with firebase authentication, admin authentication and dashboard functionality for customer and
admin.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>The client has the ability to request a order, check the status of the requested order from the client dashboard.</li>
                          <li>Admin can add product , delete order or edit product details and add a new admin.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://dorakata-shop.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Porgramming-Hero-web-course/full-stack-client-OwaliShawon  "
                  target="_blank"
                >
                  CLIENT
                </UrlButton>
                <UrlButton
                  href="https://github.com/Porgramming-Hero-web-course/full-stack-server-OwaliShawon  "
                  target="_blank"
                >
                  SERVER
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* football freak league */}
          {/* Project Dorakata Shop */}
          <ImageEvent
            date="05/2020"
            className="text-center"
            text="Dorakata Shop"
            src={DorakataShop}
            alt="Dorakata Shop"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        Responsive project with firebase authentication, admin authentication and dashboard functionality for customer and
admin.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>The client has the ability to request a order, check the status of the requested order from the client dashboard.</li>
                          <li>Admin can add product , delete order or edit product details and add a new admin.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://dorakata-shop.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Porgramming-Hero-web-course/full-stack-client-OwaliShawon  "
                  target="_blank"
                >
                  CLIENT
                </UrlButton>
                <UrlButton
                  href="https://github.com/Porgramming-Hero-web-course/full-stack-server-OwaliShawon  "
                  target="_blank"
                >
                  SERVER
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
