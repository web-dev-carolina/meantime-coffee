import React, {} from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import CustomNavbar from "./CustomNavbar.jsx";
import '../styles/News.css';
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
        <Row>
            <Col xs lg="4" className="leftBar">
                <h1 className="leftBarTxt"><strong>CONGRATULATIONS TO THE MEANTIME EXECUTIVE TEAM!</strong></h1>
                <p>April 25, 2019</p>
            </Col>
            <Col xs lg="8" className="rightBar">
                <Row className="execCard">
                    <Col>
                        <div className="execimg">
                            <img className="execimg" src={oz}></img>
                        </div></Col>
                    <Col>
                    <h2>Chief Executive Officer - Oznur Ikiz</h2>
                    <p>“Meantime shaped my whole experience at Carolina, and already gave me so much that I cannot possibly begin to pay back. I am incredibly honored and grateful to have the opportunity to serve and give back to this wonderful organization, its staff and community.”</p>
                    <p>Favorite drink: Drip coffee</p>
                    </Col>
                </Row>


                <Row className="execCard">
                    <Col>
                        <div className="execimg">
                            <img className="execimg" src={em}></img>
                        </div></Col>
                    <Col>
                    <h2>Chief Human Resources Officer - Elizabeth Moore</h2>
                    <p>“I love the community we've built around the people—from employees to customers—and the global impact.”</p>
                    <p>Favorite drink: 8 oz. Americano no room</p>
                    </Col>
                </Row>

                <Row className="execCard">
                    <Col>
                        <div className="execimg">
                            <img className="execimg" src={db}></img>
                        </div></Col>
                    <Col>
                    <h2>Chief Marketing Officer - Dhvani Bhatia</h2>
                    <p>“I want find new and cool ways to engage with our customers and to share our story to make sure the Meantime is known for more than its coffee.”</p>
                    <p>Favorite drink: Iced lavender latte</p>
                    </Col>
                </Row>

                <Row className="execCard">
                    <Col>
                        <div className="execimg">
                            <img className="execimg" src={fz}></img>
                        </div></Col>
                    <Col>
                    <h2>Chief Operations Officer - Fehmi Zengince</h2>
                    <p>“The family atmosphere at Meantime is something that I'll cherish for the rest of my life.”</p>
                    <p>Favorite drink: Oak milk hazelnut latte</p>
                    </Col>
                </Row>

                <Row className="execCard">
                    <Col>
                        <div className="execimg">
                            <img className="execimg" src={gb}></img>
                        </div></Col>
                    <Col>
                    <h2>Chief Financial Officer - Geoff Bell </h2>
                    <p><i>Goeff will be serving as CFO for the rest of the 2018-19 school year.</i></p>
                    <p>“My favorite part of The Meantime is that it is student-founded and student-operated. There aren’t many organizations with this sort of scale that can say that.”</p>
                    <p>Favorite drink: Drip coffee with no cream or sugar</p>
                    </Col>
                </Row>

                <Row className="execCard">
                    <Col>
                        <div className="execimg">
                            <img className="execimg" src={jr}></img>
                        </div></Col>
                    <Col>
                    <h2>Chief Financial Officer - Jack Robertson </h2>
                    <p><i>Jack will take over as CFO in Fall 2019.</i></p>
                    <p>Jack wants to continue making The Meantime a sustainable organization by developing its institutional memory.</p>
                    <p>Favorite drink: London fog</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    </>)
}

export default News;