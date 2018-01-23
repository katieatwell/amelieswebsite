import React, { Component } from "react";
import NavBar from "../../components/navbar";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import ManagerLoginForm from "../../components/forms/managerlogin";
import Footer from "../../components/footer";


class ManagerLogin extends Component {

    render() {
        return (
            <div>
                <NavBar/>
                    <Container>
                        <MainPanel>
                            <PanelTitle>
                                Log In:
                            </PanelTitle>
                            
                            <PanelBody>
                                <ManagerLoginForm />
                            </PanelBody>
                        </MainPanel>
                    </Container>
                <Footer/>
            </div>
        );
    }
}

export default ManagerLogin;
