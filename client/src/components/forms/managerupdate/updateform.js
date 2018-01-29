import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import QuillEditor from "./quilleditor";
import "./style.css";

export default class UpdateForm extends Component {
  render() {
    return (
      <Form>
      
        <FormGroup>
        {this.props.currentItem.map((item, i) => (
        <div>
          <Label for="name">Item Title</Label>
          <Input type="text" name= "title" id="itemTitle" 
          value={item.title} 
          onChange={this.props.handleCurrentItemTitleChange(i)}/>
          </div>
          ))}
        </FormGroup>
        
        <FormGroup>
         {this.props.currentItem.map((item, i) => (
        <div>
          <Label for="name">Item Description</Label>
          {/*<Input type="text" name="description" id="itemDescription" />*/}
          <QuillEditor
          value={item.desc} 
          onChange={this.props.handleCurrentItemTitleChange(i)}/>
          </div>
          ))}
        </FormGroup>
        
        <FormGroup>
         {this.props.currentItem.map((item, i) => (
        <div>
          <Label for="text">Item Price</Label>
          <Input type="text" name="price" id="itemPrice"
          value={item.price}
          onChange={this.props.handleCurrentItemPriceChange(i)}/>
          </div>
          ))}
        </FormGroup>
        
        <FormGroup>
          {this.props.currentItem.map((item, i) => (
          <div>
          <Label for="directory">Item Category</Label>
            <Input type="text" name="category" id="itemCategory"
            value={item.category}
            onChange={this.props.handleCurrentItemCategoryChange(i)}/>
          </div>
          ))}
        </FormGroup>
        
        <Button outline color="secondary">Delete</Button>
        {this.props.currentItem.map((item) => (
        <div>
        <Button outline color="secondary" value={item._id} onClick={()=> this.props.updateCafeMenuItem(item._id)}>Update</Button>
        </div>
        ))}
      </Form>
    );
  }
}
