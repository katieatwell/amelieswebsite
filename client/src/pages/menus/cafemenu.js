import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MenuPanel from "../../components/mainpanel/menupanel"
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from "classnames";
import renderHTML from "react-render-html";
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
      cafeCoffeeTea: [],
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
        console.log(res.data);
        this.setState({
          cafeBreakfast: res.data.breakfast,
          cafeLunchDinner: res.data.lunchdinner,
          cafeCoffeeTea: res.data.coffeetea,
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
                          <MenuContent> 
                            <div className="menuTitle">
                                BREAKFAST MENU
                            </div>
                            
                            <div className="scrollit">
                            
                              {this.state.cafeBreakfast.map(item => (
                                <div key={item.id}>
                                  <p className="menuItemTitle">{item.title}</p>
                                  <p className="menuItemPrice">{item.price}</p>
                                  <p className="menuItemDescript">{renderHTML(item.description) }</p><br/>
                                </div>
                              ))}
                              
                                <p className="subMenuTitle">* GLUTEN FREE</p>
                            </div>
                          </MenuContent>
                      </TabPane>
                    </TabContent>
                      
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="2">
                          <MenuContent> 
                            <div className="menuTitle">
                                LUNCH & DINNER MENU
                            </div>

                            <div className="scrollit">
                              {this.state.cafeLunchDinner.map(item => (
                                <div key={item.id}>
                                  <p className="menuItemTitle">{item.title}</p>
                                  <p className="menuItemPrice">{item.price}</p>
                                  <p className="menuItemDescript">{renderHTML(item.description) }</p><br/>
                                </div>
                              ))}
                                <p className="subMenuTitle">* GLUTEN FREE</p>
                            </div>
                          </MenuContent>
                      </TabPane>
                      </TabContent>
                      
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="3">
                        <MenuContent> 
                            <div className="menuTitle">
                                COFFEE & TEA MENU
                            </div>
                            
                            <div className="scrollit">
                              {this.state.cafeCoffeeTea.map(item => (
                                <div key={item.id}>
                                  <p className="menuItemTitle">{item.title}</p>
                                  <p className="menuItemPrice">{item.price}</p>
                                  <p className="menuItemDescript">{renderHTML(item.description) }</p><br/>
                                </div>
                              ))}
                                <p className="subMenuTitle">* GLUTEN FREE</p>                            
                            </div>
                          </MenuContent>
                      </TabPane>
                    </TabContent>
                    
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="4">
                          <MenuContent> 
                            <div className="menuTitle">
                                DESSERT MENU
                            </div>
                            
                            <div className="scrollit">
                              {this.state.cafeDessert.map(item => (
                                <div key={item.id}>
                                  <p className="menuItemTitle">{item.title}</p>
                                  <p className="menuItemPrice">{item.price}</p>
                                  <p className="menuItemDescript">{renderHTML(item.description) }</p><br/>
                                </div>
                              ))}
                                <p className="subMenuTitle">* GLUTEN FREE</p>                              
                            </div>
                          </MenuContent>
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
