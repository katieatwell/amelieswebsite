import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./style.css";
import API from "../../../utils/API";

export default class AddNewCafe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      price: "",
      id: "",
      cafeOrcatering: "cafe",
      cat: ""
    };
  }

  componentDidMount() {
    this.props.loadCafeMenuItems();
  }

  selectCategory(event) {
    this.setState({
      cat: event.target.value,
    }, () => console.log(this.state.cat));
  }

  addNewCCMenuItem = (event) => {
    API.addCCMenuItem({
        category: this.state.cat,
        description: this.state.desc,
        title: this.state.title,
        price: this.state.price,
        cafeOrcatering: this.state.cafeOrcatering
      }, () => console.log(this.state.cafeOrcatering))
      .then(res =>
        this.setState({
          title: "",
          desc: "",
          price: "",
          id: "",
          category: "",
          cafeOrcatering: "cafe",
          value: ""
        }, this.props.loadCafeMenuItems()))
      .catch(err => console.log(err));
  }

  handleAddInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const cafeCat = Object.keys(this.props.cafeMenuCat);
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
        
        <Button outline color="secondary" onClick={this.addNewCCMenuItem}>Add New</Button>
        
      </Form>
    );
  }
}
