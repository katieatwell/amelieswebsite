import React, { Component } from "react";
import NavBar from "../../components/navbar";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import { Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import Footer from "../../components/footer";


class Locations extends Component {

    render() {
        return (
            <Container>
                <NavBar/>
                    <MainPanel>
                        <PanelTitle>
                            Locations
                        </PanelTitle>
                        
                        <PanelBody>
                            <Row>
                            <Col xs="12" sm="12" md="12">
                                <Link to="/noda">NoDa - Charlotte </Link> | 
                                <Link to="/uptown"> Uptown - Charlotte </Link> |  
                                <Link to="/parkroad"> Park Rd - Charlotte </Link> <br/>
                                <Link to="/carmelcommons"> Carmel Commons - Pineville </Link> |
                                <Link to="/rockhill"> Rock Hill - South Carolina </Link> |
                                <Link to="/atlanta"> Atlanta - Georgia</Link>
                            </Col>
                            </Row>
                            
                        </PanelBody>
                    </MainPanel>
                <Footer/>
            </Container>
        );
    }
}

export default Locations;
