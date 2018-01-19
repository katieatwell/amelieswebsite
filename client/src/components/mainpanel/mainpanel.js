import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';
import "./style.css";

class MainPanel extends Component {
    render() {
    return (
            <Card id="MainPanel">
              <CardBody>
                <CardText>{this.props.children}</CardText>
              </CardBody>
            </Card>
        );
    }
}

export default MainPanel;