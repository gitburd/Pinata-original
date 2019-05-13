import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../App.css';
import Moment from 'react-moment';
import { Form,OverlayTrigger,Tooltip, Card}  from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class Update extends Component {
  constructor(props){
    super(props);

    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleKeyChange(key) {
    this.setState({key: key.target.value})
    }

    handleQueryChange(query) {
      this.setState({query: query.target.value})
      }

  search=(e)=>{
    e.preventDefault();
    this.props.searchByQuery(this.state.key, this.state.query);
  }


  render() {
    
           
    return (
     <div>

<form>

  <div class="form-group">
    <label >Key</label>
    <Form.Control as="select" onChange={this.handleKeyChange.bind(this)}>
    
      <option>Feeling</option>
      <option>SH</option>
      <option>fullList</option>
      <option>unfinished</option>
      <option>impact</option>
      <option>Skill</option>
    </Form.Control>
  </div>
  <div class="form-group">
    <label >Query</label>
    <Form.Control as="select" onChange={this.handleQueryChange.bind(this)}>
      <option>true</option>
      <option>Sad</option>
      <option>Workout</option>
      <option>3</option>
      <option>5</option>
    </Form.Control>
  </div>
  
</form>




       <button onClick={this.search}>Search user Records</button> 
      </div>
        
      
    )
  }
}