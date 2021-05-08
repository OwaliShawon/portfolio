// import classes from '*.module.css';
// import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { ImageEvent, UrlButton } from "@merc/react-timeline";
import React from 'react';
import { Accordion, Card, Image } from 'react-bootstrap';
import L_CSS3 from "../../../assests/images/skills/css3.svg";
import L_HTML5 from "../../../assests/images/skills/html-5.svg";
import "./Project.css";


const Project = ({ project }) => {
    console.log(project);
    return (
        <div>
            <ImageEvent
                date="01/10/2020"
                className="text-center"
                text="React ToDo App"
                src={project.img}
                alt="React ToDo App"
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
                                        <strong>Description:</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                                                <hr />
                                        <strong>Features:</strong>
                                        <ul className="list-styles pt-1">
                                            <li>Keeps track of your Todos</li>
                                            <li>Powered by React and Material UI</li>
                                            <li>Respoisive Design</li>
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
                                        </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                            href="https://akjha96.github.io/Todo-List-React/"
                            target="_blank"
                        >
                            SEE LIVE
                                </UrlButton>
                        <UrlButton
                            href="https://github.com/akjha96/Todo-List-React"
                            target="_blank"
                        >
                            SOURCE CODE
                                </UrlButton>
                        <UrlButton
                            href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-materialui-fun-activity-6716765686963826688-GIpZ"
                            target="_blank"
                        >
                            WATCH VIDEO
                                </UrlButton>
                    </div>
                </div>
            </ImageEvent>


            {/* <h1>{project.name}</h1>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={project.img}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card> */}
        </div>
    );
};

export default Project;