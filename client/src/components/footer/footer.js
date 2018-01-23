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
                            <a href=""><img src="social_images/facebook.png" className="socialImg" /></a>
                            <a href=""><img src="social_images/twitter.png" className="socialImg" /></a>
                            <a href=""><img src="social_images/instagram.png" className="socialImg" /></a>
                            <a href=""><img src="social_images/yelp.png" className="socialImg" /></a>
                        </p>
                    </Col>

                </Row>
            </footer>
        );
    }
}
