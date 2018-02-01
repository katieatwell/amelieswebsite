import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import QuillEditor from "./quilleditor";
import "./style.css";

export default class UpdateCaterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cater: true,
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
        const caterCat = Object.keys(this.props.caterMenuCat);
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
          updateCaterState={this.props.handleCurrentItemDescChange}
          useCater={this.state.cater}/>
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
         
          <Label for="text">Catering Menu Categories</Label>
          {caterCat.length ? (
           <Input type="select" name="category" id="itemCategory"
            value={this.state.value}
             onChange={(event) => this.selectCategory(event)}>
             <option selected>{currentItem.category}</option>
            {caterCat.map(item => (
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
