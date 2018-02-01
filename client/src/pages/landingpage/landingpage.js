import React from "react";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import Footer from "../../components/footer";
import { Row, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import "./landingpage.css";


export default class LandingPage extends React.Component {

  render() {
    return (
      <div>
            <div className="landingPageWrapper">
                <PanelBody >
                    <Row className="landingPageHeader">
                            <div>
                                <img src="./display_images/textdivider.png" alt="textdivider" className="textDivider"/>
                                
                                <p className="welcomeText">Welcome to</p>
                                
                                <img src="./display_images/banner.png" alt="brand" className="bannerImg" />
                            </div>
                    </Row>
                    
                    <Row id="landingPageBody">
                            <UncontrolledDropdown >
                                <DropdownToggle nav nav color="faded" light expand="md" className="navLinkName">
                                  ABOUT US
                                </DropdownToggle>
                                <DropdownMenu>
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
                              
                            <img src="./pro_images/ameliestable.jpg" alt="ameliestable" className="proImg wallframeIMG" width="300vw" height="20%"/>

                            <UncontrolledDropdown >
                            <DropdownToggle nav color="faded" light expand="md" className="navLinkName">
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
                            

                            <img src="./pro_images/macaroonandberry.jpg" alt="macaroon" className="proImg" width="300vw" height="20%"/>

                            <img src="./display_images/fleur.png" width="100vh" alt="fleur" height="100vh" className="fleurIMG" />
                            
                            <img src="./pro_images/latte.jpg" className="proImg" alt="latte" width="300vw" height="20%"/>
                            
                            <UncontrolledDropdown>
                                <DropdownToggle nav color="faded" light expand="md" className="navLinkName">
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

                        <img src="./pro_images/light.jpg" className="proImg tableIMG" alt="light" width="300vw" height="20%"/>

                            <UncontrolledDropdown >
                                <div className="navLinkName">
                                <NavLink href="/blog">BLOG</NavLink>
                                </div>
                            </UncontrolledDropdown>

                        <img src="./pro_images/wallframe.jpg" className="proImg lightIMG" alt="wallframe" width="300vw" height="20%"/>

                        <img src="./display_images/fleur.png" width="100vh" height="100vh" alt="fleur" className="fleurIMG" />
                            
                        <img src="./pro_images/meringue.jpg" className="proImg" width="300vw" alt="meringue" height="20%"/>

                        <UncontrolledDropdown>
                            <DropdownToggle nav color="faded" light expand="md" className="navLinkName">
                                CATERING & <br/> EVENTS
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
                    </Row>
                    
                </PanelBody>
            </div>
            
            <Footer/>
            </div>
    );
  }
}
