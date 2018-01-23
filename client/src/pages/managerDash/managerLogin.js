import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import ManagerLoginForm from "../../components/forms/managerlogin";


class ManagerLogin extends Component {

    render() {
        return (
            <Wrapper>
                <MainPanel>
                    <PanelTitle>
                        Log In:
                    </PanelTitle>
                    
                    <PanelBody>
                        <ManagerLoginForm />
                    </PanelBody>
                </MainPanel>
            </Wrapper>
        );
    }
}

export default ManagerLogin;
