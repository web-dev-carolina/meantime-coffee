import React, { useContext } from 'react';
import { Navbar, Nav, Button, NavDropdown, Image } from 'react-bootstrap';
import { Route, Switch, Link } from 'react-router-dom';
import OurCoffee from './OurCoffee.jsx';
import OurImpact from './OurImpact.jsx';
import News from './News.jsx';
import JoinTheTeam from './JoinTheTeam.jsx';
import ContactUs from './ContactUs.jsx';
import logo from '../assets/big-logo.png';

const NavbarContainer = () => {
    return (
        <>
            <Navbar sticky="top" variant="light" className="navbar" expand="md" collapseOnSelect>
                <Navbar.Brand className="mr-auto logo-nav" href="/">
                    <img src={logo} width="auto" height="80"></img>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto roboto">
                        <Nav.Link href="/our-impact">Our Impact</Nav.Link>
                        <Nav.Link href="https://www.clover.com/online-ordering/meantime-coffee-company-chapel-hill">Order Online</Nav.Link>
                        <Nav.Link href="/blog">News</Nav.Link>
                        <Nav.Link href="/join-the-team">Join The Team</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch id="bodyContent">
                <Route exact path="/" component={OurCoffee} />
                <Route exact path="/our-impact" component={OurImpact} />
                <Route exact path="/blog" component={News} />
                <Route exact path="/join-the-team" component={JoinTheTeam} />
                <Route exact path="/contact" component={ContactUs} />
            </Switch>
        </>
    )
}

export default NavbarContainer;