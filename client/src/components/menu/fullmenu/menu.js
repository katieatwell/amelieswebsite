import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import { MenuPanel } from "../menupanel";
import { MenuContent } from "../menucontents";

class FullCafeMenu extends Component {
    render() {
        return (
            <div>
                <Row>
                        <MenuPanel/>
                        <MenuContent />
                </Row>
            </div>
        );
    }
}

export default FullCafeMenu;
