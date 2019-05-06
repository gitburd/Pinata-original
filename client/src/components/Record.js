import React, { Component } from 'react'
import Moment from 'react-moment';

export default class Record extends Component {
  render() {
    const { record_id, skill_id, skill_title, skill_icon, emotion_id, emotion_text, before_lvl, after_lvl, impact, date, si, sh} = this.props.record;

    function isSi(){
      return si ? 'Y':'N';
    }
    function isSh(){
      return sh ? 'Y':'N';
    }
    const isSiDisplay = isSi(si)
    const isShDisplay = isSh(sh)
    
    return (
      <div>
          <div className="record">


          <Moment unix>{date}</Moment>  - si: {isSiDisplay}  sh:{isShDisplay} <br/>
               {emotion_text} : {skill_title} ({impact})  
             </div>
      </div>
    )
  }
}
