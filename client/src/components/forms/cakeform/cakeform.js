import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import API from './../../../utils/API';

export default class CakeForm extends React.Component {
  
  state= {
    name: "",
    phone: "",
    email:"",
    date:"",
    text:"",
    cakeFlavor:"Chocolate Chiffon",
    buttercream:"Chocolate",
    filling:"Chocolate Mousse",
    maskingDecorations:"Feuilletine",
    subject:"#Placeholder#testing",
    select:"Cake Order"
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit button hit")
    console.log(this.state); 
    const re = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if(!re.test(String(this.state.email).toLowerCase())){
      alert("please use a valid email");
      return;
    }
    
    API.sendEmail(this.state.email, this.state.select, `Hello there, thanks for your order! your order is name: ${this.state.name} date: ${this.state.date} cake flavor: ${this.state.cakeFlavor} buttercream flavor: ${this.state.buttercream} with filling of: ${this.state.filling} and has masking and decorations of ${this.state.maskingDecorations}. if anything seems wrong with your order, please contact us and let us know!`);
    
    //hard code to whatever email should recieve cake orders. for testing use mine.
    let tempMail="pathayes2382@gmail.com";
    API.sendEmail(tempMail, this.state.select,`Hello there, this is ${this.state.name} and my number is: ${this.state.phone} ... my message to go with my order: ${this.state.text}  my order is as follows: date: ${this.state.date} cake flavor: ${this.state.cakeFlavor} buttercream flavor: ${this.state.buttercream} with filling of: ${this.state.filling} and has masking and decorations of ${this.state.maskingDecorations}`);
    alert("Thanks for ordering a cake with us, we've sent you an email to see your ordering details");
  }
  
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  render() {
    return (
      <Form>
      
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name= "name" id="formName" onChange={this.handleInputChange}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="phone">Phone Number</Label>
          <Input type="text" name="phone" id="formNumber" onChange={this.handleInputChange}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="formEmail" onChange={this.handleInputChange}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleDate">Date Needed By</Label>
          <Input type="date" name="date" id="date" onChange={this.handleInputChange}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="directory">Cake Flavor</Label>
          <Input type="select" name="cakeFlavor" id="cakeFlavor" onChange={this.handleInputChange}>
            <option>Chocolate Chiffon</option>
            <option>Vanilla Chiffon</option>
            <option>Lemon Chiffon</option>
            <option>Almond (Gluten Free)</option>
          </Input>
        </FormGroup>
        
        <FormGroup>
          <Label for="directory">Buttercream</Label>
          <Input type="select" name="buttercream" id="cakeButtercream" onChange={this.handleInputChange}>
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
          <Input type="select" name="filling" id="cakeFilling" onChange={this.handleInputChange}>
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
          <Input type="select" name="maskingDecorations" id="cakeDecor" onChange={this.handleInputChange}>
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
          <Input type="textarea" name="text" id="formMessage" onChange={this.handleInputChange} />
        </FormGroup>

        <Button onClick={this.handleSubmit}>Submit</Button>
        <br/>
      </Form>
    );
  }
}
