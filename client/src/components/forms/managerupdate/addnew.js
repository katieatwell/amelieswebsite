import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./style.css";

export default class AddNewForm extends Component {
    render() {
        return (
            <Form>
      
        <FormGroup>
          <Label for="name">Item Title</Label>
          <Input type="text" name= "title" id="itemTitle" />
        </FormGroup>
        
        <FormGroup>
          <Label for="name">Item Description</Label>
          <Input type="text" name="description" id="itemDescription" />
        </FormGroup>
        
        <FormGroup>
          <Label for="email">Item Price</Label>
          <Input type="email" name="price" id="itemPrice" />
        </FormGroup>
        
        <FormGroup>
          <Label for="directory">Item Category</Label>
          <Input type="select" name="select" id="itemCategory">
            <option>Cafe Menu - Breakfast</option>
            <option>Cafe Menu - Lunch/Dinner</option>
            <option>Cafe Menu - Coffee/Tea</option>
            <option>Cafe Menu - Pastries/Dessert</option>
            <option>Cake Menu - Composed Cakes</option>
            <option>Cake Menu - Build Your Own Cake</option>
            <option>Catering Menu - Beverages</option>
            <option>Catering Menu - Breakfast & Brunch</option>
            <option>Catering Menu - Desserts</option>
            <option>Catering Menu - Favors and Gift Baskets</option>
            <option>Catering Menu - In House Event Packages</option>
            <option>Catering Menu - Lunch</option>
            <option>Catering Menu - Platters</option>
            <option>Catering Menu - Weddings and Specialty Cakess</option>
          </Input>
        </FormGroup>
        
        <Button outline color="secondary">Delete</Button>
        <Button outline color="secondary">Add New</Button>
        
      </Form>
        );
    }
}
