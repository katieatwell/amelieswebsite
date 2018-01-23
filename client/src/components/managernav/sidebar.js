import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Collapse, Card } from "reactstrap";

export default class ManagerSidebar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: [false, false, false, false, false, false, false],
            cafeBreakfastMenu: [],
            cafeLunchMenu: [],
            cafeCoffeeMenu: [],
            cafeDessertMenu: []
        };
        this.id = "";
    }

    componentDidMount() {
        this.loadBreakfastItems();
    }

    loadBreakfastItems = () => {
        //API.whateverICallToGetBreakfastMenuItems()
        //.then(res => this.setState(cafeBreakfastMenu: res.data.breakfast)
        //.catch(err => console.log(err);
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
        <ListGroupItem id="1" tag="a" action onClick={() => this.toggle(0)}>
            Cafe Menu
            <Collapse isOpen={this.state.collapse[0]}>
            <Card>
            <ListGroup>
                <ListGroupItem tag="a" href="#" action onClick={() => {this.toggle(3), this.loadBreakfastItems}}>Breakfast
                    {this.state.cafeBreakfastMenu.length ? (
                    <Collapse isOpen={this.state.collapse[3]}>
                    <ListGroup>
                    {this.state.cafeBreakfastMenu.map(item => (
                        <ListGroupItem key={item.title} tag="a" href={"/breakfastitem" + item._id}> 
                        <h4>
                        {item.title}
                        </h4>
                        </ListGroupItem>
                        ))}
                    </ListGroup>
                    </Collapse>
                    ): (
                    <h3>No Results to Display</h3>
                    )}
                    </ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Lunch/Dinner</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Coffee/Tea</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Desserts/Pastries</ListGroupItem>
            </ListGroup>
            </Card>
            </Collapse>
        </ListGroupItem>
        
        <ListGroupItem id="2" tag="a" href="#" action onClick={() => this.toggle(1)}>
            Cake Menu
            <Collapse isOpen={this.state.collapse[1]}>
            <Card>
            <ListGroup>
                <ListGroupItem tag="a" href="#" action>Composed Cakes</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Build Your Own Menu Items</ListGroupItem>
            </ListGroup>
            </Card>
            </Collapse>
        </ListGroupItem>

        <ListGroupItem id="3" tag="a" href="#" action onClick={() => this.toggle(2)}>
            Catering Menu
            <Collapse isOpen={this.state.collapse[2]}>
            <Card>
            <ListGroup>
                <ListGroupItem tag="a" href="#" action>Beverages</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Breakfast & Brunch</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Desserts</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Favors and Gift Baskets</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>In House Event Packages</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Lunch</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Platters</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Wedding and Specialty Cakes</ListGroupItem>
            </ListGroup>
            </Card>
            </Collapse>
        </ListGroupItem>
        
        <ListGroupItem id="addNew" tag="i" href="#" action {...this.props}>
        Add New Menu Item
        </ListGroupItem>
        
    </ListGroup>
</div>

        )
    }
}
