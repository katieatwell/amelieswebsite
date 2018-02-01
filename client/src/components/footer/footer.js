import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import "./footer.css";

export default class Footer extends Component {
    render() {
        return (

            <Row className="footerContainer">
                <Col xs="4" sm="4" md="4" >
                    <p className="copyright">
                        © Copyright 2018 <br/>
                        UNCC BootCamp
                    </p>
                </Col>
                
                <Col xs="4" sm="4" md="4" >
                    <p className="socialMediaContainer">
                        <a href="https://www.facebook.com/AmeliesFrenchBakery" target="_blank"><img src="social_images/facebook.png" alt="facebookIcon" className="socialImg" /></a>
                        <a href="https://twitter.com/AmeliesBakery" target="_blank"><img src="social_images/twitter.png" alt="twitterIcon" className="socialImg" /></a>
                        <a href="https://www.instagram.com/ameliesfrenchbakery/?hl=en" target="_blank"><img src="social_images/instagram.png" alt="instagramIcon" className="socialImg" /></a>
                        <a href="http://www.yelp.com/biz/am%C3%A9lies-french-bakery-charlotte-3?osq=Amelie%27s+French+Baker" target="_blank"><img src="social_images/yelp.png" alt="yelpIcon" className="socialImg" /></a>
                    </p>
                </Col>
                
                <Col xs="4" sm="4" md="4" >
                    <p className="linksContainer">
                        <a href="https://ameliesfrenchbakery.applicantpool.com/jobs/" target="_blank" className="footerLink" rel="noopener noreferrer">Careers</a>
                        <br/>
                        <a href="/managerlogin" className="footerLink">Manager Login</a>
                        <br />
                        <a href="/contact-us" className="footerLink">Become a VIP Member</a>
                    </p>
                </Col>
            </Row>
        );
    }
}
