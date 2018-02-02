import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import ContactForm from "../../components/forms/contactform";


class ContactUs extends Component {

    render() {
        return (
            <Wrapper>
                <MainPanel>
                    <PanelTitle>
                        Contact Us
                    </PanelTitle>
                    
                    <PanelBody>
                        <ContactForm />
                        <br/><br/>
                    </PanelBody>
                </MainPanel>
            </Wrapper>
        );
    }
}

export default ContactUs;
