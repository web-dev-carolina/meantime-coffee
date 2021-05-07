import React from "react";
import { Navbar, Nav, Row } from 'react-bootstrap';
import logo from '../assets/big-logo.png';
import '../styles/CustomNavbar.css';

const CustomNavbar = (props) => {
    const { title } = props;
    const classname = title.replace(/\./g, "").split(' ').join('-');
    const [hovered, setHovered] = React.useState(false);

    return (
        <div className={"custom-nav " + classname} onMouseLeave={() => setHovered(false)}>
            <Navbar className="navbar" variant="dark" expand="lg" collapseOnSelect>
                <Navbar.Brand className="mr-auto logo-nav" href="/">
                    <img className="nav-logo" src={logo} width="auto" height="100" alt="custom navbar bg"></img>
                </Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-4">
                        <Row className="ml-auto futura-med nav-links">
                            <Nav.Link href="/our-coffee">OUR COFFEE</Nav.Link>
                            <Nav.Link href="/our-impact">OUR IMPACT</Nav.Link>
                            <Nav.Link href="https://www.clover.com/online-ordering/meantime-coffee-company-chapel-hill" target="_blank">ORDER ONLINE</Nav.Link>
                            <Nav.Link href="/blog">NEWS</Nav.Link>
                            <Nav.Link href="/join-the-team">JOIN THE TEAM</Nav.Link>
                            <Nav.Link href="/contact">CONTACT US</Nav.Link>
                        </Row>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="page-title">
                {title}
            </div>
            {title === "TAR HEEL BORN. TAR HEEL BREWED." ?
                <div>
                    <div className="landing-subtitle futura-book">UNC Chapel Hill's only student-run, non-profit coffee shop</div>
                    <div className="btn-wrapper">
                        <div className="scrollbtn">
                            <a href="#meantimedef" className="btn-a" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                {hovered ? <div className="proxima-reg scroll-down">SCROLL DOWN</div> : <i className="fa fa-angle-down fa-3x" aria-hidden="true"></i>}
                            </a></div></div>
                </div> : <></>}
        </div>
    )
}

export default CustomNavbar;