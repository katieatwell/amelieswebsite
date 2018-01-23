import React, { Component } from "react";
import NavBar from "../../components/navbar";
import Container from "../../components/container";
import MainPanel from "../../components/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import UpdateForm from "../../components/forms/managerupdate/updateform";
// import AddNewForm from "../../components/forms/managerupdate/addnew";
import ManagerSidebar from "../../components/managernav/sidebar";
import Footer from "../../components/footer";
import { Row, Col } from "reactstrap";


class ManagerView extends Component {
    // constructor(props) {
    //     super(props);
    //     this.toggle = this.toggle.bind(this);
    //     this.state = { addNew: false, hidden: true };
    // }

    // toggle(event) {
    //     let id = event.target.id;
    //     if (id === "addNew") {
    //         this.setState({ addNew: !this.state.addNew, hidden: !this.state.hidden });
    //     }
    //     else {
    //         hidden: true;
    //     }
    // }

    //Add code to hide addNew form and only make visible when add new is clicked
    //Toggle to click between the two forms...

    render() {
        return (
            <Container>
                <NavBar/>
                <MainPanel>
                <Row>
                    <Col lg="5">
                    <PanelTitle>
                       Add/Update Menus:
                    </PanelTitle>
                    </Col>
                 </Row>
                 <Row>
                  
                    <Col lg="4">
                        <ManagerSidebar />
                    </Col>
                   
                   
                    <Col lg="8">
                        <UpdateForm />
                        {/*<AddNewForm hidden={this.state.hidden} isOpen={this.state.addnew}/>*/}
                    </Col>
                  
                </Row>
                </MainPanel>
                <Footer/>
            </Container>
        );
    }
}

export default ManagerView;
