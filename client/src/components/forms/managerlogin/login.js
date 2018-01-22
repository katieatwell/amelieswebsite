import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class ManagerLoginForm extends React.Component {
    render() {
        return (
            <Form>
        
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="userEmail" />
        </FormGroup>

      
        <FormGroup>
          <Label for="name">User Name</Label>
          <Input type="text" name= "name" id="userName" />
        </FormGroup>
        
        <FormGroup>
          <Label for="name">Password</Label>
          <Input type="text" name="phone" id="userPassword" />
        </FormGroup>
        
        <Button>Submit</Button>
      </Form>
        );
    }
}
