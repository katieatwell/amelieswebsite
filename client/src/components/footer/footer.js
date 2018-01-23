import React, { Component } from 'react';
import { Row } from "reactstrap";
import "./footer.css";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Row>
                    <div className="footerContainer">
    
                        <div className="textContent">
                              <a href="/contact-us">Contact Us</a>
                        </div>
                        
                        <div className="textContent">
                            <a href="/careers">Careers</a>
                        </div>
                        
                        <div className="textContent">
                              <a href="/managerlogin">Manager Login</a>
                        </div>
                    
                    </div>
                </Row>
            </footer>
        )
    }
};
