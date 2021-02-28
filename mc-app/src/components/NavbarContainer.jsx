import React, { useState } from 'react';
import { Navbar, Nav, Button, NavDropdown, Image } from 'react-bootstrap';
import { Route, Switch, Link } from 'react-router-dom';
import OurCoffee from './OurCoffee.jsx';
import OurImpact from './OurImpact.jsx';
import News from './News.jsx';
import JoinTheTeam from './JoinTheTeam.jsx';
import ContactUs from './ContactUs.jsx';
import Landing from './Landing.jsx';
import logo from '../assets/big-logo.png';

const NavbarContainer = () => {
    const [navbg, setNavbg] = useState("../assets/pexels-photo.jpg");

    const navstyle = {
        height: '40vh',
        backgroundImage: 'url(' + navbg + ')'
    }

    const switchbg = (page) => {
        switch (page) {
            case "our-coffee":
                setNavbg("../assets/kahlo-coffee.jpg");
                break;
            case "our-impact":
                setNavbg("../assets/puppy.jpg");
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
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto roboto">
                            <Nav.Link onClick={() => switchbg("our-coffee")} href="/our-coffee">Our Coffee</Nav.Link>
                            <Nav.Link onClick={() => switchbg("our-impact")} href="/our-impact">Our Impact</Nav.Link>
                            <Nav.Link href="https://www.clover.com/online-ordering/meantime-coffee-company-chapel-hill">Order Online</Nav.Link>
                            <Nav.Link href="/blog">News</Nav.Link>
                            <Nav.Link href="/join-the-team">Join The Team</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <Switch id="bodyContent">
                <Route exact path="/" component={Landing} />
                <Route exact path="/our-coffee" component={OurCoffee} />
                <Route exact path="/our-impact" component={OurImpact} />
                <Route exact path="/blog" component={News} />
                <Route exact path="/join-the-team" component={JoinTheTeam} />
                <Route exact path="/contact" component={ContactUs} />
            </Switch>
        </>
    )
}

export default NavbarContainer;