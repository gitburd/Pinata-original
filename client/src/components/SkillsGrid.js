import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Skill from './Skill';



export default class SkillsGrid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  
    let emotionSkills =  this.props.emotionSkillsArray.map((s)=>(
    <Skill skillClicked = {this.props.skillClicked} key={s.id} skill={s}/>
  ))
  

  let userSkills =  this.props.userSkillsArray.map((skill)=>(
    <Skill skillClicked = {this.props.skillClicked} key={skill.id} skill={skill}/>
  ))

  let baseSkills = this.props.baseSkillsArray.map((skill)=>(
    <Skill skillClicked = {this.props.skillClicked} key={skill.id} skill={skill}/>
  ))

  let skillsGrid = this.props.skillsGridArray.map((skill)=>(
    <Skill skillClicked = {this.props.skillClicked} key={skill.id} skill={skill}/>
  ))


  return (
    
    <div className="skillsGrid"> 

      {skillsGrid}
      
    </div>
    

  )
  }
}

 
