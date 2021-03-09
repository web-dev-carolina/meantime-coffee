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
                </Row>
            </div>
        </>
    )
}

export default NavbarContainer;