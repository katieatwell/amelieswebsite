import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MenuPanel from "../../components/mainpanel/menupanel"
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
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
          <MenuPanel>
            <PanelBody>
              <div className="menuWrapper">            

                  <Nav nav className="menuNav">
                    <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('1'); }}>
                        Breakfast & Brunch
                      </NavLink>
                    </NavItem>
                    <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('2'); }}>
                       Beverages
                      </NavLink>
                    </NavItem>
                     <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '3' })}
                        onClick={() => { this.toggle('3'); }}>
                       Desserts
                      </NavLink>
                    </NavItem>
                     <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '4' })}
                        onClick={() => { this.toggle('4'); }}>
                      Favors & Gift Baskets
                      </NavLink>
                    </NavItem>
                      <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '5' })}
                        onClick={() => { this.toggle('5'); }}>
                      In House Event Packages
                      </NavLink>
                    </NavItem>
                      <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '6' })}
                        onClick={() => { this.toggle('6'); }}>
                      Lunch
                      </NavLink>
                    </NavItem>
                      <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '7' })}
                        onClick={() => { this.toggle('7'); }}>
                     Specialty Cakes
                      </NavLink>
                    </NavItem>
                      <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '8' })}
                        onClick={() => { this.toggle('8'); }}>
                      Platters
                      </NavLink>
                    </NavItem>
                  </Nav>
                  
                  
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <MenuContent> 
                        <div className="menuTitle">
                            BREAKFAST & BRUNCH
                        </div>
                        
                        <div className="scrollit">
                            hi
                        </div>
                      </MenuContent>
                    </TabPane>
                  </TabContent>
                    
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="2">
                      <MenuContent> 
                        <div className="menuTitle">
                            BEVERAGES
                        </div>
                        
                        <div className="scrollit">
                            hi
                        </div>
                      </MenuContent>
                    </TabPane>
                  </TabContent>
                  
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="3">
                      <MenuContent> 
                        <div className="menuTitle">
                            DESSERTS
                        </div>
                        
                        <div className="scrollit">
                            hi
                        </div>
                      </MenuContent>
                    </TabPane>
                  </TabContent>
                  
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="4">
                      <MenuContent> 
                        <div className="menuTitle">
                            FAVORS/GIFT BASKETS
                        </div>
                        
                        <div className="scrollit">
                            hi
                        </div>
                      </MenuContent>
                    </TabPane>
                  </TabContent>
               
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="5">
                      <MenuContent> 
                        <div className="menuTitle">
                            IN HOUSE EVENT PACKAGES
                        </div>
                        
                        <div className="scrollit">
                            hi
                        </div>
                      </MenuContent>
                    </TabPane>
                  </TabContent>
                  
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="6">
                      <MenuContent> 
                        <div className="menuTitle">
                            LUNCH
                        </div>
                        
                        <div className="scrollit">
                            hi
                        </div>
                      </MenuContent>
                    </TabPane>
                  </TabContent>
                  
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="7">
                      <MenuContent> 
                        <div className="menuTitle">
                            WEDDING & SPECIALTY CAKES
                        </div>
                        
                        <div className="scrollit">
                            hi
                        </div>
                      </MenuContent>
                    </TabPane>
                  </TabContent>
                  
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="8">
                      <MenuContent> 
                        <div className="menuTitle">
                            PLATTERSE
                        </div>
                        
                        <div className="scrollit">
                            hi
                        </div>
                      </MenuContent>
                    </TabPane>
                  </TabContent>
                </div>
              </PanelBody>
            </MenuPanel>
          </Wrapper>
    );
  }
}
