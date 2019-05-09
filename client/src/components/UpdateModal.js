import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../App.css';
import Moment from 'react-moment';
import { Button, Form,OverlayTrigger,Tooltip, Card, Modal}  from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

 
export default class UpdateModal extends Component {
  constructor(props) {
    super(props)
    this.state={
      after_lvl:'',
      show: false
    }
    this.onSubmit= this.onSubmit.bind(this);
    this.handleAfter_lvlChange = this.handleAfter_lvlChange.bind(this);
    this.closeModal = this.closeModal.bind(this)
    }

 closeModal= ()=>{
    //  e.preventDefault();
   this.props.recordModalClose()
 }

 

  
  handleAfter_lvlChange(after_lvl) {
    this.setState({after_lvl: after_lvl.target.value})
    }

    onSubmit =(e)=> {
        e.preventDefault();
        console.log(this.props.state)
        this.props.updateRecord(this.props.update_record_id, this.props.update_before_lvl, this.state.after_lvl);
    
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
          show={this.props.recordModalShow}
          close={this.closeModal} 
          onHide={this.closeModal}
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='modal' 
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
             
              <Moment unix>{this.props.update_date}</Moment>
             
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div style={{float:'right'}}>
                <div className= {this.props.update_si ? '':'hidden'}> 
                  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Thinking about suicide</Tooltip>}>
                    <span className="d-inline-block">
                      <div style={{ pointerEvents: 'none', float:'right' }}>
                        <i style={{float:'right'}} class="fas fa-star-of-life"></i>
                      </div>
                      </span>
                  </OverlayTrigger>
                </div>

                <div className= {this.props.update_sh ? '':'hidden'}> 
                  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Thinking about self harm</Tooltip>}>
                      <span className="d-inline-block">
                        <div style={{ pointerEvents: 'none', float:'right' }}>
                          <i style={{float:'right'}} class="fas fa-star-of-life"></i>
                        </div>
                        </span>
                    </OverlayTrigger>       
                </div> 
              </div>
              
               <h2> I'm feeling <b>{this.props.update_emotion}</b> </h2>
               <h2> I will <b>{this.props.update_skill}</b></h2>
               <h2>Intensity of feeling is <b> {this.props.update_before_lvl} </b></h2>
               
              
              
        <hr/>

              <div style={{width:'50%', margin:'0 auto'}}>
                <Form>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>How did it go?</Form.Label>
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
         
              
              
            </Modal.Body>
            <Modal.Footer>
            
            <Button onClick={this.closeModal}>Close</Button>
        
             
            </Modal.Footer>
          </Modal>
        );
      }
    }