import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import UpdateForm from "../../components/forms/managerupdate/updateform";
import AddNewForm from "../../components/forms/managerupdate/addnew";
import ManagerSidebar from "../../components/managernav/sidebar";
import API from "../../utils/API";
import { Row, Col } from "reactstrap";
import { Route, Redirect } from 'react-router';
import axios from "axios";

axios.defaults.headers.common['Authorization'] = "jwt " +sessionStorage.getItem('token');

class ManagerView extends Component {
    
    //SIMPLIFY THE WAY DATA IS BEING STORED? 
    constructor(props) {
        super(props);
        this.toggleForms = this.toggleForms.bind(this);
        this.state = {
            currentItem: [],
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

    populateQuillCCMenu = (event) => {
        event.preventDefault();
        const { title, desc, price } = event.target.dataset;
        console.log(event.target.dataset);
        this.setState({
            currentItem: [
                title,
                desc,
                price
            ]
        }, () => console.log(this.state.currentItem));

    }

    loadCafeMenuItems = () => {
        API.getCafeMenuItems()
            .then(res =>
                this.setState({
                    cafeBreakfastMenu: res.data.breakfast
                }))
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

    toggleForms(hasQuill) {
        this.setState({ addNewItemForm: !hasQuill, updateForm: hasQuill });
    }
    
    isAuthed(){
        let token = sessionStorage.getItem('token');
        console.log('token: '+token);
        if (token){
            //add validation logic here, see if token has expired?
            return true;
        }else{
            return false;
        }
    }

    render() {
        return (
            this.isAuthed() 
            ?(<Wrapper>
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
                        <ManagerSidebar populateQuillCCMenu= {this.populateQuillCCMenu} toggleForms = {this.toggleForms} loadCafeMenuItems = {this.loadCafeMenuItems} loadCateringMenuItems={this.loadCateringMenuItems} loadCakeMenuItems={this.loadCakeMenuItems} cafeBreakfastMenu={this.state.cafeBreakfastMenu}/>
                    </Col>
                   
                   
                    <Col lg="8">
                    {this.state.updateForm 
                       ? <UpdateForm {...this.props} currentItem = {this.state.currentItem}/> 
                       : <AddNewForm {...this.props} addNewItemForm = {this.state.addNewItemForm} />
                    }
                    </Col>
                  
                </Row>
                </MainPanel>
            </Wrapper>)
            :(
                <Redirect to ="/managerlogin"/>
            )
        );
    }
}

export default ManagerView;
