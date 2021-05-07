import React from 'react';
import '../styles/Landing.css';
import CustomNavbar from "./CustomNavbar.jsx";
import { Container, Row, Col, Button } from "react-bootstrap";
import pic1 from "../assets/image-asset1.jpeg";
import pic2 from "../assets/image-asset2.jpeg";
import pic3 from "../assets/image-asset3.png";

const Landing = () => {
    return (
        <div className="landingpg">
            <CustomNavbar title={"TAR HEEL BORN. TAR HEEL BREWED."}></CustomNavbar>
            <div className="the-meantime-def" id="meantimedef">
                <div className="def-headerline futura-heavy">
                    <span className="def-header ">
                        THE MEANTIME
                    </span>
                    <span className="def-phonetic">
                        \ˈMĒN-ˌTĪM\
                    </span>
                </div>
                <br />
                <div className="def-definition proxima-reg"><span className="italicize">noun. </span>1. the intervening time or period, as between events (esp. in the phrase <span className="bold">in the meantime</span>)</div>
                <br />
                <div className="def-elaborate proxima-reg">As college students, we’re often dreaming of where we’ll be ten years from now. We talk so much about our career aspirations that we forget what we can accomplish during our four years in college – it’s just what we’re doing “in the meantime.” We believe that this phrase ought not to be an excuse, but rather a celebration. There is so much that Carolina students can accomplish during their four years. <span className="def-bigger">Why should we wait?</span></div>
            </div>
            <div className="greatcoffee-wrapper" id="bringing-unc-together">
                <div className="greatcoffee-header">BRINGING CAROLINA TOGETHER WITH GREAT COFFEE</div>
                <div className="greatcoffee-body futura-book bottom-element">The Meantime is a vibrant community hub where Tar Heels from all walks of campus - students, faculty, and staff - can come together over a cup of coffee to chat, listen, and connect.</div>
            </div>
            <div className="delishethos">
                <h1 className="de-header futura-heavy">
                    DELICIOUS + ETHICAL = AWESOME.
                </h1>
                <p className="de-body proxima-reg">
                    To deliver you the best coffee, The Meantime partners with an exceptional local business: Carrboro Coffee Roasters. Their sustainably-sourced and freshly roasted beans are good for the planet and great for your morning.
                </p>
                <Container className="de-pics">
                    <Row>
                        <Col lg={4}>
                            <img src={pic1} className="de-pic" alt="farmers"></img>
                        </Col>
                        <Col lg={4}>
                            <img src={pic2} className="de-pic" alt="carrboro coffee"></img>
                        </Col>
                        <Col lg={4}>
                            <img src={pic3} className="de-pic" alt="direct relationship"></img>
                        </Col>
                    </Row>
                </Container>
                <Button variant="outline-dark" className="landing-btn bottom-element" href="/our-coffee"><div className="proxima-reg ldgbtn-text">LEARN MORE ABOUT OUR COFFEE</div></Button>

            </div>
            <div className="empower-wrapper" id="students-empowering-students">
                <div className="empower-header">STUDENTS EMPOWERING STUDENTS</div>
                <div className="empower-body futura-book">It's not just about satisfying Carolina's caffeine craving. With each cup of coffee bought at The Meantime, the Carolina community supports the professional development of its students and encourages a flourishing entrepreneurial landscape at UNC. </div>
                <Button variant="outline-light" className="landing-btn bottom-element" href="/our-impact"><div className="proxima-reg ldgbtn-text">LEARN MORE ABOUT OUR IMPACT</div></Button>
            </div>
            <div className="likeit">
                <h1 className="like-header futura-heavy">
                    LIKE WHAT WE'RE BREWING?
                </h1>
                <p className="like-body proxima-reg">
                Everyone who works for The Meantime, from barista to CEO, is a student at Carolina. If you're intrigued by our winning combination of student passion and excellent coffee, come visit us at the Campus Y!
                </p>
                <Button variant="outline-dark" className="landing-btn bottom-element" href="/contact"><div className="proxima-reg ldgbtn-text">CONTACT US</div></Button>
            </div>
        </div>)
}

export default Landing;