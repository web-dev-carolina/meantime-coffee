import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import CustomNavbar from "./CustomNavbar.jsx";
import '../styles/News.css';
import '../App.css';
import oz from '../assets/OznurIkiz.jpeg';
import em from '../assets/ElizabethMoore.jpeg';
import db from '../assets/DhvaniBhatia .jpeg';
import fz from '../assets/FehmiZengince.jpeg';
import gb from '../assets/GeoffBell.png';
import jr from '../assets/JackRobertson.jpeg';

const News = () => {
    return (<>
    <CustomNavbar title={"NEWS"}></CustomNavbar>
    <Container>
        <Row className="mainbox">
            <Col xs lg="4" className="leftBar">
                <h1 className="leftBarTxt futura-heavy"><strong>CONGRATULATIONS TO THE MEANTIME EXECUTIVE TEAM!</strong></h1>
                <p className="futura-book larger-font">April 25, 2019</p>
            </Col>
            <Col xs lg="8" className="rightBar">
                <Row className="execCard">
                    <Col>
                        <div className="execimg">
                            <img className="execimg" src={oz} alt="exec team member"></img>
                        </div></Col>
                    <Col>
                    <h2 className="futura-heavy">Chief Executive Officer - Oznur Ikiz</h2>
                    <p className="futura-book larger-font">“Meantime shaped my whole experience at Carolina, and already gave me so much that I cannot possibly begin to pay back. I am incredibly honored and grateful to have the opportunity to serve and give back to this wonderful organization, its staff and community.”</p>
                    <p className="futura-book larger-font">Favorite drink: Drip coffee</p>
                    </Col>
                </Row>


                <Row className="execCard">
                    <Col>
                        <div className="execimg">
                            <img className="execimg" src={em} alt="exec team member"></img>
                        </div></Col>
                    <Col>
                    <h2 className="futura-heavy">Chief Human Resources Officer - Elizabeth Moore</h2>
                    <p className="futura-book larger-font">“I love the community we've built around the people—from employees to customers—and the global impact.”</p>
                    <p className="futura-book larger-font">Favorite drink: 8 oz. Americano no room</p>
                    </Col>
                </Row>

                <Row className="execCard">
                    <Col>
                        <div className="execimg">
                            <img className="execimg" src={db} alt="exec team member"></img>
                        </div></Col>
                    <Col>
                    <h2 className="futura-heavy">Chief Marketing Officer - Dhvani Bhatia</h2>
                    <p className="futura-book larger-font">“I want find new and cool ways to engage with our customers and to share our story to make sure the Meantime is known for more than its coffee.”</p>
                    <p className="futura-book larger-font">Favorite drink: Iced lavender latte</p>
                    </Col>
                </Row>

                <Row className="execCard">
                    <Col>
                        <div className="execimg">
                            <img className="execimg" src={fz} alt="exec team member"></img>
                        </div></Col>
                    <Col>
                    <h2 className="futura-heavy">Chief Operations Officer - Fehmi Zengince</h2>
                    <p className="futura-book larger-font">“The family atmosphere at Meantime is something that I'll cherish for the rest of my life.”</p>
                    <p className="futura-book larger-font">Favorite drink: Oak milk hazelnut latte</p>
                    </Col>
                </Row>

                <Row className="execCard">
                    <Col>
                        <div className="execimg">
                            <img className="execimg" src={gb} alt="exec team member"></img>
                        </div></Col>
                    <Col>
                    <h2 className="futura-heavy">Chief Financial Officer - Geoff Bell </h2>
                    <p className="futura-book larger-font"><i>Goeff will be serving as CFO for the rest of the 2018-19 school year.</i></p>
                    <p className="futura-book larger-font">“My favorite part of The Meantime is that it is student-founded and student-operated. There aren’t many organizations with this sort of scale that can say that.”</p>
                    <p className="futura-book larger-font">Favorite drink: Drip coffee with no cream or sugar</p>
                    </Col>
                </Row>

                <Row className="execCard">
                    <Col>
                        <div className="execimg">
                            <img className="execimg" src={jr} alt="exec team member"></img>
                        </div></Col>
                    <Col>
                    <h2 className="futura-heavy">Chief Financial Officer - Jack Robertson </h2>
                    <p className="futura-book larger-font"><i>Jack will take over as CFO in Fall 2019.</i></p>
                    <p className="futura-book larger-font">Jack wants to continue making The Meantime a sustainable organization by developing its institutional memory.</p>
                    <p className="futura-book larger-font">Favorite drink: London fog</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    </>)
}

export default News;