import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Collapse, Card } from "reactstrap";

export default class ManagerSidebar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
        this.id = "";
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div>
    <ListGroup>
        <ListGroupItem id="1" tag="i" action onClick={this.toggle}>
            Cafe Menu
            <Collapse isOpen={this.state.collapse}>
            <Card>
            <ListGroup>
                <ListGroupItem tag="l" href="#" action>Breakfast</ListGroupItem>
                <ListGroupItem tag="c" href="#" action>Lunch/Dinner</ListGroupItem>
                <ListGroupItem tag="d" href="#" action>Coffee/Tea</ListGroupItem>
                <ListGroupItem tag="e" href="#" action>Desserts/Pastries</ListGroupItem>
            </ListGroup>
            </Card>
            </Collapse>
        </ListGroupItem>
        
        <ListGroupItem id="2" tag="i" href="#" action onClick={this.toggle}>
            Cake Menu
            <Collapse isOpen={this.state.collapse}>
            <Card>
            <ListGroup>
                <ListGroupItem tag="f" href="#" action>Composed Cakes</ListGroupItem>
                <ListGroupItem tag="g" href="#" action>Build Your Own Menu Items</ListGroupItem>
            </ListGroup>
            </Card>
            </Collapse>
        </ListGroupItem>

        <ListGroupItem id="3" tag="i" href="#" action onClick={this.toggle}>
            Catering Menu
            <Collapse isOpen={this.state.collapse}>
            <Card>
            <ListGroup>
                <ListGroupItem tag="h" href="#" action>Beverages</ListGroupItem>
                <ListGroupItem tag="r" href="#" action>Breakfast & Brunch</ListGroupItem>
                <ListGroupItem tag="j" href="#" action>Desserts</ListGroupItem>
                <ListGroupItem tag="k" href="#" action>Favors and Gift Baskets</ListGroupItem>
                <ListGroupItem tag="t" href="#" action>In House Event Packages</ListGroupItem>
                <ListGroupItem tag="m" href="#" action>Lunch</ListGroupItem>
                <ListGroupItem tag="n" href="#" action>Platters</ListGroupItem>
                <ListGroupItem tag="o" href="#" action>Wedding and Specialty Cakes</ListGroupItem>
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
