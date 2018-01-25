import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import UpdateForm from "../../components/forms/managerupdate/updateform";
import AddNewForm from "../../components/forms/managerupdate/addnew";
import ManagerSidebar from "../../components/managernav/sidebar";
import API from "../../utils/API";
import { Row, Col } from "reactstrap";


class ManagerView extends Component {
    //SIMPLIFY THE WAY DATA IS BEING STORED? 
    constructor(props) {
        super(props);
        this.toggleForms = this.toggleForms.bind(this);
        this.state = {
            cafeBreakfastMenu: [],
            cafeLunchMenu: [],
            cafeCoffeeMenu: [],
            cafeDessertMenu: [],
            cateringBreakfastMenu: [],
            cateringBeverageMenu: [],
            cateringLunchMenu: [],
            cateringPlatterMenu: [],
            cateringDessertMenu: [],
            cateringWeddingMenu: [],
            cateringFGBMenu: [],
            cateringIHEMenu: [],
            cakesComposedMenu: [],
            cakesBYOMenu: [],
            addNewItemForm: false,
            updateForm: true
        };
    }

    loadCafeMenuItems = () => {
        API.getCafeMenuItems()
            .then(res => this.setState({
                cafeBreakfastMenu: res.data.breakfast,
                cafeLunchMenu: res.data.lunchdinner,
                cafeCoffeeMenu: res.data.coffeetea,
                cafeDessertMenu: res.data.dessertpastry

            }), (res) => console.log(res.data.breakfast))
            .catch(err => console.log(err));
    }

    loadCateringMenuItems = () => {
        API.getCateringMenuItems()
            .then(res => this.setState({
                cateringBreakfastMenu: res.data.breakfast,
                cateringBeverageMenu: res.data.beverage,
                cateringLunchMenu: res.data.lunch,
                cateringPlatterMenu: res.data.platter,
                cateringDessertMenu: res.data.dessert,
                cateringWeddingMenu: res.data.wedding,
                cateringFGBMenu: res.data.favors,
                cateringIHEMenu: res.data.inhouseevents,
            }));
    }

    loadCakeMenuItems = () => {
        API.getCakeMenuItems()
            .then(res => this.setState({
                cakesComposedMenu: res.data.composedcakes,
                cakesBYOMenu: res.data.buildyourown
            }));
    }

    toggleForms() {
        this.setState({ addNewItemForm: !this.state.addNewItemForm, updateForm: !this.state.updateForm });
    }

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
                        <ManagerSidebar toggleForms = {this.toggleForms} loadCafeMenuItems = {this.loadCafeMenuItems} loadCateringMenuItems={this.loadCateringMenuItems} loadCakeMenuItems={this.loadCakeMenuItems} {...this.state}/>
                    </Col>
                   
                   
                    <Col lg="8">
                    {this.state.updateForm 
                       ? <UpdateForm {...this.props} /> 
                       : <AddNewForm {...this.props} addNewItemForm = {this.state.addNewItemForm} />
                    }
                    </Col>
                  
                </Row>
                </MainPanel>
            </Wrapper>
        );
    }
}

export default ManagerView;
