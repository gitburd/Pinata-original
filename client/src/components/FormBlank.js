import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../App.css';
import { Form }  from 'react-bootstrap';


export default class FormBlank extends Component {
  state={
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

  
  handleChange(emotion) {
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
    this.setState({before_lvl: before_lvl.target.value})
  }

  handleAfter_lvlChange(after_lvl) {
    // let fieldName = event.target.name;
    // let fleldVal = event.target.value;
    this.setState({after_lvl: after_lvl.target.value})
  }

  handleDateChange(date) {
    // let fieldName = event.target.name;
    // let fleldVal = event.target.value;
    this.setState({date: date.target.value})
  }

  handleSHChange() {
  
    if(this.state.sh){
      this.setState({sh: false})
    }else {this.setState({sh: true})}
  }

  handleSIChange() {
   
    if(this.state.si){
      this.setState({si: false})
    }else {this.setState({si: true})}

  }


  onSubmit =(e)=> {
    e.preventDefault();
    this.props.addFullRecord( this.state.skill_id, this.state.emotion_id, this.state.before_lvl, this.state.after_lvl, this.state.sh, this.state.si);


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
      <div className='main'>
      <div className='form'>
         <Form>
  
 
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Emotion</Form.Label>
    <Form.Control as="select"  defaultValue={this.state.emotion}
  onChange={this.handleChange.bind(this)}>
    
      <option>Angry</option>
      <option>Depressed</option>
      <option>Hopeless</option>
      <option>Isolated</option>
      <option>Lonely</option>
      <option>Sad</option>
      <option>Scared</option>
     
    </Form.Control>
  </Form.Group>
 
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Skill</Form.Label>
    <Form.Control as="select" defaultValue={this.state.emotion}
  onChange={this.handleSkillChange.bind(this)}>
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

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Before Level</Form.Label>
    <Form.Control as="select"  defaultValue={this.state.before_lvl}
  onChange={this.handleBefore_lvlChange.bind(this)}>
    
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
     
    </Form.Control>
  </Form.Group>


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
 
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Date</Form.Label>
    <Form.Control as="select"  defaultValue={this.state.date}
  onChange={this.handleDateChange.bind(this)}>
    
      <option>2019-04-24</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
     
    </Form.Control>
  </Form.Group>

  <Form.Group id="formGridCheckbox">
  
    <Form.Check type="checkbox" label='Thinking About Suicide'  onChange={this.handleSIChange.bind(this)}/> 
  </Form.Group>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label='Thinking About Self Harm' onChange={this.handleSHChange.bind(this)}/>
  </Form.Group>

  <input type="submit" value="Submit" className="btn" style={{ margin:'20px'} }
       onClick={this.onSubmit.bind(this)} />

</Form>

{this.state.message}


</div>
             </div>
        
      
    )
  }
}