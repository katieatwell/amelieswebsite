import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Collapse, Card } from "reactstrap";
export default class ManagerSidebar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: [false, false, false, false, false, false, false],
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
        <ListGroupItem id="1" action  onClick={() => {this.toggle(0); this.props.loadCafeMenuItems(); this.props.changeForms(this.state.cafeForm)}}>
            Cafe Menu
            <Collapse isOpen={this.state.collapse[0]}>
            <Card>
            <ListGroup>
                <ListGroupItem action>Breakfast
                    {this.props.cafeBreakfastMenu.length ? (
                        <ListGroup>
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
                    
                <ListGroupItem action>Lunch/Dinner
                    {this.props.cafeLunchMenu.length ? (
                        <ListGroup>
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
                
                 <ListGroupItem action>Coffee/Tea
                    {this.props.cafeCoffeeMenu.length ? (
                        <ListGroup>
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
                
                 <ListGroupItem action>Desserts/Pastries
                    {this.props.cafePastryMenu.length ? (
                        <ListGroup>
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
            </Card>
            </Collapse>
        </ListGroupItem>
        
        <ListGroupItem id="2" action onClick={() => {this.toggle(1); this.props.loadComposedCakeMenuItems(); this.props.loadCakePriceItems(); this.props.changeForms(this.state.cakeForm)}}>
        Cake Menu
           <Collapse isOpen={this.state.collapse[1]}>
            <Card>
            <ListGroup>
                <ListGroupItem>Composed Cakes
                    {this.props.cakesComposedMenu.length ? (
                        <ListGroup>
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
                 <ListGroupItem>Cake Prices
                    {this.props.cakesPriceMenu.length ? (
                        <ListGroup>
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
        
        <ListGroupItem id="3" action onClick={() => {this.toggle(2); this.props.loadCateringMenuItems(); this.props.changeForms(this.state.cafeForm)}}>
            Catering Menu
            <Collapse isOpen={this.state.collapse[2]}>
            <Card>
            <ListGroup>
                <ListGroupItem action>Breakfast && Brunch
                    {this.props.cateringBreakfastMenu.length ? (
                        <ListGroup>
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
                    
                <ListGroupItem action>Beverages
                    {this.props.cateringBeverageMenu.length ? (
                        <ListGroup>
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
                
                <ListGroupItem action>Lunch
                    {this.props.cateringLunchMenu.length ? (
                        <ListGroup>
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
                    
                <ListGroupItem action>Desserts
                    {this.props.cateringDessertMenu.length ? (
                        <ListGroup>
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
                <ListGroupItem action>Platters
                    {this.props.cateringPlatterMenu.length ? (
                        <ListGroup>
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
                
                <ListGroupItem action>Favors and Gift Baskets
                    {this.props.cateringFGBMenu.length ? (
                        <ListGroup>
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
                    
                <ListGroupItem action>In House Event Packages
                    {this.props.cateringIHEMenu.length ? (
                        <ListGroup>
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

        )
    }
}
