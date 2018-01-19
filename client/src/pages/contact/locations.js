import React, { Component } from "react";
import NavBar from "../../components/navbar";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import Footer from "../../components/footer";


class Locations extends Component {

    render() {
        return (
            <Container>
            <NavBar/>
            <MainPanel>
            <pTitle>
            Locations
            </pTitle>
            </MainPanel>
            <Footer/>
            </Container>
        );
    }
}

export default Locations;
