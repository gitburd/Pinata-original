import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Skill from './Skill';
import {Link} from 'react-router-dom';
import { ButtonToolbar, Button, OverlayTrigger, Tooltip, Card }  from 'react-bootstrap';

export default class criticalSkillsGrid extends Component {
    constructor(props) {
        super(props);
        this.state={
          record_id:'',
          test:'test',
          criticalSkills: 
          [
            {
                "skill_id": 18,
                "skill_title": "Tempurature",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/temperature.png",
                "is_critical": true,
                "skill_details": "Try to change your body temperature. Splash your face with cold water or hold an ice cube to focus your mind on something else.",
            },
            {
                "skill_id": 19,
                "skill_title": "Intense Exercise",
                "skill_details": "Try some intense exercise to help increase oxygen flow to the brain. Sprinting or a good workout at the gym.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/intenseexercise.png",
                "is_critical": true
            },
            {
                "skill_id": 20,
                "skill_title": "Paced Breathing",
                "skill_details": "Try taking some deep breaths. Paced breathing can help stop the fight or flight or freeze shallow breathing response. Breath in from your diaphragm for 6 seconds. Hold for 7. Breath out for 8. Pause for 4 seconds and start again.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/pacedbreathing.png",
                "is_critical": true
            },
            {
                "skill_id": 21,
                "skill_title": "Muscle Relaxation",
                "skill_details": "Try to release the tension in your body by alternate between tightening and relaxing your muscles. Focus on muscle groups one at a time. You may be holding tension in you face, jaw, neck, shoulders, back, lower back, arms, hands, legs, feet or toes and not realize it.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/musclerelax.png",
                "is_critical": true
            }
        ]
    }
    }


  render() {
    let criticalSkillsGrid = this.state.criticalSkills.map((skill)=>(
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
        <div>          
                
            <div  className="criticalGrid"> 
                {criticalSkillsGrid}
            </div>      

            <Link to="/grid">
                <button  style={{margin:'10px auto', fontSize:'16px',  width:'51%', alignItems:'center'}} className='subBtn' type="button">Skip these
                </button>
            </Link>           
        </div>
    )
  }
}
