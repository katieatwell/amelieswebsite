import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import API from './../../../utils/API';

export default class ContactForm extends React.Component {
  
  state= {
    name: "",
    phone: "",
    email:"",
    text:"",
    subject:"#Placeholder#testing",
    select:"Become a VIP member!"
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit button hit")
    console.log(this.state);
    API.sendEmail(this.state.email, this.state.select,"Hello there, this is "+this.state.name+" and my number is:"+this.state.phone+" ... I have a message: " +this.state.text)
  };
  
  
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
          <Label for="name">Phone Number</Label>
          <Input type="text" name="phone" id="formNumber" onChange={this.handleInputChange}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="formEmail" onChange={this.handleInputChange}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="directory">Directory</Label>
          <Input type="select" name="select" id="formDirectory" onChange={this.handleInputChange}>
            <option>Become a VIP member!</option>
            <option>Management</option>
            <option>Catering & Events</option>
            <option>General Information</option>
            <option>Real Estate & Construction</option>
            <option>Marketing & PR</option>
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
