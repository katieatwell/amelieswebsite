
import React, {Component} from "react";
import NavBar from "../../components/navbar"; 
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel"
import PanelTitle from "../../components/paragraphdiv/ptitle";
import Footer from "../../components/footer";


class LandingPage extends Component {

render () {
    return (
        <Container>
            <NavBar />
                <MainPanel>
                    <PanelTitle>
                        Welcome!
                    </PanelTitle>
                </MainPanel>
                
            <Footer />
        </Container>
)}

}

export default LandingPage;
