import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css';
import { ButtonToolbar, Button, Card }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillsGrid from './SkillsGrid';
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";


export default class CustomSkill extends Component {
  state={
    skill_id:'skill.js state', 
    skill_icon:'skill.js state', 
    skill_details:'skill.js state', 
    skill_title:'skill.js state'
  }


  render() {
    const { skill_id, skill_title, skill_details, skill_icon} = this.props.skill;
    // const { location } = this.props

    return (
   
      <div >
        <Card >
        <Card.Title style={{paddingTop:'10px',fontSize:'30px', background:'white', fontWeight:'bold', color:'purple'}}>
              {skill_title}
            </Card.Title>
          <Card.Body style={{padding:'0px'}}>
          <Card.Img style={{width:'80%'}} variant="top" src={skill_icon}/>  
            <Card.Text style={{padding:'5px', fontSize:'18px'}}>
              {skill_details}
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer >
            update btn
          </Card.Footer> */}
        </Card>
      </div>
     
    )
  }
}


  