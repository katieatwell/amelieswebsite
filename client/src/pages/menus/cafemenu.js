import React, { Component } from "react";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import NavBar from "../../components/navbar";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from "classnames";
import { MenuContent } from "../../components/menu/menucontents";
import "./style.css";

class CafeMenu extends Component {
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
      <Container>
            <NavBar/>
            <MainPanel>
            
            <PanelTitle>
              Café Menu
            </PanelTitle>
            
            <PanelBody>
                <Nav className="menuNav" justified>
                  <NavItem className="navMenuTitle">
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}
                    >
                    Breakfast
                    </NavLink>
                  </NavItem>
                  <NavItem className="navMenuTitle">
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}
                    >
                    Lunch/Dinner
                    </NavLink>
                  </NavItem>
                   <NavItem className="navMenuTitle">
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('3'); }}
                    >
                    Coffee/Tea
                    </NavLink>
                  </NavItem>
                   <NavItem className="navMenuTitle">
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('4'); }}
                    >
                    Pastries
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                      <br></br>
                        <h3 className="menuTitle">Breakfast Menu</h3>
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
                        <h3 className="menuTitle">Lunch/Dinner Menu</h3>
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
                        <h3 className="menuTitle">Coffee/Tea Menu</h3>
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
                        <h3 className="menuTitle">Pastries/Desserts Menu</h3>
                        <MenuContent/>
                      </Col>
                    </Row>
                  </TabPane>
                  </TabContent>
              </PanelBody>
          </MainPanel>
        </Container>
    )
  }
}

export default CafeMenu;
