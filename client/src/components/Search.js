import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../App.css';
import Moment from 'react-moment';
import { Form,OverlayTrigger,Tooltip, Card}  from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SkillsTypeahead from './SkillsTypeahead';
import RecordUpdate from './RecordUpdate';


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
  
    if (this.state.key==='Action'){
        this.props.searchByQuery('Skill', this.state.skill_id);
    }

    if (this.state.key==='Thinking about suicide or self harm'){
        this.props.searchByQuery('critical', true);
    }
    // this.props.searchByQuery(this.state.key, this.state.query);
  }

  setSkillCallback = (skill) =>{

    this.setState({skill})
    let url = `http://localhost:3001/api/skill_id?skill_title=${skill}`
    
    fetch(url, {
      method: 'get',
      headers: { 'Content-Type': 'application/json'}
      })
      .then(res => res.json()).then(json => this.setState({skill_id:json[0].skill_id})).catch(function(e) {
      console.log(e); // “oh, no!”
     })

  }
  onSelectRecord(record){
    this.props.handleSelectRecord(record)
  } 

  render() {

    let searchList  = this.props.searchList.map((record)=>(
            
        <RecordUpdate 
        key={record.record_id} 
        record={record} 
        onSelectRecord = {this.onSelectRecord.bind(this)}
        currentRecord = {record}
          />
          
      ))
    
           
    return (
<div style={{width:'100%'}}>
        <div style={{width:'40%', margin:'0 auto'}}>

<form>

  <div class="form-group">
    <label >Key</label>
    <Form.Control as="select" onChange={this.handleKeyChange.bind(this)}>
    
      <option>Feeling</option>
      <option>fullList</option>
      <option>unfinished</option>
      <option>impact</option>
      <option>Action</option>
      <option>Thinking about suicide or self harm</option>
    </Form.Control>
  </div>

  <SkillsTypeahead  
    skillsTypeahead = {this.props.skillsTypeahead}
    setSkillCallback = {this.setSkillCallback}
    />
  
</form>
</div>


<div style={{width:'60%', margin:'0 auto'}}>



       <button onClick={this.search}>Search user Records</button> 
       {searchList}
      </div>
        
      </div>  
      
    )
  }
}