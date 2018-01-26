import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import { Row, Col } from "reactstrap";
import "./landingpage.css";


class LandingPage extends Component {

    render() {
        return (
            <Wrapper>
                <MainPanel>
                    <PanelBody>
                        <Row className="firstRow">
                            <Col xs="12" sm="12" md="12">
                                Welcome to
                            </Col>
                        </Row>
                        
                        <Row className="secondRow">
                            <Col xs="12" sm="12" md="12">
                                <img src="/display_images/banner.png" alt="brand" className="bannerImg" />
                            </Col>
                            
                        </Row>
                    </PanelBody>
                </MainPanel>
            </Wrapper>
        );
    }
}

export default LandingPage;
