import React from 'react';
import "./style.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
}
from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <div className="wrap">
         {/*<Navbar color="faded" light expand="md" id="NavBar" justified>*/}
              <Navbar color="black" light expand="md" id="NavBar" justified>
                <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar className="navDiv">
                        <NavbarBrand href="/"><img src="/display_images/logo-new.png" alt="logo" className="logo" /></NavbarBrand>
                            <div className="navWrapper">
                              <Nav navbar className="mx-auto">
                                <UncontrolledDropdown nav inNavbar>
                                  <DropdownToggle nav >
                                    ABOUT US
                                  </DropdownToggle>
                                  <DropdownMenu >
                                    <DropdownItem>
                                    <NavLink href="/core-values">Core Values</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                      <NavLink href="/privacy">Privacy Policy</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                      <NavLink href="/terms">Terms of Service</NavLink>
                                    </DropdownItem>
                                  </DropdownMenu>
                                </UncontrolledDropdown>
                                   <UncontrolledDropdown nav inNavbar>
                                  <DropdownToggle nav >
                                    MENUS
                                  </DropdownToggle>
                                  <DropdownMenu >
                                    <DropdownItem>
                                    <NavLink href="/cafemenu">Café</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                      <NavLink href="/cakemenu">Cakes</NavLink>
                                    </DropdownItem>
                                  </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                  <NavLink href="/blog">BLOG</NavLink>
                                </NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                  <DropdownToggle nav >
                                    CONTACT
                                  </DropdownToggle>
                                  <DropdownMenu >
                                    <DropdownItem>
                                    <NavLink href="/contact-us">Contact Us</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                      <NavLink href="/locations">Locations</NavLink>
                                    </DropdownItem>
                                      <DropdownItem>
                                      <NavLink href="/contact-events">Event Contacts</NavLink>
                                    </DropdownItem>
                                  </DropdownMenu>
                                </UncontrolledDropdown>
                                       <UncontrolledDropdown nav inNavbar>
                                  <DropdownToggle nav >
                                    CATERING & EVENTS
                                  </DropdownToggle>
                                  <DropdownMenu >
                                    <DropdownItem>
                                    <NavLink href="/contact-events">Event Contacts</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                      <NavLink href="/catering-menu">Catering Menu</NavLink>
                                    </DropdownItem>
                                      <DropdownItem>
                                      <NavLink href="/event-rooms">Event Rooms</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                      <NavLink href="/special-events">Special Events</NavLink>
                                    </DropdownItem>
                                  </DropdownMenu>
                                </UncontrolledDropdown>
                              </Nav>
                            </div>
                          </Collapse>
                        </Navbar>
                    </div>
      </div>
    );
  }
}
