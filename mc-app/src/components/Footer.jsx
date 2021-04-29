import React from "react";
import { Row, Col } from 'react-bootstrap';

const Footer = (props) => {
    return (
        <div>
            <Row>
                {/* footer goes here */}
                <footer id="footer">
                    <div className="footer-wrapper">
                        <div className="social-footer-icons py-3">
                            <ul className="menu-simple">
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                                <li><a href="https://www.facebook.com/meantimecoffee/"><i className="fa fa-facebook fa-lg" aria-hidden="true"></i></a></li>
                                <li><a href="https://twitter.com/meantimecoffee"><i className="fa fa-twitter fa-lg" aria-hidden="true"></i></a></li>
                                <li><a href="http://instagram.com/meantimecoffee"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></a></li>
                                <li><a href="mailto:marketing@meantimecoffee.com"><i className="fa fa-envelope fa-lg" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>

                        <Row className="footer-content" >
                            <Col className="footer-column " sm={6}>
                                <h3 className="proxima-reg footer-title ">Café Hours</h3>
                                <p style={{ textAlign: "center" }} className="proxima-reg footer-text ">
                                    Monday – Friday
                                    <br></br>
                                    9:00am – 4:00pm
                                    </p>
                            </Col>
                            <Col className="footer-column " sm={6}>
                                <h3 className="proxima-reg footer-title ">Location</h3>
                                <p style={{ textAlign: "center" }} className="proxima-reg footer-text ">
                                    <em style={{ color: "white" }}>UNC Campus Y</em>
                                    <br></br>
                                        180 E Cameron Ave
                                        <br></br>
                                        Chapel Hill, NC 27514
                                    </p>
                            </Col>
                        </Row>
                        {/*map */}
                        <div className="map">
                            <p style={{ textAlign: "center" }}>
                                <iframe className="responsive-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d807.8633838220095!2d-79.05176377079127!3d35.911397298758814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acc2e84532ea11%3A0xab78cc915a63ea69!2s180%20E%20Cameron%20Ave%2C%20Chapel%20Hill%2C%20NC%2027514!5e0!3m2!1sen!2sus!4v1618979799330!5m2!1sen!2sus" width="1000" height="150" loading="lazy"></iframe>
                            </p>
                        </div>
                    </div>
                </footer>
                {/* footer goes here */}
            </Row>
        </div>)
}

export default Footer;