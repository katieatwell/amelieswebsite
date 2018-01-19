import React from 'react';
import { Container } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

export default class Wrapper extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" md="12">
            {this.props.children}
          </Col>
        </Row>
      </Container>
    );
  }
}
    
Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
};