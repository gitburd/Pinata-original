import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Skill from './Skill';



export default class SkillsGrid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  
    let emotionSkills =  this.props.emotionSkillsArray.map((s)=>(
    <Skill key={s.id} skill={s}/>
  ))
  

  let userSkills =  this.props.userSkillsArray.map((skill)=>(
    <Skill key={skill.id} skill={skill}/>
  ))

  let baseSkills = this.props.baseSkillsArray.map((skill)=>(
    <Skill key={skill.id} skill={skill}/>
  ))

  let skillsGrid = this.props.skillsGridArray.map((skill)=>(
    <Skill key={skill.id} skill={skill}/>
  ))


  return (
    
    <div className="skillsGrid">    
      {skillsGrid}
    </div>
    

  )
  }
}

 
// see everything
// return (         
//   <div>
// {skillsGrid}
// <h2>skills grid </h2>
// <br/>
// {userSkills}
// <h2> user skills </h2>
// <br/>
// {emotionSkills}
// <h2>emotion skills</h2>
// <br/>
//   {baseSkills}
//   <h2>base skills </h2>
//   </div>
// )

  // PropTypes
  // SkillsGrid.propTypes= {
  //   SkillsGrid: PropTypes.array.isRequired
  // }