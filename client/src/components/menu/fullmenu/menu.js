import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import { MenuPanel } from "../menupanel";
import { MenuContent } from "../menucontents";

class FullMenu extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col m="3" l="4">
                        <MenuPanel />
                    </Col>
                    <Col m="9" l="8">
                        <MenuContent />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default FullMenu;
