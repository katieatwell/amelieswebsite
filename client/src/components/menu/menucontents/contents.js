import React from 'react';
import { Row, Col } from "reactstrap";
import { ItemSummary } from "./menuitem/itemsummary";
import { ItemTitle } from "./menuitem/itemtitle";
import "./contents.css";

export const MenuContent = props =>
    <div className="contents">
                <Row>
                    <Col m="2">
                        <ItemTitle/>
                        <ItemSummary/>
                    </Col>
                </Row>
            </div>;
