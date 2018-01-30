import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MenuPanel from "../../components/mainpanel/menupanel"
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from "classnames";
import { MenuContent } from "../../components/menu/menucontents";
import renderHTML from "react-render-html";
import API from "../../utils/API";
import "./style.css";

export default class CateringMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      caterBeverages: [],
      caterBreakfast: [],
      caterDesserts: [],
      caterFavors: [],
      caterInHouseEvents: [],
      caterLunch: [],
      caterPlatters: []
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
    this.loadCateringMenuItems();
  }

  loadCateringMenuItems = () => {
    API.getCateringMenuItems()
      .then(res => {
        console.log(res.data);
        this.setState({
          caterBeverages: res.data.beverages,
          caterBreakfast: res.data.breakfastbrunch,
          caterDesserts: res.data.desserts,
          caterFavors: res.data.favorsgiftbaskets,
          caterInHouseEvents: res.data.inhouseeventpackages,
          caterLunch: res.data.lunch,
          caterPlatters: res.data.platters
        });
      })
      .catch(err => console.log(err));
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
                        onClick={() => { this.toggle('1'); this.loadCateringMenuItems(); }}>
                        Breakfast & Brunch
                      </NavLink>
                    </NavItem>
                    <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('2'); this.loadCateringMenuItems(); }}>
                       Beverages
                      </NavLink>
                    </NavItem>
                     <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '3' })}
                        onClick={() => { this.toggle('3'); this.loadCateringMenuItems(); }}>
                       Desserts
                      </NavLink>
                    </NavItem>
                     <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '4' })}
                        onClick={() => { this.toggle('4'); this.loadCateringMenuItems(); }}>
                      Favors & Gift Baskets
                      </NavLink>
                    </NavItem>
                      <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '5' })}
                        onClick={() => { this.toggle('5'); this.loadCateringMenuItems(); }}>
                      In House Event Packages
                      </NavLink>
                    </NavItem>
                      <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '6' })}
                        onClick={() => { this.toggle('6'); this.loadCateringMenuItems(); }}>
                      Lunch
                      </NavLink>
                    </NavItem>
                    <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '8' })}
                        onClick={() => { this.toggle('7'); this.loadCateringMenuItems(); }}>
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
                        
                        <div className="scrollitCater">
                            {this.state.caterBreakfast.map(item => (
                              <div key={item.id}>
                                <p className="menuItemTitle">{item.title}</p>
                                <p className="menuItemPrice">{item.price}</p>
                                <p className="menuItemDescript">{renderHTML(item.description) }</p><br/>
                              </div>
                            ))}
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
                            {this.state.caterBeverages.map(item => (
                              <div key={item.id}>
                                <p className="menuItemTitle">{item.title}</p>
                                <p className="menuItemPrice">{item.price}</p>
                                <p className="menuItemDescript">{renderHTML(item.description) }</p><br/>
                              </div>
                            ))}
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
                            {this.state.caterDesserts.map(item => (
                              <div key={item.id}>
                                <p className="menuItemTitle">{item.title}</p>
                                <p className="menuItemPrice">{item.price}</p>
                                <p className="menuItemDescript">{renderHTML(item.description) }</p><br/>
                              </div>
                            ))}
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
                            {this.state.caterFavors.map(item => (
                              <div key={item.id}>
                                <p className="menuItemTitle">{item.title}</p>
                                <p className="menuItemPrice">{item.price}</p>
                                <p className="menuItemDescript">{renderHTML(item.description) }</p><br/>
                              </div>
                            ))}
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
                            {this.state.caterInHouseEvents.map(item => (
                              <div key={item.id}>
                                <p className="menuItemTitle">{item.title}</p>
                                <p className="menuItemPrice">{item.price}</p>
                                <p className="menuItemDescript">{renderHTML(item.description) }</p><br/>
                              </div>
                            ))}
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
                            {this.state.caterLunch.map(item => (
                              <div key={item.id}>
                                <p className="menuItemTitle">{item.title}</p>
                                <p className="menuItemPrice">{item.price}</p>
                                <p className="menuItemDescript">{renderHTML(item.description) }</p><br/>
                              </div>
                            ))}
                        </div>
                      </MenuContent>
                    </TabPane>
                  </TabContent>
                  
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="7">
                      <MenuContent> 
                        <div className="menuTitle">
                            PLATTERS
                        </div>
                        
                        <div className="scrollit">
                            {this.state.caterPlatters.map(item => (
                              <div key={item.id}>
                                <p className="menuItemTitle">{item.title}</p>
                                <p className="menuItemPrice">{item.price}</p>
                                <p className="menuItemDescript">{renderHTML(item.description) }</p><br/>
                              </div>
                            ))}
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
