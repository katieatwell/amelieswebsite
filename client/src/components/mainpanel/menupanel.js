import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';
import { Row, Col } from 'reactstrap'
import "./style.css";

class MenuPanel extends Component {
    render() {
        return (
            <Row>
                <Col xs="12" sm="12" md="12" >
                    <div id="MenuPanel">
                        {this.props.children}
                    </div>
                </Col>
            </Row>
        );
    }
}

export default MenuPanel;
