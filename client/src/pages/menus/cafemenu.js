import React, { Component } from "react";
import FullMenu from "../../components/menu/fullmenu";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel";
import NavBar from "../../components/navbar";

class CafeMenu extends Component {

    render() {
        return (
            <Container>
            <NavBar/>
            <MainPanel>
            <FullMenu />
            </MainPanel>
            </Container>
        )
    }
}

export default CafeMenu;
