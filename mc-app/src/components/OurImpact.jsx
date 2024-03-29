import React, { } from 'react';
import '../styles/OurImpact.css';
import CustomNavbar from "./CustomNavbar.jsx";
import campusy from '../assets/campus-y.jpg';

const OurImpact = () => {
    return (<>
        <CustomNavbar title={"OUR IMPACT"}></CustomNavbar>
        <div className="impact-content">
            <header className="impact-header">
                <h2 className="futura-med">Giving back to Carolina one cup at a time.</h2>
                <p className="futura-book text-center">The Meantime is housed inside the Campus Y, allowing it to be at the Center of Social Justice and Social Innovation. </p>
            </header>

            <div className="storefront-img-wrapper">
                <img className="storefront-img" src={campusy} alt="storefront of Meantime Coffee"></img>
            </div>

            <div className="impact-grid">
                <div className="column">
                    <h2 className="futura-med">Professional Development</h2>
                    <p className="futura-book">The Meantime is entirely student-run, from barista to CEO. We create <strong>hands-on business experience</strong> not offered by similar on-campus enterprises. 
                        Everyone joins our team as a barista with the opportunity to make coffee, create community, or develop the business.</p>
                </div>
                <div className="column">
                    <h2 className="futura-med">Student-Driven Funding</h2>
                    <p className="futura-book">The Meantime supports the thriving Carolina community it calls home by <strong>reinvesting profits into student scholarships and grants.</strong> 
                        We believe that our fellow Tar Heels can creatively impact this campus, so we invest in making their visions a reality.</p>
                </div>
                <div className="column">
                    <h2 className="futura-med">Sustainable Food Hub</h2>
                    <p className="futura-book">We support other <strong>student food ventures and local businesses</strong> by providing a testing ground on campus. 
                        We sell baked goods from <a href="https://heellife.unc.edu/organization/thesondermarket"><em>The Sonder Market</em></a>, a student-run initiative that combats food insecurity in our community. 
                        We source our coffee from <a href="https://carrborocoffee.com/"><em>Carrboro Coffee Roasters</em></a>, a sustainable roastery just down the road.</p>
                </div>
            </div>

            <div className="learn-more futura-book mb-5"><a className="learn-more-button" href="https://campusy.unc.edu/" target="_blank" rel="noreferrer">LEARN MORE ABOUT THE CAMPUS Y</a></div>
        </div>

    </>)
}

export default OurImpact;