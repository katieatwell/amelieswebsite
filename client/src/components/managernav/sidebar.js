import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Collapse, Card } from "reactstrap";
import "./style.css";

export default class ManagerSidebar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: [false, false, false],
            cakeForm: "cake",
            cafeForm: "cafe",
            addNewCafe: "addNewCafe",
            addNewCake: "addNewCake"
        };
        this.id = "";
    }

    componentDidMount() {
        this.props.loadCafeMenuItems();
    }

    toggle(num) {
        let tempArr = [...this.state.collapse];
        tempArr[num] = !tempArr[num];
        this.setState({ collapse: tempArr });
    }

    render() {
        return (
            <div>
    <ListGroup>
        <ListGroupItem className="topLayerItem" id="1" action  onClick={() => {this.toggle(0); this.props.loadCafeMenuItems(); this.props.changeForms(this.state.cafeForm)}}>
            Cafe Menu
            <Collapse isOpen={this.state.collapse[0]}>
            <ListGroup>
                <ListGroupItem action className="midLayerItem">Breakfast
                    {this.props.cafeBreakfastMenu.length ? (
                        <ListGroup className="scrollSidebar midLayerGroup">
                            {this.props.cafeBreakfastMenu.map(item => (
                                <ListGroupItem action onClick={(event)=>this.props.populateFormCCMenu(event)} 
                                    key = {item._id}
                                    data-cafeorcatering={item.cafeOrcatering}
                                    data-id={item._id} 
                                    data-category={item.category} 
                                    data-price={item.price} 
                                    data-title={item.title} 
                                    data-desc={item.description}>
                                {item.title}
                                </ListGroupItem>
                                 ))}
                        </ListGroup>
                        ): (<h4>Nothing</h4>
                        )}
                </ListGroupItem>
                    
                <ListGroupItem action className="midLayerItem">Lunch/Dinner
                    {this.props.cafeLunchMenu.length ? (
                        <ListGroup className="scrollSidebar midLayerGroup">
                            {this.props.cafeLunchMenu.map(item => (
                                <ListGroupItem action onClick={(event)=>this.props.populateFormCCMenu(event)} 
                                    key = {item._id}
                                    data-cafeorcatering={item.cafeOrcatering}
                                    data-id={item._id} 
                                    data-category={item.category} 
                                    data-price={item.price} 
                                    data-title={item.title} 
                                    data-desc={item.description}> 
                                {item.title}
                                </ListGroupItem>
                                ))}
                        </ListGroup>
                        ): (<h5>Content</h5>
                        )}
                </ListGroupItem>
                
                 <ListGroupItem action className="midLayerItem">Coffee/Tea
                    {this.props.cafeCoffeeMenu.length ? (
                        <ListGroup className="scrollSidebar midLayerGroup">
                            {this.props.cafeCoffeeMenu.map(item => (
                                <ListGroupItem action onClick={(event)=>this.props.populateFormCCMenu(event)} 
                                    key = {item._id}
                                    data-cafeorcatering={item.cafeOrcatering}
                                    data-id={item._id} 
                                    data-category={item.category} 
                                    data-price={item.price} 
                                    data-title={item.title} 
                                    data-desc={item.description}> 
                                {item.title}
                                </ListGroupItem>
                                ))}
                        </ListGroup>
                        ): (<h5>Content</h5>
                        )}
                </ListGroupItem>
                
                 <ListGroupItem action className="midLayerItem">Desserts/Pastries
                    {this.props.cafePastryMenu.length ? (
                        <ListGroup className="scrollSidebar midLayerGroup">
                            {this.props.cafePastryMenu.map(item => (
                                <ListGroupItem action onClick={(event)=>this.props.populateFormCCMenu(event)} 
                                    key = {item._id}
                                    data-cafeorcatering={item.cafeOrcatering}
                                    data-id={item._id} 
                                    data-category={item.category} 
                                    data-price={item.price} 
                                    data-title={item.title} 
                                    data-desc={item.description}> 
                                {item.title}
                                </ListGroupItem>
                                ))}
                        </ListGroup>
                        ): (<h5>Content</h5>
                        )}
                </ListGroupItem>
            </ListGroup>
            </Collapse>
        </ListGroupItem>
        
        <ListGroupItem className="topLayerItem" id="2" action onClick={() => {this.toggle(1); this.props.loadComposedCakeMenuItems(); this.props.loadCakePriceItems(); this.props.changeForms(this.state.cakeForm)}}>
        Cake Menu
           <Collapse isOpen={this.state.collapse[1]}>
            <Card>
            <ListGroup>
                <ListGroupItem className="midLayerItem">Composed Cakes
                    {this.props.cakesComposedMenu.length ? (
                        <ListGroup className="scrollSidebar midLayerGroup">
                            {this.props.cakesComposedMenu.map(item => (
                                <ListGroupItem action onClick={(event) => this.props.populateFormCakeMenu(event)}
                                    key={item._id}
                                    data-descriptor={item.descriptor}
                                    data-detail={item.detail}
                                    data-category = {item.menuCategory}
                                    data-id = {item._id}>
                                    {item.descriptor}
                                </ListGroupItem>
                                ))}
                        </ListGroup>
                        ):(<h5>Content</h5>
                        )}
                    </ListGroupItem>
                 <ListGroupItem className="midLayerItem">Cake Prices
                    {this.props.cakesPriceMenu.length ? (
                        <ListGroup className="scrollSidebar midLayerGroup">
                            {this.props.cakesPriceMenu.map(item => (
                                <ListGroupItem action onClick={(event) => this.props.populateFormCakeMenu(event)}
                                    key={item._id}
                                    data-descriptor={item.descriptor}
                                    data-detail={item.detail}
                                    data-category = {item.menuCategory}
                                    data-id = {item._id}>
                                    {item.detail}
                                </ListGroupItem>
                                ))}
                        </ListGroup>
                        ):(<h5>Content</h5>
                        )}
                    </ListGroupItem>
            </ListGroup>
            </Card>
            </Collapse>
        </ListGroupItem>
        
        <ListGroupItem id="3" className="cateringItem" action onClick={() => {this.toggle(2); this.props.loadCateringMenuItems(); this.props.changeForms(this.state.cafeForm)}}>
            Catering Menu
            <Collapse isOpen={this.state.collapse[2]}>
            <Card>
            <ListGroup>
                <ListGroupItem action className="midLayerItem">Breakfast && Brunch
                    {this.props.cateringBreakfastMenu.length ? (
                        <ListGroup className="scrollSidebar midLayerGroup">
                            {this.props.cateringBreakfastMenu.map(item => (
                                <ListGroupItem action onClick={(event)=>this.props.populateFormCCMenu(event)} 
                                    key = {item._id}
                                    data-cafeorcatering={item.cafeOrcatering}
                                    data-id={item._id} 
                                    data-category={item.category} 
                                    data-price={item.price} 
                                    data-title={item.title} 
                                    data-desc={item.description}>
                                {item.title}
                                </ListGroupItem>
                                ))}
                        </ListGroup>
                        ): (<h4>Nothing</h4>
                        )}
                </ListGroupItem>
                    
                <ListGroupItem action className="midLayerItem">Beverages
                    {this.props.cateringBeverageMenu.length ? (
                        <ListGroup className="scrollSidebar midLayerGroup">
                            {this.props.cateringBeverageMenu.map(item => (
                                <ListGroupItem action onClick={(event)=>this.props.populateFormCCMenu(event)} 
                                    key = {item._id}
                                    data-cafeorcatering={item.cafeOrcatering}
                                    data-id={item._id} 
                                    data-category={item.category} 
                                    data-price={item.price} 
                                    data-title={item.title} 
                                    data-desc={item.description}>
                                {item.title}
                                </ListGroupItem>
                                ))}
                        </ListGroup>
                        ): (<h4>Nothing</h4>
                        )}
                </ListGroupItem>
                
                <ListGroupItem action className="midLayerItem">Lunch
                    {this.props.cateringLunchMenu.length ? (
                        <ListGroup className="scrollSidebar midLayerGroup">
                            {this.props.cateringLunchMenu.map(item => (
                                <ListGroupItem action onClick={(event)=>this.props.populateFormCCMenu(event)} 
                                    key = {item._id}
                                    data-cafeorcatering={item.cafeOrcatering}
                                    data-id={item._id} 
                                    data-category={item.category} 
                                    data-price={item.price} 
                                    data-title={item.title} 
                                    data-desc={item.description}>
                                {item.title}
                                </ListGroupItem>
                                ))}
                        </ListGroup>
                        ): (<h4>Nothing</h4>
                        )}
                </ListGroupItem>
                    
                <ListGroupItem action className="midLayerItem">Desserts
                    {this.props.cateringDessertMenu.length ? (
                        <ListGroup className="scrollSidebar midLayerGroup">
                            {this.props.cateringDessertMenu.map(item => (
                                <ListGroupItem action onClick={(event)=>this.props.populateFormCCMenu(event)} 
                                    key = {item._id}
                                    data-cafeorcatering={item.cafeOrcatering}
                                    data-id={item._id} 
                                    data-category={item.category} 
                                    data-price={item.price} 
                                    data-title={item.title} 
                                    data-desc={item.description}>
                                {item.title}
                                </ListGroupItem>
                                ))}
                        </ListGroup>
                        ): (<h4>Nothing</h4>
                        )}
                </ListGroupItem>
                <ListGroupItem action className="midLayerItem">Platters
                    {this.props.cateringPlatterMenu.length ? (
                        <ListGroup className="scrollSidebar midLayerGroup">
                            {this.props.cateringPlatterMenu.map(item => (
                                <ListGroupItem action onClick={(event)=>this.props.populateFormCCMenu(event)} 
                                    key = {item._id}
                                    data-cafeorcatering={item.cafeOrcatering}
                                    data-id={item._id} 
                                    data-category={item.category} 
                                    data-price={item.price} 
                                    data-title={item.title} 
                                    data-desc={item.description}>
                                {item.title}
                                </ListGroupItem>
                                ))}
                        </ListGroup>
                        ): (<h4>Nothing</h4>
                        )}
                </ListGroupItem>
                
                <ListGroupItem action className="midLayerItem">Favors and Gift Baskets
                    {this.props.cateringFGBMenu.length ? (
                        <ListGroup className="scrollSidebar midLayerGroup">
                            {this.props.cateringFGBMenu.map(item => (
                                <ListGroupItem action onClick={(event)=>this.props.populateFormCCMenu(event)} 
                                    key = {item._id}
                                    data-cafeorcatering={item.cafeOrcatering}
                                    data-id={item._id} 
                                    data-category={item.category} 
                                    data-price={item.price} 
                                    data-title={item.title} 
                                    data-desc={item.description}>
                                {item.title}
                                </ListGroupItem>
                                ))}
                        </ListGroup>
                        ): (<h4>Nothing</h4>
                        )}
                </ListGroupItem>
                    
                <ListGroupItem action className="midLayerItem">In House Event Packages
                    {this.props.cateringIHEMenu.length ? (
                        <ListGroup className="scrollSidebar midLayerGroup">
                            {this.props.cateringIHEMenu.map(item => (
                                <ListGroupItem action onClick={(event)=>this.props.populateFormCCMenu(event)} 
                                    key = {item._id}
                                    data-cafeorcatering={item.cafeOrcatering}
                                    data-id={item._id} 
                                    data-category={item.category} 
                                    data-price={item.price} 
                                    data-title={item.title} 
                                    data-desc={item.description}>
                                {item.title}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    ): (<h4>Nothing</h4>
                    )}
                </ListGroupItem>
            </ListGroup>
            </Card>
            </Collapse>
        </ListGroupItem>
        
        <ListGroupItem action onClick={()=>this.props.changeForms(this.state.addNewCafe)}>
        Add New Cafe/Catering Item
        </ListGroupItem>
        <ListGroupItem action onClick={()=> this.props.changeForms(this.state.addNewCake)}>
        Add New Composed Cake
        </ListGroupItem>
    </ListGroup>
</div>

        );
    }
}
