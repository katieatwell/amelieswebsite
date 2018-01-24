import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel"
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from "classnames";
import { MenuContent } from "../../components/menu/menucontents";
import "./style.css";

export default class CateringMenu extends Component {
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
                Catering Menu
              </PanelTitle>
              
              <PanelBody>
                  <Nav className="menuNav" justified>
                    <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('1'); }}
                      >
                      Breakfast & Brunch
                      </NavLink>
                    </NavItem>
                    <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('2'); }}
                      >
                      Beverages
                      </NavLink>
                    </NavItem>
                     <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '3' })}
                        onClick={() => { this.toggle('3'); }}
                      >
                      Desserts
                      </NavLink>
                    </NavItem>
                     <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '4' })}
                        onClick={() => { this.toggle('4'); }}
                      >
                      Favors & Gift Baskets
                      </NavLink>
                    </NavItem>
                      <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '5' })}
                        onClick={() => { this.toggle('5'); }}
                      >
                      In House Event Packages
                      </NavLink>
                    </NavItem>
                      <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '6' })}
                        onClick={() => { this.toggle('6'); }}
                      >
                      Lunch
                      </NavLink>
                    </NavItem>
                      <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '7' })}
                        onClick={() => { this.toggle('7'); }}
                      >
                     Wedding and Specialty Cakes
                      </NavLink>
                    </NavItem>
                      <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '8' })}
                        onClick={() => { this.toggle('8'); }}
                      >
                      Platters
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12">
                        <br></br>
                          <h5 className="menuTitle">Breakfast & Brunch</h5>
                          <MenuContent/>
                        </Col>
                      </Row>
                    </TabPane>
                    </TabContent>
                     <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="2">
                      <Row>
                        <Col sm="12">
                        <br></br>
                          <h5 className="menuTitle">Beverages</h5>
                          <MenuContent/>
                        </Col>
                      </Row>
                    </TabPane>
                    </TabContent>
                     <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="3">
                      <Row>
                        <Col sm="12">
                        <br></br>
                          <h5 className="menuTitle">Desserts</h5>
                          <MenuContent/>
                        </Col>
                      </Row>
                    </TabPane>
                    </TabContent>
                     <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="4">
                      <Row>
                        <Col sm="12">
                        <br></br>
                          <h5 className="menuTitle">Favors/Gift Baskets</h5>
                          <MenuContent/>
                        </Col>
                      </Row>
                    </TabPane>
                    </TabContent>
                     <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="5">
                      <Row>
                        <Col sm="12">
                        <br></br>
                          <h5 className="menuTitle">In House Event Packages</h5>
                          <MenuContent/>
                        </Col>
                      </Row>
                    </TabPane>
                    </TabContent>
                     <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="6">
                      <Row>
                        <Col sm="12">
                        <br></br>
                          <h5 className="menuTitle">Lunch</h5>
                          <MenuContent/>
                        </Col>
                      </Row>
                    </TabPane>
                    </TabContent>
                     <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="7">
                      <Row>
                        <Col sm="12">
                        <br></br>
                          <h5 className="menuTitle">Wedding/Specialty Cakes</h5>
                          <MenuContent/>
                        </Col>
                      </Row>
                    </TabPane>
                    </TabContent>
                     <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="8">
                      <Row>
                        <Col sm="12">
                        <br></br>
                          <h5 className="menuTitle">Platters</h5>
                          <MenuContent/>
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
