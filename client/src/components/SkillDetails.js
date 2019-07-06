import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, ButtonToolbar, Form, ThemeProvider}  from 'react-bootstrap';

import AfterLvlSlider from './AfterLvlSlider';

 
export default class SkillDetails extends Component {
  constructor(props) {
    super(props)
    this.state={
      after_lvl:'',
      tryItClicked:false, 
      rateClicked:false,
      show: false
    }
    this.onSubmit= this.onSubmit.bind(this);
    this.handleAfter_lvlChange = this.handleAfter_lvlChange.bind(this);
    this.closeModal = this.closeModal.bind(this)

    }

 closeModal= ()=>{
  this.setState({tryItClicked:false, rateClicked:false}, this.props.showModalCallback())
    
 }

  setSkill =(e)=> {
    e.preventDefault();
    console.log(`this is a test`)
    // this.props.updateRecord(this.state.record_id, this.state.skill_id);
    console.log(this.props.skill_title)
    console.log(this.props.skill_id)
    // console.log(record_id)
    console.log('from details', this.props.recent_record.record_id)
    this.props.addSkillToRecord(this.props.skill_id)
    this.setState({tryItClicked:true})
  }

  
  handleAfter_lvlChange(after_lvl) {
    this.setState({after_lvl})
    }

    onSubmit =(e)=> {
    e.preventDefault();
    console.log(this.props.state)

    let recent_record = this.props.recent_record

    this.props.updateRecord(recent_record.record_id, recent_record.before_lvl, this.state.after_lvl);

    this.setState({
        emotion:'',
        emotion_id:'',
        skill:'',
        skill_id:'',
        before_lvl:'',
        after_lvl:'',
        date:'',
        si:false,
        sh:false,
        tryItClicked:false,
        message:`Record updated.`
        }, this.closeModal);

    }

    rateClicked = (e) => {
      e.preventDefault()
      this.setState({
        rateClicked:true,
        tryItClicked:false
      })
    }
  
      render() {
      return (
          <Modal
          // show={this.props.modalShow} 
          onHide={this.closeModal}
            {...this.props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='modal' 
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
             
              {this.props.skill_title}
             
              </Modal.Title>
            </Modal.Header>
            <Modal.Body >
            <div className = {this.state.tryItClicked || this.state.rateClicked? 'hidden': ''}>
            <img  src={this.props.skill_icon} className="skill_details_icon" /> 
              <p>{this.props.skill_details}</p>
            </div>

            <div style={{fontSize:'22px'}} className = {this.state.tryItClicked? '': 'hidden'}>
            <h2 style={{fontWeight:'400'}}> Great work
            
            ! </h2>
              <p style={{color:'purple', fontSize:'20px',fontWeight:'400'}}>in 10 minutes</p> 
              <p style={{fontSize:'18px'}}> You'll get a reminder to rate the impact of the action</p> 
            </div>

            <div className = {this.state.rateClicked? '': 'hidden'}>
            <div style={{padding:'0px', margin:'0 auto', alignItems:'center'}}>
            <p style={{backgroundColor:'purple', color:'white', fontWeight:'bold'}}>After trying the activity</p>
              <p> The intensity of my mood is <span style={{color:'purple', fontWeight:'400'}} ><b>  {this.state.after_lvl}</b></span></p>
              <div >

              <AfterLvlSlider style={{margin:'0', padding:'0'}}  handleAfter_lvlChange = {this.handleAfter_lvlChange}/>
           
                
              </div>
              </div>  
            
            </div>
              
              
            </Modal.Body>
            <Modal.Footer>
            <div className = {this.state.tryItClicked || this.state.rateClicked? 'hidden': ''}>
            {/* <Button onClick={this.closeModal}>Close</Button> */}
            <button style={{margin:'10px'}} onClick = {this.setSkill}
              className='myBtn'>Try it</button>
            </div>

            <div className = {this.state.tryItClicked? '': 'hidden'}>
            <p style={{fontSize:'16px', margin:'auto', color:'purple', textAlign:'center',fontWeight:'bold'}}>Done with this action? </p>
            <button className='myBtn' onClick={this.rateClicked}>Rate It Now</button>            
            </div>

            <div className = {this.state.rateClicked? '': 'hidden'}>
            <button style={{margin:'10px'}}
                  onClick={this.onSubmit.bind(this)} 
                  className='myBtn'> Submit </button>
            </div>
             
            </Modal.Footer>
          </Modal>
        );
      }
    }
    