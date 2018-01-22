import React, { Component } from "react";
import NavBar from "../../components/navbar";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import UpdateForm from "../../components/forms/managerupdate/updateform";
import ManagerSidebar from "../../components/managernav/sidebar";
import Footer from "../../components/footer";
import { Row, Col } from "reactstrap";


class ManagerView extends Component {

    render() {
        return (
            <Container>
                <NavBar/>
                <MainPanel>
                <Row>
                    <PanelTitle>
                        Update Menu Items:
                    </PanelTitle>
                 </Row>
                 <Row>
                  
                    <Col lg="5">
                        <ManagerSidebar />
                    </Col>
                   
                   
                    <Col lg="7">
                        <UpdateForm />
                    </Col>
                  
                </Row>
                </MainPanel>
                <Footer/>
            </Container>
        );
    }
}

export default ManagerView;
