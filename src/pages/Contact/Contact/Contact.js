import emailjs from 'emailjs-com';
import React from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import "./Contact.css";

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_vvi37ho', 'template_ge44qpr', e.target, 'user_RUpQSThF0gMSLd9vpXPnx')
            .then((result) => {
                console.log(result.text);
                alert("Thank You for your Message, I will reply to you soon!");
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <>
            <h1 className="pt-3 text-center  pb-3">CONTACT ME</h1>
            <div>
                <form className="contact-form  p-5" onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <br />
                    <br />
                    <label>Email Address</label>
                    <input type="email" name="user_email" />
                    <br />
                    <br />
                    <label>Message</label>
                    <textarea name="message" />
                    <br />
                    <input type="submit" value="Send" />
                </form>
            </div>
            {/* social */}
            <div>
                <Jumbotron className="contact-jumbotron">
                    <Row>
                        <Col className="d-flex justify-content-center flex-wrap">
                            <div className="m-2">
                                <a href="mailto:owali.shawon@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-danger" title="owali.shawon@gmail.com">
                                        <i className="fas fa-envelope-square"></i> Email Me
                </Button>
                                </a>
                            </div>
                            <div className="m-2">
                                <a href="linkedin.com/in/owalishawon/" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-primary" title="Visit my LinkenIn">
                                        <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
                                </a>
                            </div>

                            <div className="m-2">
                                <a href="https://github.com/OwaliShawon" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-dark" title="My other projects">
                                        <i className="fab fa-github-square"></i> GitHub
                </Button>
                                </a>
                            </div>
                            <div className="m-2">
                                <a href="https://www.youtube.com/user/oshawon" target="_blank" rel="noopener noreferrer">
                                    <Button id="youtube-btn" variant="outline-info" title="Lets code together!">
                                        <i class="fab fa-youtube"></i> Youtube
                </Button>
                                </a>
                            </div>
                            <div className="m-2">
                                <a href="https://twitter.com/OwaliShawon" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-info" title="Tweets are welcomed!">
                                        <i className="fab fa-twitter"></i> Twitter
                </Button>
                                </a>
                            </div>
                            <div className="m-2">
                                <a href="https://www.facebook.com/OwaliShawon/" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-primary" title="Say hello on FB">
                                        <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        </>

    );
};

export default Contact;