import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../App.css';
import { Form, Button}  from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MySlider from './MySlider';
import AfterLvlSlider from './AfterLvlSlider';
import EmotionsTypeahead from './EmotionsTypeahead'
import SkillsTypeahead from './SkillsTypeahead'

export default class MakeCustomSkill extends Component {
  constructor(){
    super();
    this.state = { 
      skill_title:'',
      skill_details:'',
      skill_icon:'https://s3-us-west-2.amazonaws.com/pinata-images/icons/write.png'
      
      // https://s3-us-west-2.amazonaws.com/pinata-images/icons/compassion.png
    }
  }

  updateSkill_title(e){
    this.setState({skill_title:e.target.value.substr(0,13)})
  }

  updateSkill_details(e){
    this.setState({skill_details:e.target.value.substr(0,50)})
  }

    onSubmit =(e)=> { 
        e.preventDefault();
        this.makeNewCustomSkill(this.state.skill_title, this.state.skill_icon, this.state.skill_details, this.props.user_id);
      }
    

      makeNewCustomSkill  = (skill_title,skill_icon,skill_details, user_id) => { 
        let url = `http://localhost:3001/api/customskills`            
        let skill = 
          {
          skill_title,
          skill_details,
          skill_icon,
          is_heart:true,
          user_id
          };       
        fetch(url, {
          method: 'post',
          body: JSON.stringify(skill),
          headers: { 'Content-Type': 'application/json'}
        })
        .then(r => r.json())
        // .then(json=>{this.setState({recent_record:json.record}); return json})
        .catch(function(e) {console.log(`something is wrong! : ${e}`); })           
      }
    

    
  render() {
            
    return (
      <div  >
        
      
        <h1 style={{padding:'20px'}}>Make a new skill</h1>
        
        <h3> Skill name </h3>

        <input style={{margin:'20px'}} type='text' value={this.state.skill_title} onChange={this.updateSkill_title.bind(this)}></input>


        <h3> Skill description </h3>


        <input style={{margin:'20px auto', width:'100%'}} type='textarea' 
        value={this.state.skill_details}
        multiline = {true}
        numberOfLines={5}
        onChange={this.updateSkill_details.bind(this)}></input>
       
             
     
        <button  style={{margin:'0px auto 20px auto', fontSize:'20px',  width:'100%'}} className='subBtn' type="button" onClick = {this.onSubmit.bind(this)} >Create Skill
        </button>
          
            
  
      </div>         
    )
  }
}