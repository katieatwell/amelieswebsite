import React from 'react';
import { Row, Col } from "reactstrap";
import "./contents.css";

export const MenuContent = props =>
    <div className="menuContents">
                <Row>
                    <Col xs="12" s="12" md="12">
                        {props.children}
                    </Col>
                </Row>
            </div>;
