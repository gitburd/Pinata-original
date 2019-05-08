import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Skill from './Skill';
import {Link} from 'react-router-dom';

export default class criticalSkillsGrid extends Component {
    constructor(props) {
        super(props);
        this.state={
          record_id:'',
          test:'test',
          criticalSkills: 
          [
            {
                "skill_id": 14,
                "skill_title": "Tempurature",
                "skill_details": "Lorium sermpra filler text is filling the text sapce.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/wildcard.png",
                "is_critical": true
            },
            {
                "skill_id": 15,
                "skill_title": "Intense Exercise",
                "skill_details": "Lorium sermpra filler text is filling the text sapce.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/wildcard.png",
                "is_critical": true
            },
            {
                "skill_id": 16,
                "skill_title": "Practiced Breathing",
                "skill_details": "Even somehting as simple as controlling your breathing can have a profound impact on reducing emotional pain. If you have a favorite breath it out. If not try a technigue called \"box breathing\" Slowly. Count to four while brething out. Count to four while holding your breath. Count to four while breathing in.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/wildcard.png",
                "is_critical": true
            },
            {
                "skill_id": 17,
                "skill_title": "Muscle Relaxation",
                "skill_details": "Slowly tense and realax every muscel in your body. Start with your toes and feet then your arms and hands. Tense and release the muscels in your face and jaw, neck, shoulders, back, torse and  lower back. Feel the change in your body of releasing all the tension spend as much time as you need on each area and feel the difference of releasing tension.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/wildcard.png",
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
            <div>
                <div className="main criticalGrid"> 
                    {criticalSkillsGrid}
                </div>
            </div>
            <div className='skipButton'>
                <Link to="/grid">
                        <button type="button">
                            Skip these
                        </button>
                </Link>
            </div>
    </div>
    )
  }
}
