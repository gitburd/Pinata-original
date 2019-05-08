import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../App.css';
import Moment from 'react-moment';
import { Form,OverlayTrigger,Tooltip, Card}  from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class Update extends Component {
  constructor(props) {
super(props)
this.state={

}
this.onSubmit= this.onSubmit.bind(this);
this.handleAfter_lvlChange = this.handleAfter_lvlChange.bind(this);

console.log(this.props.state)
}

  handleAfter_lvlChange(after_lvl) {
    this.setState({after_lvl: after_lvl.target.value})
  }

  onSubmit =(e)=> {
    e.preventDefault();
    console.log(this.props.state)
    this.props.updateRecord(this.props.record_id, this.props.before_lvl, this.state.after_lvl);

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
      <div>

        <div >
          <Card style={{ width: '100%', marginTop:'25px', marginBottom:'25px' }}>
            <Card.Body>
              <div style={{float:'right'}}>
                <div className= {this.props.si ? '':'hidden'}> 
                  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Thinking about suicide</Tooltip>}>
                    <span className="d-inline-block">
                      <div style={{ pointerEvents: 'none', float:'right' }}>
                        <i style={{float:'right'}} class="fas fa-star-of-life"></i>
                      </div>
                      </span>
                  </OverlayTrigger>
                </div>

                <div className= {this.props.sh ? '':'hidden'}> 
                  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Thinking about self harm</Tooltip>}>
                      <span className="d-inline-block">
                        <div style={{ pointerEvents: 'none', float:'right' }}>
                          <i style={{float:'right'}} class="fas fa-star-of-life"></i>
                        </div>
                        </span>
                    </OverlayTrigger>       
                </div> 
              </div>

              <Card.Header className="mb-2 text-muted"><Moment unix>{this.props.date}</Moment></Card.Header> 
              <div className='recordTitle'>    
                <Card.Title  as="h2">I'm feeling <b>{this.props.emotion}</b> </Card.Title>
                <Card.Title as="h2" >I will <b>{this.props.skill}</b></Card.Title>
              </div>

              <Card.Footer className="mb-2 text-muted"><small>Before Lvl : <b>{this.props.before_lvl} </b></small></Card.Footer>
            
            </Card.Body>
          </Card>                  
        </div>
        
      <div >
         <Form style={{ textAlign:'center'}}className='form'>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>After Level</Form.Label>
              <Form.Control as="select"  defaultValue={this.state.after_lvl}
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
          {this.state.after_lvl}
          {this.state.message}

        </div>
      </div>
        
      
    )
  }
}