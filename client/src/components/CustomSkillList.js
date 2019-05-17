import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css';
import CustomSkill from './CustomSkill'

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
            <button onClick={this.props.getCustomSkills} style={{margin:'10px auto', fontSize:'20px',  width:'50%', minWidth:'200px', alignItems:'center'}} className='subBtn' type="button">Get Your Activity List
        </button> 
          
           {customSkills}
          
          </div> 
        )
      }
    
      
}