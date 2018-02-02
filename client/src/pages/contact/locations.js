import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from "classnames";
import "./style.css";


class Locations extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
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
            Locations
          </PanelTitle>
          
          <PanelBody>
              <Nav className="navLocation" justified>
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
                            Park Road
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
                            Uptown Charlotte
                      </NavLink>
                  </NavItem>
                
                  <NavItem className="navTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '5' })}
                        onClick={() => { this.toggle('5'); }}>
                            Carmel Commons
                      </NavLink>
                  </NavItem>
                
                  <NavItem className="navTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '6' })}
                        onClick={() => { this.toggle('6'); }}>
                            Atlanta
                      </NavLink>
                    </NavItem>
                </Nav>
              
              <hr/>
              
              <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                      <br></br>
                      <Row className="locationInfo">
                          <Col xs="12" sm="12" md="6">
                              <h4>Amélie's - NoDa</h4>
                              <p>Our flagship location in the heart of Charlotte's historic NoDa Arts District. Full selection of pastry, savory and coffee. Private event spaces available. Free wifi.</p>
                              
                              <h4>Store hours</h4>
                              <p>Open 24 | 7 | 365</p>
                              
                              <h4>Phone</h4>
                              <p>(704) 376-1781</p>
                              
                              <h4>Address</h4>
                              <p>2424 N Davidson St.<br/>
                              Charlotte, NC 28205</p>
                          </Col>
      
                          <Col xs="12" sm="12" md="6" className="imgCol">
                              <img src="./location_images/ameliesNODA.jpeg" alt="placeholder" width="100%" height="80%"/>
                          </Col>                    
                      </Row>
                  </TabPane>
              </TabContent>
                
              <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="2">
                      <br></br>
                      <Row className="locationInfo">
                          <Col xs="12" sm="12" md="6">
                              <h4>Amélie's - Park Road</h4>
                              <p>Our newest location! Full selection of pastry, savory, coffee, and Beer & Wine. Free Wi-Fi.</p>
                              
                              <h4>Store Hours</h4>
                              <p>Sunday - Thursday | 7:00am - 11:00pm<br/>
                              Friday & Saturday | 7:00am - 1:00am</p>

                              <h4>Phone</h4>
                              <p>(704) 405-0570</p>
                              
                              <h4>Address</h4>
                              <p>4321 Park Road.<br/>
                              Charlotte, NC 28209<br/>
                              Located in the Backlot at Park Road Shopping Center</p>
                          </Col>

                          <Col xs="12" sm="12" md="6" className="imgCol">
                              <img src="./location_images/parkrd.jpg" alt="parkrd" width="100%"/>
                          </Col>   
                      </Row>
                  </TabPane>
              </TabContent>
              
              <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="3">
                      <br></br>
                      <Row className="locationInfo">
                          <Col xs="12" sm="12" md="6">
                              <h4>Amélie's - Rock Hill</h4>
                              <p>Located in historic downtown Rock Hill. Curated selection of pastry, savory and coffee. Beer + wine. Private event space available. Free wifi.</p>
                              
                              <h4>Store Hours</h4>
                              <p>Sunday | 9:00am - 8:00pm<br/>
                              Monday | 7:00am - 8:00pm<br/>
                              Tuesday - Thursday | 7:00am - 9:00pm<br/>
                              Friday & Saturday | 7:00am - 10:00pm</p>

                              <h4>Phone</h4>
                              <p>(803) 403-9409</p>
                              
                              <h4>Address</h4>
                              <p>157 E Main St.<br/>
                              Rock Hill, SC 29730</p>
                          </Col>
      
                          <Col xs="12" sm="12" md="6" className="imgCol">
                              <img src="./location_images/case.jpg" alt="rockhill" width="100%" height="70%"/>
                          </Col>                    
                      </Row>
                  </TabPane>
              </TabContent>
              
              <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="4">
                    <br></br>
                      <Row className="locationInfo">
                          <Col xs="12" sm="12" md="6">
                              <h4>Amélie's - Uptown</h4>
                              <p>Full selection of pastry, savory and coffee. Private event space available. Beer + wine. Free wifi.</p>
                              
                              <h4>Store Hours</h4>
                              <p>Monday - Thursday | 7:00am - 10:00pm<br/>
                              Friday & Saturday | 7:00am - 12:00am<br/>
                              Sunday | 7:00am-8:00pm</p>

                              <h4>Phone</h4>
                              <p>(704)-899-0088</p>
                              
                              <h4>Address</h4>
                              <p>380 S College St.<br/>
                              Charlotte, NC 28202<br/>
                              Accessible entrance on the corner of Martin Luther King Jr. Blvd./ College St.</p>
                          </Col>
                          
                          <Col xs="12" sm="12" md="6" className="imgCol">
                              <img src="./location_images/uptownAmelies.jpg" alt="uptown" width="100%" height="70%"/>
                          </Col>   
                      </Row>
                  </TabPane>
              </TabContent>
              
              <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="5">
                      <br></br>
                      <Row className="locationInfo">
                          <Col xs="12" sm="12" md="6">
                              <h4>Amélie's - Carmel Commons</h4>
                              <p>Located in South Charlotte in the Carmel Commons Shopping Center. Full selection of pastry, savory and coffee. Beer + wine. Free wifi.</p>
                              
                              <h4>Store Hours</h4>
                              <p>Sunday - Thursday | 7:00am-9:00pm<br/>
                              Friday-Saturday | 7:00am-11:00pm</p>

                              <h4>Phone</h4>
                              <p> (704)-376-1782</p>
                              
                              <h4>Address</h4>
                              <p>7715 Pineville Matthews Rd. Space 34B<br/>
                              Charlotte NC 28226</p>
                          </Col>
      
                          <Col xs="12" sm="12" md="6" className="imgCol">
                              <img src="./location_images/macaroon.png" alt="carmelcommons" width="100%" height="330px"/>
                          </Col>                    
                      </Row>
                  </TabPane>
              </TabContent>
              
              <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="6">
                      <br></br>
                      <Row className="locationInfo">
                          <Col xs="12" sm="12" md="6">
                              <h4>Amélie's - Atlanta</h4>
                              <p>Located in West Midtown near Georgia Tech. Curated selection of pastry, savory and coffee. Private event space available. Free parking and wifi.</p>
                              
                              <h4>Store Hours</h4>
                              <p>Sunday - Thursday | 7:00am - 8:00pm<br/>
                              Friday & Saturday | 7:00am - 10:00pm</p>

                              <h4>Phone</h4>
                              <p>(404) 921-0276</p>
                              
                              <h4>Address</h4>
                              <p>840 Marietta St. NW<br/>
                              Atlanta, GA 30318</p>
                          </Col>
                          
                          <Col xs="12" sm="12" md="6" className="imgCol">
                              <img src="./location_images/AmeliesATL.jpg" alt="atlanta" width="90%" height="70%"/>
                          </Col>  
                      </Row>
                  </TabPane>
              </TabContent>
              
            </PanelBody>
          </MainPanel>
        </Wrapper>
    );
  }
}
export default Locations;
