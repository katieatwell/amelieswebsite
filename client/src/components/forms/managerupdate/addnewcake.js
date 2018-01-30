import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./style.css";
import API from "../../../utils/API";

export default class AddNewCake extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptor: "",
            detail: "",
            category: "",
            id: ""
        };
    }
    addNewComposedCakeMenuItem = (event) => {
        API.addCakeMenuItem({
                descriptor: this.state.descriptor,
                category: this.state.category,
                detail: this.state.detail,
                id: this.state.id
            })
            .then(res => this.props.loadCakeMenuItems(),
                this.setState({
                    descriptor: "",
                    detail: "",
                    category: "",
                    id: ""
                }))
            .catch(err => console.log(err));
    }

    handleAddCakeInputChange = event => {
        console.log("type type")
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Form>
 
        <FormGroup>
          <Label for="name">Item Descriptor</Label>
          <Input type="text" name= "descriptor" id="itemDescriptor" value={this.state.descriptor} onChange={this.handleAddCakeInputChange}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="name">Item Details</Label>
          <Input type="text" name="detail" id="itemDetail" value={this.state.detail} onChange={this.handleAddCakeInputChange}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="email">Item Category (Composed Cakes)</Label>
          <Input type="text" name="category" id="itemCategory" value={this.state.category} onChange={this.handleAddCakeInputChange}/>
        </FormGroup>
        
        <Button outline color="secondary" onClick={this.addNewComposedCakeMenuItem}>Add New</Button>
        
      </Form>
        );
    }
}
