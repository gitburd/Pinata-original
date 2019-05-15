import React, { Component } from 'react'
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonToolbar, Button, OverlayTrigger, Tooltip, Card }  from 'react-bootstrap';


export default class RecordUpdate extends Component {
    constructor(props) {
        super(props)
        this.state={
          record_id:'',
          emotion:'',
          emotion_id:'',
          skill:'',
          skill_id:'',
          before_lvl:'',
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

  
    
    let skillDisplay = skill_title? skill_title:'No activity selected'
    let impactDisplay = impact? impact:'Not recorded'
    

     
    return (
      
      <div>
      <Card style={{ width: '100%', marginTop:'25px', marginBottom:'25px' }}>
        <Card.Body>
          <div style={{float:'right'}}>
            <div className= {this.props.record.si ? '':'hidden'}> 
              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Thinking about suicide</Tooltip>}>
                <span className="d-inline-block">
                  <div style={{ pointerEvents: 'none', float:'right',color: 'purple' }}>
                    <i style={{float:'right'}} class="fas fa-star-of-life fa-sm"></i>
                  </div>
                  </span>
              </OverlayTrigger>
            </div>
 
            <div className= {this.props.record.sh ? '':'hidden'}> 
              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Thinking about self harm</Tooltip>}>
                  <span className="d-inline-block">
                    <div style={{ pointerEvents: 'none', float:'right', color: 'purple', padding:'1px' }}>
                      <i style={{float:'right'}} class="fas fa-star-of-life fa-sm"></i>
                    </div>
                    </span>
                </OverlayTrigger>       
            </div> 
          </div>

          <Card.Header style={{background:'white', color:'purple'}} className="mb-2 "><span ><Moment format="D MMM YYYY" unix>{date}</Moment></span></Card.Header> 
          <div className='recordTitle'>    
            <Card.Title  as="h2">I was Feeling <span className='recordTitles'> <b> {emotion_text} </b> </span> </Card.Title>
            <Card.Title as="h2">I Tried <span className='recordTitles'><b>{skillDisplay}</b></span></Card.Title>
          </div>
          <Card.Footer style={{background:'white', margin:'5px'}} className="mb-2 text-muted">
            <small>The Impact was <span className='recordTitles'><b>{impactDisplay} </b></span></small>
            <button  style={{margin:'15px auto 0 auto', fontSize:'20px',  width:'100%'}} className='myBtn' type="button" onClick = {this.onSelectRecord.bind(this)} >Update
             </button>
        
         </Card.Footer>

        
        </Card.Body>
      </Card>
    
    </div>  
      
    )
  }
}



