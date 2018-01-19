import React, {Component} from "react";
import NavBar from "../../components/navbar"; 
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel"
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import { Row, Col } from 'reactstrap';
import ReactPlayer from "react-player";
import Footer from "../../components/footer";
import "./style.css";


class LandingPage extends Component {

render () {
    return (
        <Container>
            <NavBar />
                <MainPanel>
                    <PanelTitle>
                        Wedding Events
                    </PanelTitle>
                    <PanelBody>
                        <Row>
                        <Col xs="12" sm="12" md="12" className="specialEventsDiv">
                            <ReactPlayer url="https://player.vimeo.com/video/102756893?color=8e9191&title=0&portrait=0" width="auto"/>
                            <br /><br />
                            
                            With fun, colorful dessert bars and elegantly hand prepared Wedding Cakes, Amélie's can make your Wedding Day both memorable and delicious. We also provide all day packages to keep your Wedding Party relaxed and energized as you prepare for the main event.  Let us be your something blue!
                            <br /><br />
                            
                            Contact Summer Williams for a wedding cake consultation at cakes@ameliesfrenchbakery.com
                            <br /><br />
                            
                            Cake Tastings for $15!
                            Sample 3 cake varieties, 3 fillings, and 3 buttercream flavors while meeting with our Specialty Cake Director.
                            (Tasting cost plus tax will be deducted from the final booking cost.)
                            <br /><br />
                            
                            Tiered Cakes at $5.25 per serving
                            <br /><br />
                            
                            Delivery Available
                            $50 Delivery Fee within 40 miles round trip of Noda Bakery. Each additional mile will be charged $1.00 per mile.
 
                        
                        </Col>
                        </Row>

                    </PanelBody>
                </MainPanel>
            <Footer />
        </Container>
)}

}

export default LandingPage;
