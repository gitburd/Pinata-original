import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css';
import { ButtonToolbar, Button }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillsGrid from './SkillsGrid';


export default class Skill extends Component {
  state={
    skill_id:'skill.js state', 
    skill_icon:'skill.js state', 
    skill_details:'skill.js state', 
    skill_title:'skill.js state'
  }


  render() {
    const { skill_id, skill_title, skill_details, skill_icon} = this.props.skill;
           
    return (
      <div>
          <div className="skill">
                <img onClick = {()=>{this.props.skillClicked(skill_id, skill_icon, skill_details, skill_title)}} src={skill_icon} className="skill_icon" /> 
                <br/>
                {skill_title}
            </div>
        
      </div>
    )
  }
}


 
// OKAY! 
//   put to the record by id 
//     function 
//       record id :   
//         function to get the most recent id - it will be the one made from the last page - it will also not have a skill assigned.
//       skill id : 
//         in the state of the modal/ SkillsGrid(Skill)
    
//     UI 
//       button to skip- close for now 
//       button to run the funtion above 





 
// export class Skill extends Component {
//     getStyle= ()=> {
//         return {
//         backgroundColor:'#fff',
//         padding: '10px', 
//         fontSize:'18px', 
//         color:'#007fff'

//         }
//     }
  
    
//     render() {
//     const { id, skill, completedStatus, icon, helpful, feel_change} = this.props.skill;
//         return (
//         <div style={this.getStyle()}>
//             {skill}
//             {Music}

//         </div>
//     )
//   }
// }

// PropTypes
// Skill.propTypes= {
//     skill: PropTypes.object.isRequired
// }



// export default Skill