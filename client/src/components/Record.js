import React, { Component } from 'react'
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonToolbar, Button, OverlayTrigger, Tooltip, Card }  from 'react-bootstrap';

export default class Record extends Component {
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
                    <div style={{ pointerEvents: 'none', float:'right' }}>
                      <i style={{float:'right'}} class="fas fa-star-of-life"></i>
                    </div>
                    </span>
                </OverlayTrigger>
              </div>

              <div className= {this.props.record.sh ? '':'hidden'}> 
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Thinking about self harm</Tooltip>}>
                    <span className="d-inline-block">
                      <div style={{ pointerEvents: 'none', float:'right' }}>
                        <i style={{float:'right'}} class="fas fa-star-of-life"></i>
                      </div>
                      </span>
                  </OverlayTrigger>       
              </div> 
            </div>

            <Card.Header className="mb-2 text-muted"><Moment unix  format="D MMM YYYY">{date}</Moment></Card.Header> 
            <div className='recordTitle'>    
              <Card.Title  as="h2">I'm feeling <b>{emotion_text}</b> </Card.Title>
              <Card.Title as="h2" >I will <b>{skillDisplay}</b></Card.Title>
            <Card.Footer className="mb-2 text-muted"><small>Impact on intensity of the emotion : <b>{impactDisplay} </b></small></Card.Footer>
            </div>
          </Card.Body>
        </Card>
      
      </div>   
    )
  }
}
