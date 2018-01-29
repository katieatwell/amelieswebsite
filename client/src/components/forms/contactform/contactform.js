import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const sendmail=require("./../../../../../email_setup/mailer.js");

const handleSubmit = (event) => {
  event.preventDefault;
  console.log("submit button hit")
  
}

export default class ContactForm extends React.Component {
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
          <Label for="directory">Directory</Label>
          <Input type="select" name="select" id="formDirectory">
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
          <Input type="textarea" name="text" id="formMessage" />
        </FormGroup>

        <Button onClick={handleSubmit}>Submit</Button>
        <br/>
        
      </Form>
    );
  }
}
