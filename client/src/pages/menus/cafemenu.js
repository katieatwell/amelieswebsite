import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MenuPanel from "../../components/mainpanel/menupanel"
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from "classnames";
import { MenuContent } from "../../components/menu/menucontents";
import API from "../../utils/API";
import "./style.css";
import axios from "axios";

axios.defaults.headers.common['Authorization'] = "jwt " + sessionStorage.getItem('token');

class CafeMenu extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      cafeBreakfast: [],
      cafeLunchDinner: [],
      cafeCoffeTea: [],
      cafeDessert: []
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentDidMount() {
    this.loadCafeMenuItems();
  }

  loadCafeMenuItems = () => {
    API.getCafeMenuItems()
      .then(res => {
        console.log("$$$$$$$$$$$$$$$$$$$$$");
        console.log(res.data);
        this.setState({
          cafeBreakfast: res.data.breakfast,
          cafeLunchDinner: res.data.lunchdinner,
          cafeCoffeTea: res.data.coffeetea,
          cafeDessert: res.data.dessertspastry
        }, () => console.log(this.state));
      })
      .catch(err => console.log(err));
  };



  render() {
    return (
      <Wrapper>
          <MenuPanel>
            
            <div className="menuWrapper">
                <PanelTitle>
                    <div className="menuTitle">
                        Café Menu
                    </div>
                </PanelTitle>
                
                <PanelBody>
                    <Nav className="menuNav" justified>
                      <NavItem className="navMenuTitle">
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '1' })}
                          onClick={() => { this.toggle('1'), this.loadCafeMenuItems() }}>
                            Breakfast
                        </NavLink>
                      </NavItem>
                      
                      <NavItem className="navMenuTitle">
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '2' })}
                          onClick={() => { this.toggle('2'), this.loadCafeMenuItems() }}>
                            Lunch & Dinner
                        </NavLink>
                      </NavItem>
                      
                       <NavItem className="navMenuTitle">
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '3' })}
                          onClick={() => { this.toggle('3'), this.loadCafeMenuItems() }}>
                            Coffee & Tea
                        </NavLink>
                      </NavItem>
                      
                       <NavItem className="navMenuTitle">
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '4' })}
                          onClick={() => { this.toggle('4'), this.loadCafeMenuItems() }}>
                            Desserts
                        </NavLink>
                      </NavItem>
                    </Nav>
                    
                    
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="1">
                        <div className="scrollit">
                          <MenuContent> 
                            
                            {this.state.cafeBreakfast.map(item => (
                              <div key={item.id}>
                                {item.title} <br/>
                                {item.price}<br/>
                                {item.description}
                              </div>
                              )
                            )}
                            
                          </MenuContent>
                        </div>
                      </TabPane>
                      </TabContent>
                      
                       <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="2">
                        <div className="scrollit">
                          <MenuContent> 
                            
                            {this.state.cafeLunchDinner.map(item => (
                              <div key={item.id}>
                                {item.title} <br/>
                                {item.price}<br/>
                                {item.description}
                              </div>
                              )
                            )}
                            
                          </MenuContent>
                        </div>
                      </TabPane>
                      </TabContent>
                       <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="3">
                        <div className="scrollit">
                          <MenuContent> 
                            
                            {this.state.cafeCoffeTea.map(item => (
                              <div key={item.id}>
                                {item.title} <br/>
                                {item.price}<br/>
                                {item.description}
                              </div>
                              )
                            )}
                            
                          </MenuContent>
                        </div>
                      </TabPane>
                      </TabContent>
                       <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="4">
                        <div className="scrollit">
                          <MenuContent> 
                            
                            {this.state.cafeDessert.map(item => (
                              <div key={item.id}>
                                {item.title} <br/>
                                {item.price}<br/>
                                {item.description}
                              </div>
                              )
                            )}
                            
                          </MenuContent>
                        </div>
                      </TabPane>
                      </TabContent>
                  </PanelBody>
                </div>
            </MenuPanel>
        </Wrapper>
    );
  }
}

export default CafeMenu;
