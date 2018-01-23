import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import UpdateForm from "../../components/forms/managerupdate/updateform";
// import AddNewForm from "../../components/forms/managerupdate/addnew";
import ManagerSidebar from "../../components/managernav/sidebar";
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
            <Wrapper>
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
            </Wrapper>
        );
    }
}

export default ManagerView;
