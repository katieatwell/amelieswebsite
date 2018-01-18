import React, { Component } from "react";
import NavBar from "../../components/navbar";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel"
import pTextBox from "../../components/paragraphdiv/ptextbox";
import pTitle from "../../components/paragraphdiv/ptitle";

class Privacy extends Component {

    render() {
        return (
            <Container>
            <NavBar/>
            <MainPanel>
            <pTitle>
            Privacy
            </pTitle>
            </MainPanel>
            </Container>
        )
    }
}

export default Privacy;
