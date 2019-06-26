import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../App.css';
import Moment from 'react-moment';
import { Button, Form,OverlayTrigger,Tooltip, Card, Modal}  from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import AfterLvlSlider from './AfterLvlSlider';

 
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
    this.setState({after_lvl})
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
      }, this.closeModal);
  
    }

      render() {
      return (
          <Modal
          show={this.props.recordModalShow}
          // close={this.closeModal} 
          onHide={this.closeModal}
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='modal' 
          >
            <Modal.Header style={{color:'purple', textAlign:'center'}} closeButton>
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
               
               <h2> I was feeling <span className='recordTitles'><b>{this.props.update_emotion}</b> </span></h2>
               <h2> I tried <span className='recordTitles'><b>{this.props.update_skill}</b></span></h2>
               <h2>Intensity was <span className='recordTitles'><b> {this.props.update_before_lvl} </b></span></h2>
  
        <hr/>
        <div style={{padding:'10px', margin:'0 auto', alignItems:'center', color:'purple', backgroundColor:'#edf0fc'}}>
            <h2>The intensity became <span ><b>  {this.state.after_lvl}</b></span></h2>
              <div style={{ margin:'30px auto', width:'50%', alignItems:'center'}}>

              <AfterLvlSlider  handleAfter_lvlChange = {this.handleAfter_lvlChange}/>
           
                
              </div>
              </div>    
            </Modal.Body>
            <Modal.Footer>
            

            <button  style={{ margin:'0 auto',border:'2px solid purple', fontSize:'20px',  width:'40%'}} className='subBtn' type="button" onClick={this.closeModal}>Close</button>
            <button  style={{ margin:'0 auto',border:'2px solid purple', fontSize:'20px',  width:'40%'}}  className='subBtn' type="button" onClick = {this.onSubmit.bind(this)} > Update</button>
        
             
            </Modal.Footer>
          </Modal>
        );
      }
    }