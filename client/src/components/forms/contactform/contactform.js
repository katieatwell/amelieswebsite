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
    let tempMail="pathayes2382@gmail.com";
    let select=this.state.select.trim();
    // change temp mail depending on department selected. Currently just using my email address for testing
    // switch case shows how to change email based on what the selected value is
    switch(select){
      case "Become a VIP member!":
        tempMail="pathayes2382@gmail.com";
        break;
      case "Management":
        tempMail="pathayes2382@gmail.com";
        break;
      case "Catering & Events":
        tempMail="pathayes2382@gmail.com";
        break;
      case "General Information":
        tempMail="pathayes2382@gmail.com";
        break;
      case "Real Estate & Construction":
        tempMail="pathayes2382@gmail.com";
        break;
      case "Marketing & PR":
        tempMail="pathayes2382@gmail.com";
        break;
    }
    console.log("submit button hit")
    console.log(this.state);
    const re = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if(!re.test(String(this.state.email).toLowerCase())){
      alert("please use a valid email");
      return;
    };
    API.sendEmail(this.state.email, this.state.select,"Hello there, this is "+this.state.name+" and my number is:"+this.state.phone+" ... I have a message: " +this.state.text)
    alert("Thanks for reaching out! We've forwarded your message to the appropriate location");
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
