import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Skill from './Skill';



export default class SkillsGrid extends Component {
  constructor(props) {
    super(props);
    this.state={
      record_id:'',
      test:'test',
      recentRecord:[]
    }
  }
 
  // componentDidMount(){
  //   this.getNewRecord();
  // }


// getUser = () => {
//   let url = `http://localhost:3001/api/user?auth0_id=${this.props.auth0_id}`
//   if (this.props.auth0_id && this.props.auth0_id!==''){

//     fetch(url, {
//       method: 'get',
//       headers: { 'Content-Type': 'application/json'}
//       })
//       .then(res => res.json())
//       .then(json => this.setState({user_id:json[0].user_id},() => this.getNewRecord(json[0].user_id)))
//       // .then(json=>{console.log('line 32',json); return json})
//       .catch(function(e) {console.log(e)})
  
//   }else {console.log(`auth0 id is required`)}
// }



  getNewRecord = (user_id) => {
 
    let url = `http://localhost:3001/api/newRecord?auth0_id=${this.props.auth0_id}`
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

  let skillsGrid = this.props.skillsGridArray.map((skill)=>(
    <Skill 
    {...this.props} 
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


  return (
    
    <div className="main skillsGrid"> 

      {skillsGrid}
      
    </div>
    
 
  )
  }
}

 
