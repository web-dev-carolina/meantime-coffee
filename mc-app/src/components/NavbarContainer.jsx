import React, { useState } from 'react';
import { Navbar, Nav, Row, Col, Image } from 'react-bootstrap';
import { Route, Switch, Link } from 'react-router-dom';
import OurCoffee from './OurCoffee.jsx';
import OurImpact from './OurImpact.jsx';
import News from './News.jsx';
import JoinTheTeam from './JoinTheTeam.jsx';
import ContactUs from './ContactUs.jsx';
import Landing from './Landing.jsx';
import Footer from './Footer.jsx';
import logo from '../assets/big-logo.png';
import landingbg from '../assets/pexels-photo.jpg';
import '../styles/NavbarContainer.css';

const NavbarContainer = () => {
    return (
        <>
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
                    <Footer />
                </Row>
            </div>
        </>
    )
}

export default NavbarContainer;