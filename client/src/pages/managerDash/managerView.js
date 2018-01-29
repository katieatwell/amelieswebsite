import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import UpdateForm from "../../components/forms/managerupdate/updateform";
import AddNewForm from "../../components/forms/managerupdate/addnew";
import ManagerSidebar from "../../components/managernav/sidebar";
import API from "../../utils/API";
import { Row, Col } from "reactstrap";
import { Redirect } from 'react-router';
import axios from "axios";

axios.defaults.headers.common['Authorization'] = "jwt " + sessionStorage.getItem('token');

class ManagerView extends Component {

    //simplify how menu data will be stored (load entire menus into three states and then go from there)
    constructor(props) {
        super(props);
        this.toggleForms = this.toggleForms.bind(this);
        this.state = {
            currentItem: [{ title: "", desc: "", price: "", id: "", category: "", cafeOrcatering: "" }],
            cafeBreakfastMenu: [],
            addNewItemForm: false,
            updateForm: true
        };
    }

    populateFormCCMenu = (event) => {
        event.preventDefault();
        const { title, desc, price, id, category } = event.target.dataset;
        console.log(event.target.dataset);
        this.setState({
            currentItem: [{
                title,
                desc,
                price,
                id,
                category
            }]
        }, () => console.log(this.state.currentItem[0].title));

    }
    //Consolidate these methods in to a single one?
    handleCurrentItemTitleChange = (i) => (event) => {
        const newCurrentItem = this.state.currentItem.map((currentItem, secondItem) => {
            if (i !== secondItem) return i;
            return { ...currentItem,
                title: event.target.value
            };
        });
        this.setState({ currentItem: newCurrentItem }, () => console.log(this.state.currentItem));
    }

    handleCurrentItemPriceChange = (i) => (event) => {
        const newCurrentItem = this.state.currentItem.map((currentItem, secondItem) => {
            if (i !== secondItem) return i;
            return { ...currentItem,
                price: event.target.value
            };
        });
        this.setState({ currentItem: newCurrentItem });
    }

    handleCurrentItemCategoryChange = (i) => (event) => {
        const newCurrentItem = this.state.currentItem.map((currentItem, secondItem) => {
            if (i !== secondItem) return i;
            return { ...currentItem,
                category: event.target.value
            };
        });
        this.setState({ currentItem: newCurrentItem });
    }

    loadCafeMenuItems = () => {
        API.getCafeMenuItems()
            .then(res =>
                this.setState({
                    cafeBreakfastMenu: res.data.breakfast
                })).catch(err => console.log(err));
    }

    updateCafeMenuItem = (item_id) => {
        let itemData = {
            id: this.state.currentItem[0].id,
            category: this.state.currentItem[0].category,
            cafeOrcatering: this.state.currentItem[0].cafeOrcatering,
            title: this.state.currentItem[0].title,
            price: this.state.currentItem[0].price,
            description: this.state.currentItem[0].desc
        }
        API.updateCCMenuItem(itemData)
            .then(res => this.loadCafeMenuItems(), () => console.log("Updating" + JSON.stringify(itemData)))
            .catch(err => console.log(err));
    }


    // loadCateringMenuItems = () => {
    //     API.getCateringMenuItems()
    //         .then(res => this.setState({
    //             cateringBreakfastMenu: res.data.breakfast,
    //             cateringBeverageMenu: res.data.beverage,
    //             cateringLunchMenu: res.data.lunch,
    //             cateringPlatterMenu: res.data.platter,
    //             cateringDessertMenu: res.data.dessert,
    //             cateringWeddingMenu: res.data.wedding,
    //             cateringFGBMenu: res.data.favors,
    //             cateringIHEMenu: res.data.inhouseevents,
    //         }));
    // }

    // loadCakeMenuItems = () => {
    //     API.getCakeMenuItems()
    //         .then(res => this.setState({
    //             cakesComposedMenu: res.data.composedcakes,
    //             cakesBYOMenu: res.data.buildyourown
    //         }));
    // }

    toggleForms(hasQuill) {
        this.setState({ addNewItemForm: !hasQuill, updateForm: hasQuill });
    }

    isAuthed() {
        let token = sessionStorage.getItem('token');
        // console.log('token: ' + token);
        this.loadCafeMenuItems();
        if (token) {
            //add validation logic here, see if token has expired?
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        return (
            this.isAuthed() ?
            (<Wrapper>
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
                        <ManagerSidebar value={this.state.value}
                        populateFormCCMenu= {this.populateFormCCMenu} 
                        toggleForms = {this.toggleForms} 
                        loadCafeMenuItems = {this.loadCafeMenuItems} 
                        loadCateringMenuItems={this.loadCateringMenuItems} 
                        loadCakeMenuItems={this.loadCakeMenuItems} 
                        cafeBreakfastMenu={this.state.cafeBreakfastMenu}/>
                    </Col>
                   
                   
                    <Col lg="8">
                    {this.state.updateForm 
                       ? <UpdateForm {...this.props} 
                       updateCafeMenuItem = {this.updateCafeMenuItem}
                       handleCurrentItemTitleChange = {this.handleCurrentItemTitleChange} 
                       handleCurrentItemPriceChange = {this.handleCurrentItemPriceChange}
                       handleCurrentItemCategoryChange = {this.handleCurrentItemCategoryChange}
                       currentItem = {this.state.currentItem}/> 
                       : <AddNewForm 
                       loadCafeMenuItems = {this.loadCafeMenuItems}
                       addNewItemForm = {this.state.addNewItemForm}
                       toggleForms = {this.toggleForms}/>
                    }
                    </Col>
                  
                </Row>
                </MainPanel>
            </Wrapper>) :
            (
                <Redirect to ="/managerlogin"/>
            )
        );
    }
}

export default ManagerView;
