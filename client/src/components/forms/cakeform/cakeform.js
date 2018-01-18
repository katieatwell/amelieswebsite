import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class CakeForm extends React.Component {
  render() {
    return (
      <Form>
      
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name= "name" id="formName" />
        </FormGroup>
        
        <FormGroup>
          <Label for="name">Phone Number</Label>
          <Input type="text" name="phone" id="formNumber" />
        </FormGroup>
        
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="formEmail" />
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleDate">Date Needed By</Label>
          <Input type="date" name="date" id="date" />
        </FormGroup>
        
        <FormGroup>
          <Label for="directory">Cake Flavor</Label>
          <Input type="select" name="select" id="cakeFlavor">
            <option>Chocolate Chiffon</option>
            <option>Vanilla Chiffon</option>
            <option>Lemon Chiffon</option>
            <option>Almond (Gluten Free)</option>
          </Input>
        </FormGroup>
        
        <FormGroup>
          <Label for="directory">Buttercream</Label>
          <Input type="select" name="select" id="cakeButtercream">
            <option>Chocolate</option>
            <option>Lemon</option>
            <option>Orange</option>
            <option>Citrus</option>
            <option>Hazelnut</option>
            <option>Coffee</option>
            <option>Mocha</option>
            <option>Pistachio</option>
            <option>Rasberry</option>
            <option>Traditional</option>
          </Input>
        </FormGroup>
        
        <FormGroup>
          <Label for="directory">Filling (Choose 1 or 2) </Label>
          <Input type="select" name="select" id="cakeFilling">
            <option>Chocolate Mousse</option>
            <option>Raspberry Mousse</option>
            <option>Passion Fruit Mousse</option>
            <option>Strawberry Mousse</option>
            <option>Cream Cheese Mousse</option>
            <option>Lemon Cream Cheese Mousse</option>
            <option>Banana Mousse</option>
            <option>Blood Orange Mousse</option>
            <option>Milk Chocolate Mousse</option>
            <option>Cappuccino Mousse</option>
            <option>White Chocolate Mousse</option>
            <option>Blackberry Mousse</option>
            <option>Coconut Mousse</option>
            <option>Irish Cream Mousse</option>
            <option>Vanilla Pastry Cream</option>
            <option>Chocolate Pastry Cream</option>
            <option>Hazelnut Pastry Cream</option>
            <option>Coffee Pastry Cream</option>
            <option>Lemon Pastry Cream</option>
            <option>Lime Pastry Cream</option>
            <option>Fresh Fruit Pastry Cream</option>
            <option>Vanilla Chiboust</option>
            <option>Pumpkin Chihoust</option>
            <option>Cinnamon Chiboust</option>
            <option>Ganache</option>
            <option>Caramel</option>
            <option>Diplomat Cream</option>

          </Input>
        </FormGroup>
        
        <FormGroup>
          <Label for="directory">Masking & Decorations (Choose any that apply) </Label>
          <Input type="select" name="select" id="cakeDecor">
            <option>Feuilletine</option>
            <option>Toasted Candied Almonds</option>
            <option>Toasted Coconut</option>
            <option>Chocolate Curls</option>
            <option>Ganache Candied Citrus</option>
            <option>Fresh Fruit</option>
            <option>Chocolate Dipped Strawberries</option>
          </Input>
        </FormGroup>
        
        <FormGroup>
          <Label for="message">Message</Label>
          <Input type="textarea" name="text" id="formMessage" />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}