import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import QuillEditor from "./quilleditor";
import "./style.css";

export default class UpdateCafeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cafe: true,
      cat: ""
    };
  }

  selectCategory(event) {
    this.setState({
      cat: event.target.value,
    });
  }
  render() {
    const currentItem = this.props.currentItem[0];
    const cafeCat = Object.keys(this.props.cafeMenuCat);
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
          updateCafeState={this.props.handleCurrentItemDescChange}
          useCafe={this.state.cafe}/>
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
         
          <Label for="text">Cafe Menu Categories</Label>
          {cafeCat.length ? (
           <Input type="select" name="category" id="itemCategory"
            value={this.state.cat}
             onChange={(event) => this.selectCategory(event)}>
            {cafeCat.map(item => (
            <option value={item}
            >{item}</option>
             ))}
             </Input>
           ) : ( <h5> Nothing </h5> 
           )}
          </div>
          
      
        </FormGroup>
         
          <div>
            <Button outline color="secondary" value={currentItem.id} onClick={()=>this.props.deleteCCMenuItem(currentItem.id)}>Delete</Button>
          </div>
        
   
          <div>
            <Button outline color="secondary" value={currentItem.id} onClick={(event) => this.props.updateCCMenuItem(event, this.state.cat)}>Update</Button>
          </div>
  
      </Form>
    );
  }
}
