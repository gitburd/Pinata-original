import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css';
import { ButtonToolbar, Button, Card }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillsGrid from './SkillsGrid';
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";


export default class Skill extends Component {
  state={
    skill_id:'skill.js state', 
    skill_icon:'skill.js state', 
    skill_details:'skill.js state', 
    skill_title:'skill.js state'
  }


  render() {
    const { skill_id, skill_title, skill_details, skill_icon, is_critical} = this.props.skill;
    // const { location } = this.props
    return (
      <div>
      <div className= {window.location.pathname === "/grid"  ?  "skill":"criticalSkill"} 
      onClick = 
        { this.props.skill.skill_id === 0 ? this.props.getNewGrid : ()=>{this.props.skillClicked(skill_id, skill_icon, skill_details, skill_title)}}>
 
      <div >
        <Card >
         
          <Card.Body>
            <div className= {this.props.skill.is_heart ? '':'hidden'}> 
            <MDBIcon style={{position:'absolute', top: '10px', right: '10px', zIndex:'2'}}icon="heart" size="1x" className="pink-text pr-3" />
            </div>
            <div className= {this.props.skill.is_star ? '':'hidden'}>
              <MDBIcon style={{position:'absolute', top: '10px', right: '10px', zIndex:'2'}} icon="star" size="1x" className="yellow-text pr-3"/>
            </div>
            <div className='skill_icon'>
            <Card.Img  src={skill_icon} />
            </div>
          </Card.Body>
          <Card.Footer className='skill_footer' style={{padding:'1px'}}>
            {skill_title}
          </Card.Footer>
        </Card>
      </div>
    </div> 
    </div>









     
    )
  }
}


  