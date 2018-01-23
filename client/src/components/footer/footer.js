import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import "./footer.css";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Row>
                    <Col xs="12" sm="12" md="12" className="footerContainer">
                        <p className="linksContainer">
                            <a href="/careers">Careers</a>
                            <span> | </span>
                            <a href="/managerlogin">Manager Login</a>
                        </p>
                        
                        <p className="socialMediaContainer">
                            <a href=""><img src="social_images/facebook.png" alt="facebookIcon" className="socialImg" /></a>
                            <a href=""><img src="social_images/twitter.png" alt="twitterIcon" className="socialImg" /></a>
                            <a href=""><img src="social_images/instagram.png" alt="instagramIcon" className="socialImg" /></a>
                            <a href=""><img src="social_images/yelp.png" alt="yelpIcon" className="socialImg" /></a>
                        </p>
                    </Col>

                </Row>
            </footer>
        );
    }
}
