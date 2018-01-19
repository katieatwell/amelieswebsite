import React, { Component } from "react";
import NavBar from "../../components/navbar";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import { Row, Col } from 'reactstrap';
import "./style.css";

class CoreValues extends Component {

    render() {
        return (
            <Container>
                <NavBar/>
                    <MainPanel>

                        <PanelTitle>
                            About Us
                        </PanelTitle>
                        
                        <PanelBody>
                            <Row>
                            <Col xs="12" sm="12" md="6" className="aboutLeft">
                                Mission Statement
                                <br />
                                To foster a feast for the senses and unique experience for each and every person that walks through our doors. We aim to inspire, challenge, comfort and nourish while creating community and fellowship. 
                                <br /><br /><br />
                                
                                Core Values
                                <br />
                                We are genuine this starts with who we are as individuals and continues through the products we serve and how we communicate.
                                <br /><br />
                                We celebrate diversity no matter what race, creed, gender identity or sexual orientation.
                                <br /><br />
                                We celebrate food and drink we are in love with the food and drinks we make and the people that make them.
                                <br /><br />
                                We value personal growth growth requires hard work and dedication.
                                <br /><br />
                                We are mindful of our impact to others we work to have a positive impact on guests and employees.
                                <br /><br />
                                We honor the dignity of everyone we embrace differences and enjoy learning about each other.
                                <br /><br />
                                Our job is our passion the food and drinks we make and the experience that we create is our passion.
                                <br /><br />
                                The goal for our guests we want to create a lifetime relationship with our guests. From your daily visits, to the place that you choose to celebrate with the people you love. 


                            </Col>
                            
                            <Col xs="12" sm="12" md="6">
                                <img src="http://via.placeholder.com/150x150" alt="placeholder"/>
                            </Col>
                            
                            </Row>
                        </PanelBody>

                    </MainPanel>
            </Container>
        );
    }
}

export default CoreValues;
