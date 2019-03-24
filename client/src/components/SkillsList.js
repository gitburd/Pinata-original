import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css';
import Skill from './Skill.js';

class SkillsList extends Component {
    render() {
      console.log(this.props.skillsList);

    return this.props.skillsList.map((skill)=>(
        
        <Skill key={skill.id} skill={skill}  />
    ));
    
  }
}

// PropTypes
SkillsList.propTypes= {
    skillsList: PropTypes.array.isRequired
}


export default SkillsList 