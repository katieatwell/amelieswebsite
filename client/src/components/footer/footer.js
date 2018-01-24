import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import "./footer.css";

export default class Footer extends Component {
    render() {
        return (
            <Row className="footerContainer">
                <Col xs="4" sm="4" md="4" >
                    <p className="linksContainer">
                        <a href="/careers" className="footerLink">Careers</a>
                        <br/>
                        <a href="/managerlogin" className="footerLink">Manager Login</a>
                        <br />
                        <a href="/contact-us" className="footerLink">Become a VIP Member</a>
                    </p>
                </Col>
                
                <Col xs="4" sm="4" md="4" >
                    <p className="socialMediaContainer">
                        <a href=""><img src="social_images/facebook.png" alt="facebookIcon" className="socialImg" /></a>
                        <a href=""><img src="social_images/twitter.png" alt="twitterIcon" className="socialImg" /></a>
                        <a href=""><img src="social_images/instagram.png" alt="instagramIcon" className="socialImg" /></a>
                        <a href=""><img src="social_images/yelp.png" alt="yelpIcon" className="socialImg" /></a>
                    </p>
                </Col>
                                
                <Col xs="4" sm="4" md="4" >
                    <p className="copyright">
                        © Copyright 2018 <br/>
                        UNCC BootCamp
                    </p>
                </Col>
            </Row>
        );
    }
}
