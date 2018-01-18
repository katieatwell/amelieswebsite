import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap';
import "./style.css";

class MainPanel extends Component {
    render() {
  return (
        <div>
          <Card id="MainPanel">
            <CardBody>
              <CardTitle id="CardTitle">Card title</CardTitle>
              <CardText>{this.props.children}</CardText>
            </CardBody>
          </Card>
        </div>
        );
    }
}

export default MainPanel;