import React, { Component } from "react";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel";
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
                  
                  
                </TabPane>
              </TabContent>
                
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="2">
                  
                  
                </TabPane>
              </TabContent>
              
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="3">
                  
                </TabPane>
              </TabContent>
              
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="4">
                  
                </TabPane>
              </TabContent>
              
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="5">
                  
                </TabPane>
              </TabContent>
              
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="6">
                  
                </TabPane>
              </TabContent>
              
            </MainPanel>
            </Container> 
            <Footer/>
            </div>

    );
  }
}
export default Locations;
