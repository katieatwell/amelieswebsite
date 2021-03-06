import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import classnames from "classnames";
import PropTypes from 'prop-types';
import "./style.css";


class Locations extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }


    render() {
        return (
            <Wrapper>
                <MainPanel>
                    <PanelTitle>
                        Event Rooms
                    </PanelTitle>
                    
                    <PanelBody>
                        <Nav className="roomsNav" justified>
                          <NavItem className="navTitle">
                            <NavLink
                              className={classnames({ active: this.state.activeTab === '1' })}
                              onClick={() => { this.toggle('1'); }}>
                                NoDa
                            </NavLink>
                          </NavItem>
                         
                         <NavItem className="navTitle">
                            <NavLink
                              className={classnames({ active: this.state.activeTab === '2' })}
                              onClick={() => { this.toggle('2'); }}>
                                Uptown Charlotte
                            </NavLink>
                          </NavItem>
                          
                           <NavItem className="navTitle">
                            <NavLink
                              className={classnames({ active: this.state.activeTab === '3' })}
                              onClick={() => { this.toggle('3'); }}>
                                Rock Hill
                            </NavLink>
                          </NavItem>
                           
                
                             <NavItem className="navTitle">
                            <NavLink
                              className={classnames({ active: this.state.activeTab === '4' })}
                              onClick={() => { this.toggle('4'); }}>
                                Atlanta
                            </NavLink>
                          </NavItem>
                        </Nav>
                        
                        
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                            
                              <br></br>
                                
                                <Row>
                                    <Col xs="12" sm="12" md="6">
                                        <p className="eventAddress">
                                    2424 N Davidson St. <br/>
                                    Charlotte, NC 28205 <br/>
                                    (704) 376-1781
                                    </p>
                                        
                                        <p className="roomHeader">
                                            Vendome
                                        </p>
                                        
                                        <ul>
                                            <li> Seats up to 40</li>
                                            <li> $125 per hour with 2 hour minimum</li>
                                            <li> Recommended for wedding receptions, corporate events, co-ed baby showers etc.</li>
                                        </ul>         
                                        
                                        <p className="roomHeader">
                                            Versailles Room
                                        </p>
                                        
                                        <ul>
                                            <li> Seats up to 20</li>
                                            <li> $75 per hour with a 2 hour minimum</li>
                                            <li> Recommended for: small business lunches and meetings, social groups, bridal showers etc.</li>
                                        </ul>
                                    </Col>
    
                                    <Col xs="12" sm="12" md="6">
                                        <img src="./location_images/nodaEvent.jpg" alt="nodaRoom" width="100%"/>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                          
                          
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="2">
                             <br></br>
                             
                                <Row>
                                    <Col xs="12" sm="12" md="6">
                                        <p className="eventAddress">
                                            380 S College St. <br/>
                                            Charlotte, NC 28202 <br/>
                                            (704)-899-0088
                                        </p>
                                        
                                        <p className="roomHeader">
                                            Fontainebleau
                                        </p>
                                            
                                        <ul>
                                            <li> Seats up to 50, a lofted space</li>
                                            <li> $125 per hour with a 2 hour minimum</li>
                                            <li> Recommended for: rehearsal dinners, engagement parties, business lunches, social groups, bridal showers etc.</li>
                                            <li> <i>Additional space can be added to the Fountainbleu to accomodate larger parties of 75 or more at an additional $75 per hour</i></li>
                                        </ul>
                                    </Col>
    
                                    <Col xs="12" sm="12" md="6">
                                        <img src="./location_images/uptownEvent.jpg" alt="nodaRoom" width="100%"/>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                        
                        
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="3">
                                <br></br>

                                <Row>
                                    <Col xs="12" sm="12" md="6">
                                        <p className="eventAddress">
                                            157 E Main St. <br/>
                                            Rock Hill, SC 29730 <br/>
                                            (803) 403-9409
                                        </p>
                                        
                                        <p className="roomHeader">
                                            The Left Bank
                                        </p>
                                        
                                        <ul>
                                            <li> Seats up to 75</li>
                                            <li> $100 per hour with a 2 hour minimum</li>
                                            <li> ask our event specialist on how we can accommodate your group!</li>
                                        </ul>
                                    </Col>
    
                                    <Col xs="12" sm="12" md="6">
                                        <img src="./location_images/rockhillEvent.jpg" alt="rockhillRoom" width="100%"/>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                        
                        
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="4">
                                <br></br>
                                
                                <Row>
                                    <Col xs="12" sm="12" md="6">
                                        <p className="eventAddress">
                                            840 Marietta St. NW <br/>
                                            Atlanta, GA 30318 <br/>
                                            (404) 921-0276
                                        </p>
                                        
                                        <p className="roomHeader">
                                            St. Germain
                                        </p>
                                        <ul>
                                            <li> Seats up to 40</li>
                                            <li> $125 per hour with a 2 hour minimum</li>
                                        </ul>
                                        
                                        <p className="roomHeader">
                                            Montmartre
                                        </p>
                                        <ul>
                                            <li> Seats up to 60</li>
                                            <li> $250 per hour with a 2 hour minimum</li>
                                        </ul>                                        
                                    </Col>
                                    
                                    <Col xs="12" sm="12" md="6">
                                        <img src="./location_images/atlEvent.jpg" alt="atlRoom" width="100%"/>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                        
                        <br/><br/>
                        <Row>
                            <Col xs="12" sm="12" md="12">
                                <p className="roomRules">
                                    <strong>Rules & Regulations</strong><br/>
                                    Payment of a deposit will indicate that you have understood and agree to the terms.<br/><br/>
                                    
                                    <ul>
                                        <li> No private space will be rented out without the purchase of a food package.</li>
                                        <li> We require a $200 minimum food purchase for all events.</li>
                                        <li> Each room has a maximum occupancy that must be recognized.</li>
                                        <li> All changes in menu, head count, or ANY other aspect of the event MUST be made no later than 3 days prior to the event.</li>
                                        <li> If any aspect of the event changes after the 72 hour period has already passed, the host of the event will be responsible for all charges billed based on the most recent understanding between the host and Amélie’s event coordinator.</li>
                                        <li> To avoid confusion, the event coordinator requests that only ONE person serve as the main contact/host for each event.</li>
                                        <li> Spaces will be held for 48 hours from the date of initial request. Deposits must be paid within 48 hours or the reservation will be released.</li>
                                        <li> Deposits will only be refunded due to bakery error. All deposits are otherwise nonrefundable.</li>
                                        <li> We reserve the right to cancel any event for any reason. In such cases, all efforts will be made to give as much notice as possible. If an event is cancelled by us, all deposits and fees paid will be refunded unless fees were paid for services already rendered.</li>
                                        <li> Please no Glitter & Confetti!</li>
                                        <li> We are unable to hold any items brought in from outside the bakery in our coolers for chilling or storage before, during or after the event.</li>
                                        <li> Absolutely no outside food items brought in from outside the bakery or any of its event spaces.</li>
                                        <li> Only Amélies event team members are authorized to approve any changes made for an event. Other staff members are in no way responsible for booking, approving changes to or contacting clients regarding events.</li>
                                        <li> A 20% Gratuity will be charged for all events.</li>
                                    </ul>
                                </p>
                            </Col>
                        </Row>
                    
                    </PanelBody>
                </MainPanel>
            </Wrapper>
        );
    }
}
export default Locations;
