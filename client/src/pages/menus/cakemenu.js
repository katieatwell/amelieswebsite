import React, { Component } from "react";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import NavBar from "../../components/navbar";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from "classnames";
import { MenuContent } from "../../components/menu/menucontents";
import CakeForm from "../../components/forms/cakeform";
import "./style.css";

class CakeMenu extends Component {
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
                Cake Menu
              </PanelTitle>
              
              <PanelBody>
                  <Nav className="menuNav" justified>
                    <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('1'); }}
                      >
                      Composed Cakes
                      </NavLink>
                    </NavItem>
                     <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('2'); }}
                      >
                      Build Your Own Cake
                      </NavLink>
                    </NavItem>
                  </Nav>
                   <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12">
                        <br></br>
                          <h3 className="menuTitle">Composed Cake Menu</h3>
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
                          <h3 className="menuTitle">Build Your Own Cake</h3>
                          <CakeForm/>
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

export default CakeMenu;
