import React, { Component } from 'react';
import { Table, Row, Col, Button } from "reactstrap";
import "./menupanel.css";

export const MenuPanel = props =>
    <div className="menupanel">
    <Row>
    <Col m="2">
    <Table hover>
        <tbody>
            <tr>
                <Button>Breakfast</Button>
            </tr>
            <tr>
               <Button>Lunch/Dinner</Button>
            </tr>
            <tr>
                <Button>Coffee/Tea</Button>
            </tr>
            <tr>
                <Button>Desserts/Pastries</Button>
            </tr>
        </tbody>
    </Table> 
    </Col>
    </Row>
    </div>;
