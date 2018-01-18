import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import MenuPanel from "../menupanel";
import MenuContents from "../menucontents";

export default class FullMenu extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col m="3" l="4">
                        <MenuPanel />
                    </Col>
                    <Col m="9" l="8">
                        <MenuContents />
                    </Col>
                </Row>
            </div>
        );
    }
}
