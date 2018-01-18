import React, { Component } from "react";
import NavBar from "../../components/navbar";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel";
import pTitle from "../../components/paragraphdiv/ptitle";

class ContactUs extends Component {

    render() {
        return (
            <Container>
            <NavBar/>
            <MainPanel>
            <pTitle>
            Contact Us
            </pTitle>
            </MainPanel>
            </Container>
        );
    }
}

export default ContactUs;