import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css';


export default class Skill extends Component {


  render() {
    const { skill_id, skill_title, skill_details, skill_icon} = this.props.skill;
           
    return (
      <div>
          <div className="skill">
                <img src={skill_icon} className="skill_icon" /> 
                <br/>
                {skill_title}
             </div>
        
      </div>
    )
  }
}


 


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