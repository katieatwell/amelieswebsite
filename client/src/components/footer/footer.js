import React, { Component } from 'react';
import { Row, Col, NavLink } from "reactstrap";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Row>
                    <div className="footerContainer">
                    <div className="textContent">
                        <a href="/careers">Careers</a>  
                    </div>
                    <div className="textContent">
                          <a href="/locations">Locations</a>
                    </div>
                    <div className="textContent">
                          <a href="/contactus">Contact Us</a>
                    </div>
                    </div>
                </Row>
            </footer>
        )
    }
};
