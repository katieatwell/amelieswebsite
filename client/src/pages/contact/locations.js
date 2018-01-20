import React, { Component } from "react";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import NavBar from "../../components/navbar";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from "classnames";
import Footer from "../../components/footer";
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
      <div>
            <Container>
            <NavBar/>
            <MainPanel>
              <PanelTitle>
                Locations
              </PanelTitle>
              
              <PanelBody>
                  <Nav className="menuNav" justified>
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
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('3'); }}>
                            Rock Hill
                      </NavLink>
                    </NavItem>
                    
                    <NavItem className="navTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('4'); }}>
                            Uptown Charlotte
                      </NavLink>
                    </NavItem>
                    
                    <NavItem className="navTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('5'); }}>
                            Carmel Commons
                      </NavLink>
                    </NavItem>
                    
                    <NavItem className="navTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('6'); }}>
                            Atlanta
                      </NavLink>
                    </NavItem>
                  </Nav>
                  
                  
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      
                      <br></br>
                      <Row className="locationName">
                        <Col xs="12" sm="12" md="6">
                            Amélie's NoDa<br/>
                            Open 24 | 7 | 365<br/><br/>
                            
                            2424 N Davidson St.<br/>
                            Charlotte, NC 28205<br/>
                            (704) 376-1781<br/><br/>
                            
                            Our flagship location in the heart of Charlotte's historic NoDa Arts District. Full selection of pastry, savory and coffee. Private event spaces available. Free wifi.
                                                    
                        </Col>
    
                        <Col xs="12" sm="12" md="6">
                            <img src="http://via.placeholder.com/150x150" alt="placeholder"/>
                        </Col>                    
                      </Row>
                      
                    </TabPane>
                  </TabContent>
                    
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="2">
                    
                      <br></br>
                      <Row className="locationName">
                      <Col xs="12" sm="12" md="6">
                            <img src="http://via.placeholder.com/150x150" alt="placeholder"/>
                      </Col>   
                        
                      <Col xs="12" sm="12" md="6">
                            Amélie's Park Road<br/>
                            Sunday - Thursday | 7:00am - 11:00pm<br/>
                            Friday & Saturday | 7:00am - 1:00am<br/><br/>
                            
                            4321 Park Road.<br/>
                            Charlotte, NC 28209<br/>
                            (704) 405-0570<br/>
                            Located in the Backlot at Park Road Shopping Center<br/><br/>
                            
                            Our newest location! Full selection of pastry, savory, coffee, and Beer & Wine. Free Wi-Fi.
                      </Col>
                      </Row>
                      
                    </TabPane>
                  </TabContent>
                  
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="3">
                    
                      <br></br>
                      <Row className="locationName">
                        <Col xs="12" sm="12" md="6">
                            Amélie's Rock Hill<br/>
                            Sunday | 9:00am - 8:00pm<br/>
                            Monday | 7:00am - 8:00pm<br/>
                            Tuesday - Thursday | 7:00am - 9:00pm<br/>
                            Friday & Saturday | 7:00am - 10:00pm<br/><br/>
                            
                            157 E Main St.<br/>
                            Rock Hill, SC 29730<br/>
                            (803) 403-9409<br/><br/>
                            
                            Located in historic downtown Rock Hill. Curated selection of pastry, savory and coffee. Beer + wine. Private event space available. Free wifi.
    
                        </Col>
    
                        <Col xs="12" sm="12" md="6">
                            <img src="http://via.placeholder.com/150x150" alt="placeholder"/>
                        </Col>                    
                      </Row>
                      
                    </TabPane>
                  </TabContent>
                  
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="4">
                    
                      <br></br>
                      <Row className="locationName">
                      <Col xs="12" sm="12" md="6">
                            <img src="http://via.placeholder.com/150x150" alt="placeholder"/>
                      </Col>   
                        
                      <Col xs="12" sm="12" md="6">
                            Amélie's Uptown<br/>
                            Monday - Thursday | 7:00am - 10:00pm<br/>
                            Friday & Saturday | 7:00am - 12:00am<br/>
                            Sunday | 7:00am-8:00pm<br/><br/>
                            
                            380 S College St.<br/>
                            Charlotte, NC 28202<br/>
                            (704)-899-0088<br/>
                            Accessible entrance on the corner of Martin Luther King Jr. Blvd./ College St.<br/><br/>
                            
                            Full selection of pastry, savory and coffee. Private event space available. Beer + wine. Free wifi.
                      </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                  
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="5">
                    
                      <br></br>
                      <Row className="locationName">
                        <Col xs="12" sm="12" md="6">
                            Amélie's Carmel Commons<br/>
                            Sunday - Thursday | 7:00am-9:00pm<br/>
                            Friday-Saturday | 7:00am-11:00pm<br/><br/>
                            
                            7715 Pineville Matthews Rd. Space 34B<br/>
                            Charlotte NC 28226<br/>
                            (704)-376-1782<br/><br/>
                            
                            Located in South Charlotte in the Carmel Commons Shopping Center. Full selection of pastry, savory and coffee. Beer + wine. Free wifi.
                        </Col>
    
                        <Col xs="12" sm="12" md="6">
                            <img src="http://via.placeholder.com/150x150" alt="placeholder"/>
                        </Col>                    
                      </Row>
                    </TabPane>
                  </TabContent>
                  
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="6">
                    
                      <br></br>
                      <Row className="locationName">
                      <Col xs="12" sm="12" md="6">
                            <img src="http://via.placeholder.com/150x150" alt="placeholder"/>
                      </Col>   
                        
                      <Col xs="12" sm="12" md="6">
                            Amélie's Atlanta<br/>
                            Sunday - Thursday | 7:00am - 8:00pm<br/>
                            Friday & Saturday | 7:00am - 10:00pm<br/><br/>
                            
                            840 Marietta St. NW<br/>
                            Atlanta, GA 30318<br/>
                            (404) 921-0276<br/>
                            
                            Located in West Midtown near Georgia Tech. Curated selection of pastry, savory and coffee. Private event space available. Free parking and wifi. 
    
                      </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </PanelBody>
            </MainPanel>
            </Container> 
            <Footer/>
            </div>

    );
  }
}
export default Locations;
