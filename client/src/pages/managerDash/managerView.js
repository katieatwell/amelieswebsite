import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import UpdateForm from "../../components/forms/managerupdate/updateform";
import AddNewForm from "../../components/forms/managerupdate/addnew";
import ManagerSidebar from "../../components/managernav/sidebar";
import CakeForm from "../../components/forms/managerupdate/cakeform";
import AddNewCake from "../../components/forms/managerupdate/addnewcake";
import API from "../../utils/API";
import { Row, Col } from "reactstrap";
import { Redirect } from 'react-router';
import axios from "axios";

axios.defaults.headers.common['Authorization'] = "jwt " + sessionStorage.getItem('token');

class ManagerView extends Component {

    //simplify how menu data will be stored (load entire menus into three states and then go from there)
    constructor(props) {
        super(props);
        this.changeForms = this.changeForms.bind(this);
        this.state = {
            currentItem: [{ title: "", desc: "", price: "", id: "", category: "", cafeorcatering: "" }],
            currentCake: [{ descriptor: "", detail: "", category: "", id: "" }],
            cafeBreakfastMenu: [],
            cafeLunchMenu: [],
            cafeCoffeeMenu: [],
            cafePastryMenu: [],
            cakesComposedMenu: [],
            cakesPriceMenu: [],
            cateringBreakfastMenu: [],
            cateringBeverageMenu: [],
            cateringLunchMenu: [],
            cateringPlatterMenu: [],
            cateringDessertMenu: [],
            cateringWeddingMenu: [],
            cateringFGBMenu: [],
            cateringIHEMenu: [],
            // cakesBYOMenu: [],
            menuOperator: ""
        };
    }
    //Grab item from sidebar (cafe) menu on click and set state of currentItem --> 
    //Then use this information to populate the values of the form
    populateFormCCMenu = (event) => {
        event.preventDefault();
        const { title, desc, price, id, category, cafeorcatering } = event.target.dataset;
        console.log(event.target.dataset);
        this.setState({
            currentItem: [{
                title,
                desc,
                price,
                id,
                category,
                cafeorcatering
            }]
        });

    }
    //Grab item from sidebar (cafe) menu on click and set state of currentItem --> 
    //Then use this information to populate the values of the form
    populateFormCakeMenu = (event) => {
        event.preventDefault();
        const { id, descriptor, detail, category } = event.target.dataset;
        console.log("dataset " + JSON.stringify(event.target.dataset));
        this.setState({
            currentCake: [{
                id,
                descriptor,
                detail,
                category
            }]
        });
    }

    componentDidMount() {
        this.isAuthed();
    }
    //Make form field values able to handle change for title, price etc. 
    //Then set the state of the current item to that new value
    //Consolidate these methods in to a single one?
    handleCurrentItemTitleChange = (event) => {
        const newCurrentItem = this.state.currentItem.map((currentItem, secondItem) => {
            return { ...currentItem,
                title: event.target.value
            };
        });
        this.setState({ currentItem: newCurrentItem }, () => console.log(this.state.currentItem));
    }

    handleCurrentItemPriceChange = (event) => {
        const newCurrentItem = this.state.currentItem.map((currentItem, secondItem) => {
            return { ...currentItem,
                price: event.target.value
            };
        });
        this.setState({ currentItem: newCurrentItem });
    }

    handleCurrentItemCategoryChange = (event) => {
        const newCurrentItem = this.state.currentItem.map((currentItem, secondItem) => {
            return { ...currentItem,
                category: event.target.value
            };
        });
        this.setState({ currentItem: newCurrentItem });
    }

    handleCurrentItemCafeorCateringChange = (event) => {
        const newCurrentItem = this.state.currentItem.map((currentItem, secondItem) => {
            return { ...currentItem,
                cafeorcatering: event.target.value
            };
        });
        this.setState({ currentItem: newCurrentItem });
    }

    handleCurrentItemDescChange = (value) => {
        const newCurrentItem = this.state.currentItem.map((currentItem, secondItem) => {
            return { ...currentItem,
                desc: value
            };
        });
        this.setState({ currentItem: newCurrentItem });
    }

    handleCurrentCakeDetailsChange = (value) => {
        const newCurrentCake = this.state.currentCake.map((currentCake, secondItem) => {
            return { ...currentCake,
                detail: value
            };
        });
        this.setState({ currentCake: newCurrentCake });
    }
    //Load Items from the cafe menu and set the state of the individual menus based on this state
    loadCafeMenuItems = () => {
        API.getCafeMenuItems()
            .then(res =>
                this.setState({
                    cafeBreakfastMenu: res.data.breakfast,
                    cafeLunchMenu: res.data.lunchdinner,
                    cafeCoffeeMenu: res.data.coffeetea,
                    cafePastryMenu: res.data.dessertspastry

                })).catch(err => console.log(err));
    }
    loadCakePriceItems = () => {
        API.getPriceCakeMenuItems()
            .then(res =>
                this.setState({
                    cakesPriceMenu: res.data.price
                })
            );
    }
    //Load all catering menus and their respective items
    loadCateringMenuItems = () => {
        API.getCateringMenuItems()
            .then(res => this.setState({
                cateringBreakfastMenu: res.data.breakfastbrunch,
                cateringBeverageMenu: res.data.beverages,
                cateringLunchMenu: res.data.lunch,
                cateringPlatterMenu: res.data.platters,
                cateringDessertMenu: res.data.desserts,
                cateringFGBMenu: res.data.favorsgiftbaskets,
                cateringIHEMenu: res.data.inhouseeventpackages
            }));
    }
    //load composed cake menu and its items
    loadComposedCakeMenuItems = () => {
        API.getComposedCakeMenuItems()
            .then(res =>
                this.setState({
                    cakesComposedMenu: [
                        res.data[0].data,
                        res.data[1].data
                    ]
                }));
                
    loadCakePriceItems = () => {
        API.getPriceCakeMenuItems()
            .then(res =>
                this.setState({
                    cakesPriceMenu: res.data
                })
            );
    }
    //Load all catering menus and their respective items
    loadCateringMenuItems = () => {
        API.getCateringMenuItems()
            .then(res => this.setState({
                cateringBreakfastMenu: res.data.breakfastbrunch,
                cateringBeverageMenu: res.data.beverages,
                cateringLunchMenu: res.data.lunch,
                cateringPlatterMenu: res.data.platters,
                cateringDessertMenu: res.data.desserts,
                cateringFGBMenu: res.data.favorsgiftbaskets,
                cateringIHEMenu: res.data.inhouseeventpackages
            }));
    }
    //load composed cake menu and its items
    loadComposedCakeMenuItems = () => {
        API.getComposedCakeMenuItems()
            .then(res =>
                this.setState({
                    cakesComposedMenu: res.data
                }, () => console.log(res.data)));
    }
    //Update an item on the cake menu based on the "current" item
    updateCakeMenuItem = () => {
        let itemData = {
            id: this.state.currentCake[0].id,
            category: this.state.currentCake[0].category,
            descriptor: this.state.currentCake[0].descriptor,
            detail: this.state.currentCake[0].detail
        };
        API.updateCakeMenuItem(itemData)
            .then(res => {
                this.setState({ currentCake: [{ descriptor: "", detail: "", category: "", id: "" }] });
                this.loadCakeMenuItems();
                console.log("updating cake " + itemData.id);
            })
            .catch(err => console.log(err));
    }
    //Update a cafe OR catering menu item
    updateCCMenuItem = () => {
        console.log("here");
        let itemData = {
            id: this.state.currentItem[0].id,
            category: this.state.currentItem[0].category,
            cafeOrcatering: this.state.currentItem[0].cafeorcatering,
            title: this.state.currentItem[0].title,
            price: this.state.currentItem[0].price,
            description: this.state.currentItem[0].desc
        };
        API.updateCCMenuItem(itemData)
            .then(res => {
                this.setState({
                    currentItem: [{ title: "", desc: "", price: "", id: "", category: "", cafeorcatering: "" }],
                    currentCake: [{ descriptor: "", detail: "", category: "", id: "" }]
                });
                this.loadCafeMenuItems();
                this.loadCateringMenuItems();
                console.log("this is updating");
            })
            .catch(err => console.log(err));
    }
    //Delete a cafe OR catering menu item
    deleteCCMenuItem = () => {
        let id = { id: this.state.currentItem[0].id };
        console.log(id);
        API.deleteCCMenuItem(id)
            .then(res => {
                this.setState({
                    currentItem: [{ title: "", desc: "", price: "", id: "", category: "", cafeorcatering: "" }]
                });
                this.loadCafeMenuItems();
                this.loadCateringMenuItems();
                console.log("this is deleting");
            })
            .catch(err => console.log(err));
    }
    deleteComposedCakeMenuItem = () => {
        let id = { id: this.state.currentCake[0].id };
        console.log(id);
        API.deleteCakeMenuItem(id)
            .then(res => {
                this.setState({ currentCake: [{ descriptor: "", detail: "", category: "", id: "" }] });
                this.loadComposedCakeMenuItems();
            });
    }
    //change the forms for cakes/cafe/and add new
    changeForms(menuState) {
        console.log(menuState);
        this.setState({
            menuOperator: menuState
        });
    }

    isAuthed() {
        let token = sessionStorage.getItem('token');
        // console.log('token: ' + token);
        //this.loadCafeMenuItems();

        if (token) {
            //add validation logic here, see if token has expired?
            //console.log(token);
            return true;
        }
        else {
            console.log("NO TOKEN!!!")
            return this.authed = true;
        }
    }

    authed = true;

    render() {
        return (
            this.authed ?
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
                        <ManagerSidebar value = {this.state.value}
                        populateFormCCMenu = {this.populateFormCCMenu} 
                        changeForms = {this.changeForms} 
                        loadCafeMenuItems = {this.loadCafeMenuItems} 
                        loadCateringMenuItems = {this.loadCateringMenuItems} 
                        loadComposedCakeMenuItems = {this.loadComposedCakeMenuItems} 
                        loadCakePriceItems = {this.loadCakePriceItems}
                        cafeBreakfastMenu = {this.state.cafeBreakfastMenu}
                        cafeCoffeeMenu = {this.state.cafeCoffeeMenu}
                        cafeLunchMenu = {this.state.cafeLunchMenu}
                        cafePastryMenu = {this.state.cafePastryMenu}
                        cakesComposedMenu = {this.state.cakesComposedMenu}
                        populateFormCakeMenu = {this.populateFormCakeMenu}
                        cateringBreakfastMenu = {this.state.cateringBreakfastMenu}
                        cateringBeverageMenu = {this.state.cateringBeverageMenu}
                        cateringLunchMenu = {this.state.cateringLunchMenu}
                        cateringPlatterMenu = {this.state.cateringPlatterMenu}
                        cateringDessertMenu= {this.state.cateringDessertMenu}
                        cateringWeddingMenu= {this.state.cateringWeddingMenu}
                        cateringFGBMenu= {this.state.cateringFGBMenu}
                        cateringIHEMenu= {this.state.cateringIHEMenu}
                        cakesPriceMenu= {this.state.cakesPriceMenu}
                        menuOperator ={this.state.menuOperator}/>
                    </Col>
                   
                   
                    <Col lg="8">
                    <div>
                    {this.state.menuOperator === "cafe"
                       ? <UpdateForm {...this.props} 
                       updateCCMenuItem = {this.updateCCMenuItem}
                       handleCurrentItemCafeorCateringChange = {this.handleCurrentItemCafeorCateringChange}
                       handleCurrentItemTitleChange = {this.handleCurrentItemTitleChange} 
                       handleCurrentItemPriceChange = {this.handleCurrentItemPriceChange}
                       handleCurrentItemCategoryChange = {this.handleCurrentItemCategoryChange}
                       handleCurrentItemDescChange = {this.handleCurrentItemDescChange}
                       currentItem = {this.state.currentItem}
                       deleteCCMenuItem = {this.deleteCCMenuItem}/> 
                       : <div></div>
                    }
                      {this.state.menuOperator === "cake"
                      ? <CakeForm changeForms = {this.changeForms}
                      cakesComposedMenu = {this.state.cakesComposedMenu}
                      currentCake = {this.state.currentCake}
                      populateFormCakeMenu = {this.populateFormCakeMenu}
                      handleCurrentCakeDetailsChange = {this.handleCurrentCakeDetailsChange}
                      updateCakeMenuItem = {this.updateCakeMenuItem}
                      deleteComposedCakeMenuItem = {this.deleteComposedCakeMenuItem}/>
                      :
                      <div></div>
                    }
                    
                    {this.state.menuOperator === "addNewCafe"
                    ? <AddNewForm 
                    loadCafeMenuItems = { this.loadCafeMenuItems }
                    changeForms = { this.changeForms }
                  />
                  : <div></div>
                    }
                    
                      {this.state.menuOperator === "addNewCake"
                    ? <AddNewCake 
                    loadCakeMenuItems = { this.loadCafeMenuItems }
                    changeForms = { this.changeForms }
                  />
                  : <div></div>
                    }
                  </div>
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
