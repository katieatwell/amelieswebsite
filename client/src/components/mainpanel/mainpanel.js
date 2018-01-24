import React, { Component } from 'react';
import { Row, Col } from 'reactstrap'
import "./style.css";

class MainPanel extends Component {
  render() {
    return (
      <Row>
          <Col xs="12" sm="12" md="12" >
            <div id="MainPanel">
              {this.props.children}
            </div>
          </Col>
      </Row>
    );
  }
}

export default MainPanel;
