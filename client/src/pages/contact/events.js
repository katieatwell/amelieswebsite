import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import { Row, Col } from 'reactstrap';
import "./style.css";

class Events extends Component {

    render() {
        return (
            <Wrapper>
                <MainPanel>
                    <PanelTitle>
                        Contact Events
                    </PanelTitle>
                    
                    <PanelBody>
                        <Row>
                            <Col xs="12" sm="12" md="6" className="contactEventsLeft">
                                <p>Let Amélie's host your next special event! Our stunning 
                                venues are available for functions of all sizes. Sit
                                back and relax in our cozy Parisian shabby- chic living room, or gather around a table with friends in our private dining room. Our unique, must-see venue, combined with our award-winning pastries and gourmet beverages are sure to make your special event absolutely unforgettable.</p>
                                
                                <br/>
                                <h4 className="holla"><strong>Call now to book your next event!</strong></h4>
                                
                                <br/>
                                <strong><u>North Carolina/South Carolina Catering & Events</u></strong> 
                                <p>(704) 287-4630<br/>
                                events@ameliesfrenchbakery.com</p>

                                <strong><u>Atlanta Catering & Events</u></strong>
                                <p>(404) 389-7052<br/>
                                atlantaevents@ameliesfrenchbakery.com</p>
                            </Col>
        
                            
                            <Col xs="12" sm="12" md="6">
                                <br/>
                                <img src="./display_images/caterevent.jpg" alt="placeholder" width="100%"/>
                            </Col>
                        
                        </Row>
                    </PanelBody>
                </MainPanel>
            </Wrapper>
        );
    }
}

export default Events;
