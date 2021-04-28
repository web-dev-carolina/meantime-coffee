import React from "react";
import { Navbar, Nav, Row, Col, Image } from 'react-bootstrap';
import logo from '../assets/big-logo.png';
import '../styles/CustomNavbar.css';

const CustomNavbar = (props) => {
    const { title } = props;
    const classname = title.replace(/\./g, "").split(' ').join('-');

    return (
        <div className={"custom-nav " + classname}>
            <Navbar className="navbar" dark expand="lg" collapseOnSelect>
                <Navbar.Brand className="mr-auto logo-nav" href="/">
                    <img className="nav-logo" src={logo} width="auto" height="100"></img>
                </Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto futura-med nav-links">
                        <Nav.Link href="/our-coffee">OUR COFFEE</Nav.Link>
                        <Nav.Link href="/our-impact">OUR IMPACT</Nav.Link>
                        <Nav.Link href="https://www.clover.com/online-ordering/meantime-coffee-company-chapel-hill">ORDER ONLINE</Nav.Link>
                        <Nav.Link href="/blog">NEWS</Nav.Link>
                        <Nav.Link href="/join-the-team">JOIN THE TEAM</Nav.Link>
                        <Nav.Link href="/contact">CONTACT US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="page-title">
                {title}
            </div>
        </div>
    )
}

export default CustomNavbar;