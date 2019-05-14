import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../App.css';
import { Form, Button}  from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MySlider from './MySlider';
import AfterLvlSlider from './AfterLvlSlider';

export default class FormBlank extends Component {
  constructor(props) {
    super(props)
    this.state={
      emotion:'',
      emotion_id:'',
      skill:'',
      skill_id:'',
      before_lvl:'',
      after_lvl:'',
      date:'',
      si:false,
      sh:false,
      message:'',
      startDate: new Date()
    }
    this.handleBefore_lvlChange = this.handleBefore_lvlChange.bind(this);
    this.handleAfter_lvlChange = this.handleAfter_lvlChange.bind(this);
  this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  
  handleEmotionChange(emotion) {
    // let fieldName = event.target.name;
    // let fleldVal = event.target.value;
    this.setState({emotion: emotion.target.value})
    console.log(emotion.target.value)
    
    let url = `http://localhost:3001/api/emotion_id?emotion_text=${emotion.target.value}`
  console.log(url)
  fetch(url, {
    method: 'get',
    headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json()).then(json => this.setState({emotion_id:json[0].emotion_id})).catch(function(e) {
    console.log(e); // “oh, no!”
   })
 
  }

  handleSkillChange(skill) {
    this.setState({skill: skill.target.value})
    let url = `http://localhost:3001/api/skill_id?skill_title=${skill.target.value}`
    
    fetch(url, {
      method: 'get',
      headers: { 'Content-Type': 'application/json'}
      })
      .then(res => res.json()).then(json => this.setState({skill_id:json[0].skill_id})).catch(function(e) {
      console.log(e); // “oh, no!”
     })

  }


  handleBefore_lvlChange(before_lvl) {
    // let fieldName = event.target.name;
    // let fleldVal = event.target.value;
    this.setState({before_lvl})
  }

  handleAfter_lvlChange(after_lvl) {
    // let fieldName = event.target.name;
    // let fleldVal = event.target.value;
    this.setState({after_lvl})
  }

  handleDateChange(date) {
    // let fieldName = event.target.name;
    // let fleldVal = event.target.value;
    let unixDate= new Date(date).getTime() / 1000

    this.setState({Startdate: date, date:unixDate})
  }

 

  handleSHChange(e) {
    e.preventDefault();
  
    if(this.state.sh){
      this.setState({sh: false})
    }else {this.setState({sh: true})}
  }

  handleSIChange(e) {
    e.preventDefault();
   
    if(this.state.si){
      this.setState({si: false})
    }else {this.setState({si: true})}

  }


  onSubmit =(e)=> {
    e.preventDefault();
    this.props.addFullRecord( this.state.skill_id, this.state.emotion_id, this.state.before_lvl, this.state.after_lvl, this.state.si,this.state.sh, this.state.date);


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
        message:`Record added : ${this.state.emotion} & ${this.state.skill}`
      });
  }

  render() {
             
    return (
      <div className='addRecord' >
        <div >
          <h1 style={{padding:'20px'}}>Add a New Record</h1>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <h3>I was feeling </h3>
              
              <Form.Control as="select"  
                onChange={this.handleEmotionChange.bind(this)}>
                <option></option>
                <option>Angry</option>
                <option>Depressed</option>
                <option>Hopeless</option>
                <option>Isolated</option>
                <option>Lonely</option>
                <option>Sad</option>
                <option>Scared</option>
            
              </Form.Control>
            </Form.Group>
   
              <h3>The intensity was  </h3>
              <MySlider handleBefore_lvlChange = {this.handleBefore_lvlChange}/>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <h3>I tried </h3>
              <Form.Control as="select" 
                onChange={this.handleSkillChange.bind(this)}>
                <option></option>
                <option>Cook</option>
                <option>Dance</option>
                <option>Listen to Music</option>
                <option>Make Art</option>
                <option>Phone a Friend</option>
                <option>Play Video Games</option>
                <option>Punch a Pillow</option>
                <option>Take a Breather</option>
                <option>Take a Walk</option>
                <option>Workout</option>
                <option>Wring a Towel</option>
              </Form.Control>
            </Form.Group>

              <h3>then the intensity was </h3>

              <AfterLvlSlider handleAfter_lvlChange = {this.handleAfter_lvlChange}/>
              

            <h3> Date </h3>
            <DatePicker
              dateFormat="yyyy/MM/dd"
              selected={this.state.startDate}
              onChange={this.handleDateChange} 
            />

            <h3>I was also thinking about </h3>  

            <div style={{margin:'15px auto 0px auto'}}>
          
             <button  style={{margin:'10px', fontSize:'16px',  width:'38%'}} className='myBtn' type="button" onClick = {this.handleSIChange.bind(this)} >Suicide
             </button>

              <button  style={{margin:'15px auto 0px auto', fontSize:'16px',  width:'38%'}} className='myBtn' type="button" onClick = {this.handleSHChange.bind(this)} >Self harm
             </button>
            
             </div>

            <br/>
            
            <button  style={{margin:'0px auto 30px auto', fontSize:'20px',  width:'100%'}} className='subBtn' type="button" onClick = {this.onSubmit.bind(this)} >Create Record
             </button>
          </Form>
          {this.state.message}

        </div>
      </div>      
    )
  }
}