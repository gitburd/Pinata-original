import React, { Component } from 'react'

export default class Record extends Component {
  render() {
    const { record_id, skill_id, skill_title, skill_icon, emotion_id, emotion_text, before_lvl, after_lvl, impact, date, si, sh} = this.props.record;

    function isSi(){
      return si ? 'Y':'N';
    }
    function isSh(){
      return sh ? 'Y':'N';
    }
    const isSiD = isSi(si)
    const isShD = isSh(sh)
    
    return (
      <div>
          <div className="record">
          {date} - si: {isSiD}  sh:{isShD} <br/>
               {emotion_text} : {skill_title} ({impact})  
             </div>
      </div>
    )
  }
}
