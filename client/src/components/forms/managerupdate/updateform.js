import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import QuillEditor from "./quilleditor";
import "./style.css";

export default class UpdateForm extends Component {

  render() {
    const currentItem = this.props.currentItem[0];
    // console.log(currentItem.desc);
    return (
      <Form>
      
        <FormGroup>
        
        <div>
          <Label for="name">Item Title</Label>
          <Input type="text" name= "title" id="itemTitle" 
          value={currentItem.title} 
          onChange={this.props.handleCurrentItemTitleChange}/>
          </div>
         
        </FormGroup>
        
        <FormGroup>
         
        <div>
          <Label for="name">Item Description</Label>
          <QuillEditor
          value={currentItem.desc} 
          key={currentItem.id}
          updateState={this.props.handleCurrentItemDescChange}/>
          </div>
       
        </FormGroup>
        
        <FormGroup>
       
        <div>
          <Label for="text">Item Price</Label>
          <Input type="text" name="price" id="itemPrice"
          value={currentItem.price}
          onChange={this.props.handleCurrentItemPriceChange}/>
          </div>
       
        </FormGroup>
        
        <FormGroup>
          
          <div>
          <Label for="text">Item Category</Label>
            <Input type="text" name="category" id="itemCategory"
            value={currentItem.category}
            onChange={this.props.handleCurrentItemCategoryChange}/>
          </div>
      
        </FormGroup>
        
        <FormGroup>
    
          <div>
          <Label for="text">Item Menu</Label>
            <Input type="text" name="cafeorcatering" id="itemCategory"
            value={currentItem.cafeorcatering}
            onChange={this.props.handleCurrentItemCafeorCateringChange}/>
          </div>
      
        </FormGroup>
         
         
          <div>
            <Button outline color="secondary" value={currentItem.id} onClick={() => this.props.deleteCafeMenuItem(currentItem.id)}>Delete</Button>
          </div>
        
   
          <div>
            <Button outline color="secondary" value={currentItem.id} onClick={this.props.updateCafeMenuItem}>Update</Button>
          </div>
  
      </Form>
    );
  }
}
