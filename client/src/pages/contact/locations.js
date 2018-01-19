import React, { Component } from "react";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel";
import NavBar from "../../components/navbar";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from "classnames";
import { MenuContent } from "../../components/menu/menucontents";
import "./style.css";
import Footer from "../../components/footer";


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
              onClick={() => { this.toggle('1'); }}
            >
            NoDa
            </NavLink>
          </NavItem>
          <NavItem className="navTitle">
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
            Park Road
            </NavLink>
          </NavItem>
           <NavItem className="navTitle">
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('3'); }}
            >
            Rock Hill
            </NavLink>
          </NavItem>
           <NavItem className="navTitle">
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('4'); }}
            >
            Uptown Charlotte
            </NavLink>
          </NavItem>
             <NavItem className="navTitle">
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('5'); }}
            >
            Carmel Commons
            </NavLink>
          </NavItem>
             <NavItem className="navTitle">
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('6'); }}
            >
            Atlanta
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
              <br></br>
                <h3 className="menuTitle">2424 N Davidson St. Charlotte, NC</h3>
              </Col>
            </Row>
          </TabPane>
          </TabContent>
           <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
              <br></br>
                <h3 className="menuTitle">4321 Park Road Charlotte, NC</h3>
              </Col>
            </Row>
          </TabPane>
          </TabContent>
           <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
              <br></br>
                <h3 className="menuTitle">157 E. Main St. Rock Hill, South Carolina</h3>
              </Col>
            </Row>
          </TabPane>
          </TabContent>
           <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
              <br></br>
                <h3 className="menuTitle">380 S. College St. Charlotte, NC</h3>
              </Col>
            </Row>
          </TabPane>
          </TabContent>
              <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="5">
            <Row>
              <Col sm="12">
              <br></br>
                <h3 className="menuTitle">7715 Pineville Matthews Rd. Space 34B Charlotte, NC</h3>
              </Col>
            </Row>
          </TabPane>
          </TabContent>
              <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="6">
            <Row>
              <Col sm="12">
              <br></br>
                <h3 className="menuTitle">840 Marietta St. NW Atlanta, GA</h3>
              </Col>
            </Row>
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
