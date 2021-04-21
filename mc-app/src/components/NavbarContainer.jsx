import React, { useState } from 'react';
import { Navbar, Nav, Row, Col, Image } from 'react-bootstrap';
import { Route, Switch, Link } from 'react-router-dom';
import OurCoffee from './OurCoffee.jsx';
import OurImpact from './OurImpact.jsx';
import News from './News.jsx';
import JoinTheTeam from './JoinTheTeam.jsx';
import ContactUs from './ContactUs.jsx';
import Landing from './Landing.jsx';
import logo from '../assets/big-logo.png';
import landingbg from '../assets/pexels-photo.jpg';
import '../styles/NavbarContainer.css';
import '../styles/Footer.css';

const NavbarContainer = () => {
    /* keep this - trying to change the navbar bg on page change */
    const [navbg, setNavbg] = useState("../assets/pexels-photo.jpg");
    const [pageName, setPageName] = useState("TAR HEEL BORN. TAR HEEL BREWED.");

    const navstyle = {
        height: '40vh',
        backgroundImage: 'url(' + navbg + ')',
    };

    const switchbg = (page) => {
        console.log("switch bg");
        switch (page) {
            case "our-coffee":
                setNavbg("../assets/kahlo-coffee.jpg");
                setPageName("OUR COFFEE");
                break;
            case "our-impact":
                setNavbg("../assets/puppy.jpg");
                setPageName("OUR IMPACT");
                break;
            default:
                setNavbg("../assets/pexels-photo.jpg");
        }
    }

    return (
        <>
            <div style={navstyle}>
                <Navbar sticky="top" className="navbar" expand="md" collapseOnSelect>
                        <Navbar.Brand onClick={() => switchbg("")} className="mr-auto logo-nav" href="/">
                            <img className="mx-5 px-5" src={logo} width="auto" height="100"></img>
                        </Navbar.Brand>
                        <Navbar.Toggle></Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto futura-med nav-links">
                                <Nav.Link onClick={() => switchbg("our-coffee")} href="/our-coffee">OUR COFFEE</Nav.Link>
                                <Nav.Link onClick={() => switchbg("our-impact")} href="/our-impact">OUR IMPACT</Nav.Link>
                                <Nav.Link href="https://www.clover.com/online-ordering/meantime-coffee-company-chapel-hill">ORDER ONLINE</Nav.Link>
                                <Nav.Link href="/blog">NEWS</Nav.Link>
                                <Nav.Link href="/join-the-team">JOIN THE TEAM</Nav.Link>
                                <Nav.Link href="/contact">CONTACT US</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
                {pageName}
            </div>

            <Switch id="body-content">
                <Route exact path="/" component={Landing} />
                <Route exact path="/our-coffee" component={OurCoffee} />
                <Route exact path="/our-impact" component={OurImpact} />
                <Route exact path="/blog" component={News} />
                <Route exact path="/join-the-team" component={JoinTheTeam} />
                <Route exact path="/contact" component={ContactUs} />
            </Switch>
            <div>
                <Row>
                    {/* footer goes here */}
                    <footer id="footer">
                        <div class="footer-wrapper">
                            <div class="social-footer-icons">
                                <ul class="menu-simple">
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                                    <li><a href="https://www.facebook.com/meantimecoffee/"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a></li>
                                    <li><a href="https://twitter.com/meantimecoffee"><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a></li>
                                    <li><a href="http://instagram.com/meantimecoffee"><i class="fa fa-instagram fa-lg" aria-hidden="true"></i></a></li>
                                    <li><a href="mailto:marketing@meantimecoffee.com"><i class="fa fa-envelope fa-lg" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>

                            <div class="footer-content">
                                <div class="footer-column">
                                    <h2>Location</h2>
                                    <p style={{textAlign: "center"}}>
                                        <em style={{color: "white"}}>UNC Campus Y</em>
                                        <br></br>
                                        180 E Cameron Ave
                                        <br></br>
                                        Chapel Hill, NC 27514
                                    </p>
                                </div>
                                <div class="footer-column">
                                    <h2>Café Hours</h2>
                                    <p style={{textAlign: "center"}}>
                                    Monday – Friday
                                    <br></br>
                                    9:00am – 4:00pm
                                    </p>
                                </div>
                            </div>
                            {/*map */}
                            <div class="map">
                                <p style={{textAlign: "center"}}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d807.8633838220095!2d-79.05176377079127!3d35.911397298758814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acc2e84532ea11%3A0xab78cc915a63ea69!2s180%20E%20Cameron%20Ave%2C%20Chapel%20Hill%2C%20NC%2027514!5e0!3m2!1sen!2sus!4v1618979799330!5m2!1sen!2sus" width="1000" height="175" allowfullscreen="" loading="lazy"></iframe>
                                </p>
                            </div>
                        </div>
                    </footer>
                    {/* footer goes here */}
                </Row>
            </div>
        </>
    )
}

export default NavbarContainer;