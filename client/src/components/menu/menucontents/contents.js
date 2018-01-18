import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import ItemSummary from "./menuitem/itemsummary";
import ItemTitle from "./menuitem/itemtitle";

export default class MenuContents extends Component {
    render() {
        return (
            <div className="contents">
                <Row>
                    <Col m="2">
                        <ItemTitle/>
                        <ItemSummary/>
                    </Col>
                </Row>
            </div>
        );
    }
}
