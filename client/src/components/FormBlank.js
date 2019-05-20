import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../App.css';
import { Form, Button}  from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MySlider from './MySlider';
import AfterLvlSlider from './AfterLvlSlider';
import EmotionsTypeahead from './EmotionsTypeahead'
import SkillsTypeahead from './SkillsTypeahead'
import {Link} from 'react-router-dom';

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

  setEmotionCallback = (emotion)=>{
 
    this.setState({emotion})
    
    
    let url = `http://localhost:3001/api/emotion_id?emotion_text=${emotion}`
  console.log(url)
  fetch(url, {
    method: 'get',
    headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json()).then(json => this.setState({emotion_id:json[0].emotion_id})).catch(function(e) {
    console.log(e); // “oh, no!”
   })
 
  }

  setSkillCallback = (skill) =>{

    this.setState({skill})
    let url = `http://localhost:3001/api/skill_id?skill_title=${skill}`
    
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
      
        
        <div  style={{padding:'20px'}}>
        <button style={{background:'transparent', border:'none', cursor:'auto'}}> <h1 >Add a New Record</h1></button>
         
        <Link className="navbar-brand" to="/records/list">
          <i class="far fa-arrow-alt-circle-left" style={{ fontSize: '2em', padding:'2px' }} ></i>
        </Link>
          <h3>I was feeling </h3>
          <EmotionsTypeahead setEmotionCallback= {this.setEmotionCallback}/>
          <h3>The intensity was  </h3>
          <MySlider handleBefore_lvlChange = {this.handleBefore_lvlChange}/>
          <h3>I tried </h3>
          <SkillsTypeahead     
            skillsTypeahead = {this.props.skillsTypeahead}
            customSkillsArray = {this.props.customSkillsArray}
            baseSkillsArray = {this.props.baseSkillsArray}
            setSkillCallback= {this.setSkillCallback}/>
          <h3>then the intensity was </h3>
          <AfterLvlSlider  handleAfter_lvlChange = {this.handleAfter_lvlChange}/> 
          <h3> Date </h3>
          <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={this.state.startDate}
            onChange={this.handleDateChange} 
          />
          <h3 style={{paddingTop:'60px'}}> I was also thinking about </h3>  
          <div style={{margin:'15px auto 0px auto'}}>        
            <button  style={{margin:'10px', fontSize:'16px',  width:'38%'}} className='myBtn' type="button" onClick = {this.handleSIChange.bind(this)} >Suicide
            </button>
            <button  style={{margin:'15px auto 0px auto', fontSize:'16px',  width:'38%'}} className='myBtn' type="button" onClick = {this.handleSHChange.bind(this)} >Self harm
            </button>
          </div>
          <br/>         
          <button  style={{margin:'0px auto 30px auto', fontSize:'20px',  width:'100%'}} className='subBtn' type="button" onClick = {this.onSubmit.bind(this)} >Create Record
          </button>     
          {/* {this.state.message} */}
        </div>
      </div>      
    )
  }
}