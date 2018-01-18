import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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

        <Button>Submit</Button>
      </Form>
    );
  }
}