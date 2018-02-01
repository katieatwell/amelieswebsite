import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./style.css";
import API from "../../../utils/API";

export default class AddNewCater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            desc: "",
            price: "",
            id: "",
            category: "",
            cafeOrcatering: "",
        };
    }
    addNewCCMenuItem = (event) => {
        API.addCCMenuItem({
                category: this.state.category,
                description: this.state.desc,
                title: this.state.title,
                price: this.state.price,
                cafeOrcatering: this.state.cafeOrcatering
            })
            .then(res => this.props.loadCafeMenuItems(),
                this.setState({
                    title: "",
                    desc: "",
                    price: "",
                    id: "",
                    category: "",
                    cafeOrcatering: ""
                }))
            .catch(err => console.log(err));
    }

    handleAddInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Form>
 
        <FormGroup>
          <Label for="name">Item Title</Label>
          <Input type="text" name= "title" id="itemTitle" value={this.state.title} onChange={this.handleAddInputChange}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="name">Item Description</Label>
          <Input type="text" name="desc" id="itemDescription" value={this.state.desc} onChange={this.handleAddInputChange}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="email">Item Price</Label>
          <Input type="text" name="price" id="itemPrice" value={this.state.price} onChange={this.handleAddInputChange}/>
        </FormGroup>
        
        <FormGroup> 
        <Label for="email">Menu Choice (Either Cafe or Catering)</Label>
          <Input type="text" name="cafeOrcatering" id="itemMenu" value={this.state.cafeOrcatering} onChange={this.handleAddInputChange}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="name">Item Category</Label>
          <Input type="text" name="category" id="itemCategory" value={this.state.category} onChange={this.handleAddInputChange}>
          </Input>
        </FormGroup>
        
        <Button outline color="secondary" onClick={this.addNewCCMenuItem}>Add New</Button>
        
      </Form>
        );
    }
}
