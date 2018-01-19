import React, { Component } from "react";
import NavBar from "../../components/navbar";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import ContactForm from "../../components/forms/contactform";
import Footer from "../../components/footer";


class ContactUs extends Component {

    render() {
        return (
            <Container>
                <NavBar/>
                <MainPanel>
                    <PanelTitle>
                        Contact Us
                    </PanelTitle>
                    
                    <PanelBody>
                        <ContactForm />
                    </PanelBody>
                </MainPanel>
                <Footer/>
            </Container>
        );
    }
}

export default ContactUs;