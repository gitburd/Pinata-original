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
    // let record_id = this.props.recentRecord[0].record_id
    console.log(`this is a test`)
    // this.props.updateRecord(this.state.record_id, this.state.skill_id);
    console.log(this.props.skill_title)
    console.log(this.props.skill_id)
    // console.log(record_id)
    console.log('from details', this.props.recentRecord[0].record_id)
    this.props.addSkillToRecord(this.props.skill_id)
    this.setState({tryItClicked:true})
  }


    getRecentRecord = () => {

      console.log(  `hello from line 10ish`)

      let url = `http://localhost:3001/api/mostRecentRecord?user_id=2`
    
      fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json()).then(json => this.setState({record_id:json.record_id})).catch(function(e) {console.log(e)})
    
    }


    handleAfter_lvlChange(after_lvl) {
      this.setState({after_lvl: after_lvl.target.value})
      }

      onSubmit =(e)=> {
      e.preventDefault();
      console.log(this.props.state)

      let recentRecord = this.props.recentRecord[0]

      this.props.updateRecord(recentRecord.record_id, recentRecord.before_lvl, this.state.after_lvl);
  
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
            size="lg"
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
            <img  src={this.props.skill_icon} className="skill_details_icon" /> 
           
            <div className = {this.state.tryItClicked? 'hidden': ''}>
              <p>{this.props.skill_details}</p>
            </div>

            <div className = {this.state.tryItClicked? '': 'hidden'}>
              <p>Good work choosing a coping strategy!
              <br/> Check back in after finishing the activity and rate your distress level again. 
              </p>
              <hr/>
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
        
                  <input type="submit" value="Submit" className="btn" style={{ margin:'20px'} }
                  onClick={this.onSubmit.bind(this)} />
                </Form>
              </div>
            </div>
              
              
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
            <Button style={{margin:'10px'}} onClick = {this.setSkill}
              variant="outline-success">Try it</Button>


 

             
            </Modal.Footer>
          </Modal>
        );
      }
    }
    