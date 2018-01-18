
import React, {Component} from "react";
import NavBar from "../../components/navbar"; 
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel"
// import pTextBox from "../../components/paragraphdiv/ptextbox";
// import pTitle from "../../components/paragraphdiv/ptitle";
// import ContactForm from "../../components/forms/contactform";
import CakeForm from "../../components/forms/cakeform";
// import Footer from "./components/footer";
// import { Link } from "react-router-dom";


class LandingPage extends Component {

render () {
    return (
        <Container>
            <NavBar />
                <MainPanel>
                    <CakeForm />
                </MainPanel>
        </Container>
)}

}

export default LandingPage;
