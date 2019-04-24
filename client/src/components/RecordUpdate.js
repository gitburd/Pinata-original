import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../App.css';
import { Button }  from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class RecordUpdate extends Component {
    constructor(props) {
        super(props)
        this.state={
          record_id:'26',
          emotion:'',
          emotion_id:'',
          skill:'',
          skill_id:'',
          before_lvl:'6',
          after_lvl:'',
          date:'',
          si:false,
          sh:false,
          message:''
        }
        this.onSelectRecord = this.onSelectRecord.bind(this)
    
}
onSelectRecord(){
  this.props.onSelectRecord(this.props.currentRecord)
}

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
          <Button style={{margin:'10px'}} onClick = {this.onSelectRecord.bind(this)} variant="outline-success">Update</Button>
          
         
          {date} - si: {isSiD}  sh:{isShD} <br/>
               {emotion_text} : {skill_title} 

              
               <i class="fas fa-exclamation-circle"></i>

             </div>
      </div>
    )
  }
}
