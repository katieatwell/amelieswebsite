import React, { Component } from "react";
import NavBar from "../../components/navbar";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel"
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import Footer from "../../components/footer";
import "./landingpage.css";


class LandingPage extends Component {

    render() {
        return (
            <div>
                <NavBar />
                    <Container>
                        <MainPanel>
                            <PanelBody>
                                Welcome to
                                <div className="imgContainer">
                                  <a href="/"> <img src="/images/banner.png" alt="brand" className="bannerImg" /> </a>
                                </div>
                            </PanelBody>
                        </MainPanel>
                    </Container>
                <Footer />
        </div>
        );
    }
}

export default LandingPage;
