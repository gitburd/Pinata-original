import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, ButtonToolbar, Form}  from 'react-bootstrap';
 
export default class SkillDetails extends Component {
  constructor(props) {
    super(props)
    this.state={
      after_lvl:'',
      tryItClicked:false, 
      show: false
    }
    this.onSubmit= this.onSubmit.bind(this);
    this.handleAfter_lvlChange = this.handleAfter_lvlChange.bind(this);

    this.closeModal = this.closeModal.bind(this)

    }

 closeModal= ()=>{
   this.props.showModalCallback();
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
    this.setState({after_lvl: after_lvl.target.value})
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
        message:`Record updated.`
        });

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
            <Modal.Body>
            <div className = {this.state.tryItClicked? 'hidden': ''}>
            <img  src={this.props.skill_icon} className="skill_details_icon" /> 
              <p>{this.props.skill_details}</p>
            </div>

            <div className = {this.state.tryItClicked? '': 'hidden'}>
              <p>Great work!</p>
              <p>How did it go?</p>

              <div style={{width:'50%', margin:'0 auto'}}>
                <Form>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>After Level</Form.Label>
                  <Form.Control as="select"  
                    onChange={this.handleAfter_lvlChange.bind(this)}>
            
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
            
                  </Form.Control>
                  </Form.Group>
      
                </Form>
              </div>
            </div>
              
              
            </Modal.Body>
            <Modal.Footer>
            <div className = {this.state.tryItClicked? 'hidden': ''}>
            <Button onClick={this.closeModal}>Close</Button>
            <Button style={{margin:'10px'}} onClick = {this.setSkill}
              variant="outline-success">Try it</Button>
            </div>

            <div className = {this.state.tryItClicked? '': 'hidden'}>
            <Button onClick={this.closeModal}>Skip</Button>
            <Button style={{margin:'10px'}}
                  onClick={this.onSubmit.bind(this)} 
                  variant="outline-success"> Submit </Button>
            </div>
             
            </Modal.Footer>
          </Modal>
        );
      }
    }
    