import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import QuillEditor from "./quilleditor";
import "./style.css";

export default class CakeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cake: true
    };
  }
  render() {
    const currentCake = this.props.currentCake[0];
    console.log(currentCake);
    return (
      <Form>
      
        <FormGroup>
        <div>
          <Label for="name">Cake Descriptor</Label>
          <Input type="text" name= "title" id="itemTitle"
          value={currentCake.descriptor}/>
          </div>
         
        </FormGroup>
        
        <FormGroup>
        <div>
          <Label for="name">Cake Details</Label>
          <QuillEditor
          value={currentCake.detail}
           key={currentCake.id}
          updateCurrentCake = {this.props.handleCurrentCakeDetailsChange}
          useCake={this.state.cake}/>
          </div>
        </FormGroup>
        
          <div>
            <Button outline color="secondary">Delete</Button>
          </div>
          <div>
            <Button outline color="secondary" onClick={this.props.updateCakeMenuItem}>Update</Button>
          </div>
  
      </Form>
    );
  }
}
