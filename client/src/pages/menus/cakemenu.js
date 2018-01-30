import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MenuPanel from "../../components/mainpanel/menupanel";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from "classnames";
import { MenuContent } from "../../components/menu/menucontents";
import CakeForm from "../../components/forms/cakeform";
import API from "../../utils/API";
import renderHTML from "react-render-html";
import "./style.css";

class CakeMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      cakeComposed: []
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
    this.loadCakeMenuItems();
  }

  loadCakeMenuItems = () => {
    API.getComposedCakeMenuItems()
      .then(res => {
        console.log(res.data);
        this.setState({
          cakeComposed: res.data
        }, console.log(this.state));
      });
  }

  render() {
    return (
      <Wrapper>
        <MenuPanel>
            <div className="menuWrapper">
              
              <PanelBody>
                  <Nav className="menuNav" justified>
                    <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('1'), this.loadCakeMenuItems() }}>
                            Composed Cakes
                      </NavLink>
                    </NavItem>
                    
                    <NavItem className="navMenuTitle">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('2'); }}>
                            Build Your Own Cake
                      </NavLink>
                    </NavItem>
                  </Nav>
                  
                  
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <MenuContent> 
                          <div className="menuTitle">
                              COMPOSED CAKES
                          </div>
                          
                          <div className="scrollit">
                            {this.state.cakeComposed.map(item => (
                                <div key={item.id}>
                                  <p className="menuItemTitle">{item.descriptor}</p>
                                  <p className="menuItemDescript">{renderHTML(item.detail) }</p><br/>
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
                            BUILD YOUR OWN CAKE
                        </div>
                        
                        <div className="scrollit">
                            <CakeForm/>
                            <br/>
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

export default CakeMenu;
