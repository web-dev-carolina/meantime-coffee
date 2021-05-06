import React from 'react';
import { Route, Switch } from 'react-router-dom';
import OurCoffee from './OurCoffee.jsx';
import OurImpact from './OurImpact.jsx';
import News from './News.jsx';
import JoinTheTeam from './JoinTheTeam.jsx';
import ContactUs from './ContactUs.jsx';
import Landing from './Landing.jsx';
import Footer from './Footer.jsx';
import '../styles/NavbarContainer.css';
import '../styles/Footer.css';

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
                <Footer />
            </div>        
        </>
    )
}

export default NavbarContainer;