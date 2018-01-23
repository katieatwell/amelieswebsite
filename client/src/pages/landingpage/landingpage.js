import React, { Component } from "react";
import NavBar from "../../components/navbar";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel"
import PanelBody from "../../components/paragraphdiv/ptextbox";
import { Row, Col } from "reactstrap";
import Footer from "../../components/footer";
import "./landingpage.css";


class LandingPage extends Component {

    render() {
        return (
            <div>
                <NavBar />
                    <Container>
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
                    </Container>
                <Footer />
        </div>
        );
    }
}

export default LandingPage;
