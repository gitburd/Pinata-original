import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css';
import CustomSkill from './CustomSkill'
import {Link} from 'react-router-dom';
import { Form, Button, Card, CardColumns}  from 'react-bootstrap';

export default class CustomSkillList extends Component {

   

    render() {
        let customSkills  = this.props.customSkillsList.map((skill)=>(
            
            <CustomSkill
            key={skill.skill_id} 
            skill={skill}
            // onSelectRecord = {this.onSelectRecord.bind(this)}
            currentSkill = {skill}
              />
              
          ))
        
        return (
          <div >
            <button onClick={this.props.getCustomSkills} style={{margin:'0 auto 30px auto', padding:'10px', fontSize:'20px',  width:'50%', minWidth:'200px', alignItems:'center'}} className='subBtn' type="button">Get Your Activity List
        </button> 
        <Link className="navbar-brand" to="/custom/new">
          <i class="far fa-plus-square" style={{ fontSize: '2em', padding:'10px' }} ></i>
          </Link>

          <CardColumns style={{width:'70%', margin:'0 auto'}}>
          
           {customSkills}
           </CardColumns>
          </div> 
        )
      }
       
    
      
}