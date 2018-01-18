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
        <Navbar color="faded" light expand="md" id="NavBar">
          <NavbarBrand href="/">Amelie's French Bakery</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
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
                <DropdownToggle nav caret>
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
                <DropdownToggle nav caret>
                  CONTACT
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                  <NavLink href="/contact">Contact Us</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/locations">Locations</NavLink>
                  </DropdownItem>
                    <DropdownItem>
                    <NavLink href="/eventscontacts">Event Contacts</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
                     <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  CATERING & EVENTS
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                  <NavLink href="/eventscontacts">Event Contacts</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/cateringmenu">Catering Menu</NavLink>
                  </DropdownItem>
                    <DropdownItem>
                    <NavLink href="/eventrooms">Event Rooms</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/specialevents">Special Events</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
