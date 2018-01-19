import React from 'react';
import { Card, CardBody,
  CardText } from 'reactstrap';

const PanelTextBox = (props) => {
  return (
      <Card>
        <CardBody>
          <CardText>{props.children}</CardText>
        </CardBody>
      </Card>
  );
};

export default PanelTextBox;
