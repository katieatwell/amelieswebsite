import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Collapse, Card } from "reactstrap";
export default class ManagerSidebar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: [false, false, false, false, false, false, false]
        };
        this.id = "";
    }

    componentDidMount() {
        this.props.loadCafeMenuItems;
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
        <ListGroupItem id="1" action onClick={() => {this.toggle(0); this.props.loadCafeMenuItems(); this.props.toggleForms(true)}}>
            Cafe Menu
            <Collapse isOpen={this.state.collapse[0]}>
            <Card>
            <ListGroup>
                <ListGroupItem action onClick={() => this.toggle(3)}>Breakfast
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
                    
                <ListGroupItem action onClick={() => this.toggle(4)}>Lunch/Dinner
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
                
                 <ListGroupItem action onClick={() => this.toggle(4)}>Coffee/Tea
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
                
                 <ListGroupItem action onClick={() => this.toggle(4)}>Desserts/Pastries
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
        
        <ListGroupItem id="2" action onClick={() => {this.toggle(1); this.props.loadCakeMenuItems()}}>
            Cake Menu
            <Collapse isOpen={this.state.collapse[1]}>
            <Card>
            <ListGroup>
                <ListGroupItem action>Composed Cakes</ListGroupItem>
                <ListGroupItem action>Build Your Own Menu Items</ListGroupItem>
            </ListGroup>
            </Card>
            </Collapse>
        </ListGroupItem>

        <ListGroupItem id="3" action onClick={() => {this.toggle(2); this.props.loadCateringMenuItems(); this.props.toggleForms()}}>
            Catering Menu
            <Collapse isOpen={this.state.collapse[2]}>
            <Card>
            <ListGroup>
                <ListGroupItem action>Beverages</ListGroupItem>
                <ListGroupItem action>Breakfast & Brunch</ListGroupItem>
                <ListGroupItem action>Desserts</ListGroupItem>
                <ListGroupItem action>Favors and Gift Baskets</ListGroupItem>
                <ListGroupItem action>In House Event Packages</ListGroupItem>
                <ListGroupItem action>Lunch</ListGroupItem>
                <ListGroupItem action>Platters</ListGroupItem>
                <ListGroupItem action>Wedding and Specialty Cakes</ListGroupItem>
            </ListGroup>
            </Card>
            </Collapse>
        </ListGroupItem>
        
        <ListGroupItem action onClick={()=>this.props.toggleForms(false)}>
        Add New Menu Item
        </ListGroupItem>
    </ListGroup>
</div>

        )
    }
}
