import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import API from "../../../utils/API";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import axios from "axios";

export default class ManagerLoginForm extends React.Component {
  state= {
    name: "",
    password: "",
    submitted:false
  };
  
  
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  
  handleLoginSubmit =(event)=>{
    event.preventDefault();
    if(this.state.name && this.state.password){
      
    }
    API.managerLogin(this.state.name, this.state.password)
      .then((response)=>{
        console.log(response);
        let responseObject=response.data;
        if (responseObject.token) {
          sessionStorage.setItem('token', responseObject.token); //store token
          axios.defaults.headers.common['Authorization'] = "jwt " +sessionStorage.getItem('token'); //update axios Config if new token given.
        };
        this.setState({submitted:true});
      })
      .catch(err => console.log(err));
      
  }
  
  render() {
    return (
      this.state.submitted
      ?
      <Redirect to="/managerDashboard"/>
      
      :<Form>
        <FormGroup>
          <Label for="name">User Name</Label>
          <Input type="text" name= "name" id="userName" onChange={this.handleInputChange} value={this.state.name}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="name">Password</Label>
          <Input type="text" name="password" id="userPassword" onChange={this.handleInputChange} value={this.state.password}/>
        </FormGroup>
        
        <Button onClick = {this.handleLoginSubmit} id="loginSubmit">Submit</Button>
        <br></br>
      </Form>
    );
  }
}
