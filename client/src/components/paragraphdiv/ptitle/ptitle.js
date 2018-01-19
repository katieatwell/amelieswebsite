import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

const PanelTitle = (props) => {
  return (
      <Card>
        <CardBody>
          <CardTitle>{props.children}</CardTitle>
        </CardBody>
      </Card>
  );
};

export default PanelTitle;


