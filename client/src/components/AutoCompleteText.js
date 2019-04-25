import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Form }  from 'react-bootstrap';

export default class AutoCompleteText extends Component {
  constructor(props){
      super(props);
    this.items = ["Fear",
    "Angry",
    "Sad",
    "Disconnected",
    "Disoriented",
    "Unreal",
    "Jittery",
    "Anxious",
    "Depressed"
        
    ];

    
    this.state={
        emotion_id:5,
        suggestions:[],
        user_id:2,
        skillsGridArray:[],
        userSkillsArray:[],
        text:"",
        record_id:'',
        emotion_text:'TEST',
        before_lvl:'',
        si:false,
        sh:false,
        emotions:{
            Scared:8,
            Angry:3,
            Sad:4,
            Depressed:5,
            Isolated:6,
            Lonely:7,
            Hopeless:9, 
            Disconnected:11,
            Disoriented:12,
            Unreal:10,
            Jittery:13,
            Anxious:14,
            Depressed:15
        }
    };

    this.onSubmit= this.onSubmit.bind(this);
    this.handleBefore_lvlChange = this.handleBefore_lvlChange.bind(this);
    
    // end of constructor
    }
        
        handleBefore_lvlChange(before_lvl) {
        this.setState({before_lvl: before_lvl.target.value})
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
        // console.log(this.props.state)
        // this.props.updateRecord(this.state.record_id, this.state.before_lvl, this.state.before_lvl);
    

        this.setState({
            
        //     before_lvl:'',
        //     date:'',
        //     si:false,
        //     sh:false,
            message:`Record updated.`
            });
    
        }


  onTextChanged = (e) =>{
    const value = e.target.value; 
    let suggestions = [];
    if (value.length >0){
        const regex = new RegExp(`^${value}`, 'i');
        suggestions = this.items.sort().filter(v => regex.test(v));
    }
        this.setState({suggestions, text:value});

    }

    suggestionSelected(value){
        console.log('line 106',value)
        console.log('line 107',this.state.emotion_text)
        let the_id = this.state.emotions[value]
        this.setState({
             emotion_text:value,
            suggestions:[],
            text:value ,
            emotion_id:the_id 
        })
        console.log('line 116',this.state.emotion_text)
        
        console.log(`line 117`, this.state.emotion_text)
        this.getEmotionSkills(value);
        console.log(`line 121`, this.state.emotion_text)
    }


    newRecord  = () => {

        let url = `http://localhost:3001/api/records`

        let newRecord = 
    
        {
        before_lvl:this.state.before_lvl,
        emotion_id:this.state.emotion_id,
        si:this.state.si,
        sh:this.state.sh,
        user_id:this.props.user_id,
        date:  "2099-09-09"
        }
    
        fetch(url, {
        method: 'post',
        body: JSON.stringify(newRecord),
        headers: { 'Content-Type': 'application/json'}
        
        })
        .catch(function(e) {console.log(`something is wrong! : ${e}`); })
    
    }

    getEmotionSkills = (emotion_text) => {
        console.log(`line 148`, this.state.emotion_text)
    let url = `http://localhost:3001/api/emotionSkills?emotion=${emotion_text}`
    console.log(url)
    console.log("line 151", this.state.emotion_text)
    fetch(url, {
    method: 'get',
    headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(json=>{console.log(json); return json})
    .then(json=>{console.log('line 158',this.state.emotion_text); return json})
    .then(json => this.setState({emotionSkillsArray: json}))
    .then(json=>{console.log('line 160',this.state.emotion_text); return json})
    .catch(e => {console.log(e)})

    }

    getUserSkills = () => {

        let url = `http://localhost:3001/api/userSkills?id=${this.state.user_id}&emotion=${this.state.emotion_text}`
    
        console.log(`userSkills ${url}`)
        fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json()).then(json => this.setState({userSkillsArray: json})).catch(function(e) {
        console.log(e); // “oh, no!”
        })
    
    }

    getSkillsGrid = () => {

        let idx;
        let i = 0;
        let target;
    
        // add user skills 
    
        while (this.state.skillsGridArray.length < 3) {
        if (this.state.skillsGridArray.length === 1) {
            this.state.skillsGridArray.push(this.state.pinata)
        } else if (this.state.userSkillsArray.length > 0) {
            idx = Math.floor((Math.random() * this.state.userSkillsArray.length))
            target = this.state.userSkillsArray[idx]
            this.state.skillsGridArray.push(target)
            this.state.emotionSkillsArray = this.state.emotionSkillsArray.filter(e => e.skill_id !== target.skill_id);
            this.props.baseSkillsArray = this.props.baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
            this.state.userSkillsArray = this.state.userSkillsArray.filter(e => e.skill_id !== target.skill_id);
    
        } else {
            idx = Math.floor((Math.random() * this.props.baseSkillsArray.length))
            target = this.props.baseSkillsArray[idx]
            this.state.skillsGridArray.push(target)
            this.state.emotionSkillsArray = this.state.emotionSkillsArray.filter(e => e.skill_id !== target.skill_id);
            this.props.baseSkillsArray = this.props.baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
        }
        }
    
        // add emotion skills 
    
        while (this.state.skillsGridArray.length < 6) {
        if (this.state.emotionSkillsArray.length > 0) {
            idx = Math.floor(Math.random() * this.state.emotionSkillsArray.length)
            target = this.state.emotionSkillsArray[idx]
            this.state.skillsGridArray.unshift(target)
            console.log(`${target} emotion`)
            this.state.emotionSkillsArray = this.state.emotionSkillsArray.filter(e => e.skill_id !== target.skill_id);
            this.props.baseSkillsArray = this.props.baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
    
        } else {
            idx = Math.floor(Math.random() * this.props.baseSkillsArray.length)
            target = this.props.baseSkillsArray[idx]
            this.state.skillsGridArray.unshift(target)
            this.props.baseSkillsArray = this.props.baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
        }
        }
        // add base skills 
        while (this.state.skillsGridArray.length < 9) {
        idx = Math.floor(Math.random() * this.props.baseSkillsArray.length)
        target = this.props.baseSkillsArray[idx]
        this.state.skillsGridArray.push(this.props.baseSkillsArray[idx])
        this.props.baseSkillsArray = this.props.baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
        }
    
    }
 

    renderSuggestions(){
        const {suggestions} = this.state;
        if (suggestions.length === 0 ){
            return null
        }
        return (
            <ul>
            
                {suggestions.map((item) => <li onClick={()=> 
                this.suggestionSelected(item)
                
                }>{item}</li>)
                
                }
                
            </ul>
        )
    }
  
    render() {
        const { text } = this.state
    return (
        <div>
            <h1>I am feeling</h1>
      <div className="AutoCompleteText">
        <input value={text} type="text" onChange={this.onTextChanged} />
        <ul>
            {this.renderSuggestions()}
        </ul>
        
      </div>
      <br/>
      
      <Form>
      <div className = {this.state.emotion_text === 'TEST' ? 'hidden': ''}>
        <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Before Level</Form.Label>
    <Form.Control as="select"  defaultValue={this.state.before_lvl}
  onChange={this.handleBefore_lvlChange.bind(this)}
  >
    
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
     
    </Form.Control>
  </Form.Group>
  </div>
  
 
    <div className = {this.state.before_lvl<6 ? 'hidden': ''}>
        <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label='Thinking About Suicide'  onChange={this.handleSIChange.bind(this)}/> 
        </Form.Group>

        <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label='Thinking About Self Harm' onChange={this.handleSHChange.bind(this)}/>
        </Form.Group>

    </div>
        
        <input type="submit" value="Submit" className="btn" style={{ margin:'20px'} }
            onClick={this.newRecord.bind(this)}
                />
                
        </Form>

      <button onClick={this.getEmotionSkills}>get emotion skills</button>
      <button onClick={this.getUserSkills}>get user skills</button>
      <button onClick={this.getSkillsGrid}>get grid </button>

      <Link to={`/grid`}> Click me!</Link>

      {/* <p className='flagText'>Thoughs of suicide</p> */}
      </div>
    )
  }

 
}



