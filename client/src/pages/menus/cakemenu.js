import React, { Component } from "react";
import { MenuContent } from "../../components/menu/menucontents";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel";
import NavBar from "../../components/navbar";

class CakeMenu extends Component {

    render() {
        return (
            <Container>
            <NavBar/>
            <MainPanel>
            <MenuContent/>
            </MainPanel>
            </Container>
        )
    }
}

export default CakeMenu;
