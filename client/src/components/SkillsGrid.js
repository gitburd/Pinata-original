import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Skill from './Skill';



export default class SkillsGrid extends Component {
  constructor(props) {
    super(props);
    this.state={
      record_id:'',
      test:'test',
      recentRecord:[],
      newGrid:[],
      pinata :   {
        "skill_title": "piñata",
        "skill_details": "Lorium sermpra filler text is filling the text sapce.",
        "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/wildcard2.png",
        "skill_id": 0
      }, 
      isFirstGrid:true


    }
    this.getNewGrid = this.getNewGrid.bind(this)
  }
 

  getNewGrid = (e) => {
    e.preventDefault();
    // console.log('out way ', this.props.baseSkillsArray)
    
    let baseSkills = []
    for(let i=0;i<this.props.baseSkillsArray.length; i++){
      baseSkills.push(this.props.baseSkillsArray[i])
    }

    
    let idx;
    let grid = [];
    while (grid.length < 9) {
      console.log('the length at the top ', grid.length)
      console.log(grid)
     
      idx = Math.floor((Math.random() * (baseSkills.length -1)))
      console.log(baseSkills.length, 'base skills length at top')
      if (grid.length === 4) {
        console.log('the before pinata is', grid.length )
        grid.push(this.state.pinata)
        console.log('the after pinata is', grid.length )
      } else {
        console.log('the skill is', idx, baseSkills[idx] )
        grid.push(baseSkills[idx])
        console.log('length after push', grid.length)
        baseSkills.splice(idx,1)
      }  
      console.log('the grid length is', grid.length) 
    }
    if (grid.length>9){
      grid.pop()
      console.log('length ', grid.length)
    }
    this.setState({newGrid:[]}, () => this.setGrid(grid))
    
  }

  setGrid = (grid) =>{
    this.setState({newGrid:grid, isFirstGrid:false})

  }

  getNewRecord = (user_id) => {
 
    let url = `/api/newRecord?auth0_id=${this.props.auth0_id}`
    if (this.props.auth0_id && this.props.auth0_id!==''){
      fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(json => console.log(json))
        // .then(json=>{console.log('line 32',json); return json})
        .catch(function(e) {console.log(e)}) 
    }else {console.log(`user id is required`)}
  }

 render() {
  
    let emotionSkills =  this.props.emotionSkillsArray.map((s)=>(
    <Skill 
    userSkillsArray= {this.props.userSkillsArray}
    addSkillToRecord = {this.props.addSkillToRecord}
    recentRecord = {this.props.recentRecord}
    record = {this.state.recentRecord} 
    skillClicked = {this.props.skillClicked} 
    key={s.id} skill={s}
    modalClose= {this.props.modalClose}
    modalShow={this.props.modalShow}
    />
  ))
  

  let userSkills =  this.props.userSkillsArray.map((skill)=>(
    <Skill 
    {...this.props} 
    userSkillsArray= {this.props.userSkillsArray}
    addSkillToRecord = {this.props.addSkillToRecord}
    recentRecord = {this.props.recentRecord}
    record = {this.state.recentRecord} 
    skillClicked = {this.props.skillClicked} 
    key={skill.id} 
    skill={skill}
    modalClose= {this.props.modalClose}
    modalShow={this.props.modalShow}
    />
  ))

  let baseSkills = this.props.baseSkillsArray.map((skill)=>(
    <Skill 
    {...this.props} 
    userSkillsArray= {this.props.userSkillsArray}
    addSkillToRecord = {this.props.addSkillToRecord}
    recentRecord = {this.props.recentRecord}
    record = {this.state.recentRecord} 
    skillClicked = {this.props.skillClicked} 
    key={skill.skill_id} 
    skill={skill}
    modalClose= {this.props.modalClose}
    modalShow={this.props.modalShow}
    />
  ))

  let skillsGrid = 
  this.props.skillsGridArray.map((skill)=>(
    <Skill 
    {...this.props} 
    userSkillsArray= {this.props.userSkillsArray}
    addSkillToRecord = {this.props.addSkillToRecord}
    recentRecord = {this.props.recentRecord}
    record = {this.state.recentRecord} 
    skillClicked = {this.props.skillClicked} 
    key={skill.skill_id} 
    skill={skill}
    modalClose= {this.props.modalClose}
    modalShow={this.props.modalShow}
    getNewGrid = {this.getNewGrid}
    />
  ))

  let newSkillsGrid = 
  this.state.newGrid.map((skill)=>(
    <Skill 
    {...this.props} 
    userSkillsArray= {this.props.userSkillsArray}
    addSkillToRecord = {this.props.addSkillToRecord}
    recentRecord = {this.props.recentRecord}
    record = {this.state.recentRecord} 
    skillClicked = {this.props.skillClicked} 
    key={skill.skill_id} 
    skill={skill}
    modalClose= {this.props.modalClose}
    modalShow={this.props.modalShow}
    getNewGrid = {this.getNewGrid}
    />
  ))
 
let grid = this.state.isFirstGrid ? skillsGrid : newSkillsGrid;

  return (
   
      <div className= 'skillsGrid' >
        {grid}
      </div>
    
 
  )
  }
}


