import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Form }  from 'react-bootstrap';
import Moment from 'react-moment';
import Slider, { Range } from 'rc-slider';
import MySlider from './MySlider';


export default class AutoCompleteText extends Component {
  constructor(props){
      super(props);
    this.items = [
        'Angry',
        'Sad',
        'Lonely',
        'Anxious',
        'Bitter',
        'Bored',
        'Confused',
        'Insecure',
        'Delusional',
        'Remorse',
        'Rejected',
        'Bewildered',
        'Discouraged',
        'Dismayed',
        'Fearful',
        'Frightened',
        'Hesitant',
        'Disillusioned',
        'Judged',
        'Judgmental',
        'Self-Critical',
        'Aversion',
        'Avoidant',
        'Weak',
        'Vulnerable',
        'Apologetic',
        'Disconnected',
        'Stressed Out', 
        'Depressed',
        'Isolated',     
        'Scared',
        'Hopeless',
        'Unreal',
        'Disoriented',
        'Jittery',
        'Disdain',
        'Disgusted',
        'Embarrassed',
        'Envious',
        'Hurt',
        'Inadequate',   
        'Irritated',
        'Jealous',
        'Lost',
        'Miserable',
        'Mistreated',
        'Abused',
        'Nervous',
        'Stupid',
        'Tense',
        'Suspicious',
        'Shocked',
        'Self-conscious',
        
        'Terrified',
        'Trapped',
        'Uncomfortable',
        'Worried',
        'Worthless',
        'Helpless',
        'Foolish',
        'Frustrated',
        'Grieving',
        'Overwhelmed',
        'Resentful',
        'Ashamed',
        'Aggressive',
        'Disappointed',
        'Distant',
        'Enraged',
        'Furious',
        'Hateful',
        'Hostile',
        'Irate',
        'Mad',
        'Pissed Off',
        'Provoked',
        'Violent',
        'Violated',
        'Wronged',
        'Abandoned',
        'Alone',
        'Apathetic',
        'Numb',
        'Disparaged',
        'Desperate',
        'Empty',
        'Hollow',
        'Ignored',      
        'Tired',
        'Exhausted',
        'Flat',
        'Sleepy',
        'Awful',
        'Exposed',
        'Humiliated',
        'Pained',      
        'Withdrawn',
        'Alienated',
        'Devastated',
        'Disrespected',
        'Inferior',
        'Insignificant',
        'Ridiculed',
        'Powerless',
        'Victimized',
        'Threatened',
        'Constricted',
        'Indifferent',
        'Unaware',
        'Tight',
        'Pressure'    
    ];

    
    this.state={
        test:'callback test',
        suggestions:[],
        skillsGridArray:[],
        userSkillsArray:[],
        text:"",
        record_id:'',
        emotion_text:'TEST',
        before_lvl:'',
        si:false,
        sh:false,
        emotions:{ 
            "Angry" : 3,
            "Sad" : 4,
            "Depressed" : 5,
            "Isolated" : 6,
            "Lonely" : 7,
            "Scared" : 8,
            "Hopeless" : 9,
            "Unreal" : 10,
            "Disoriented" : 12,
            "Jittery" : 13,
            "Anxious" : 14,
            "Bitter" : 16,
            "Bored" : 17,
            "Confused" : 18,
            "Disdain" : 19,
            "Disgusted" : 20,
            "Embarrassed" : 21,
            "Envious" : 22,
            "Hurt" : 23,
            "Inadequate" : 24,
            "Insecure" : 25,
            "Irritated" : 26,
            "Jealous" : 27,
            "Lost" : 28,
            "Miserable" : 29,
            "Mistreated" : 30,
            "Abused" : 31,
            "Nervous" : 32,
            "Stupid" : 33,
            "Tense" : 34,
            "Suspicious" : 35,
            "Shocked" : 36,
            "Self-conscious" : 37,
            "Delusional" : 38,
            "Terrified" : 39,
            "Trapped" : 40,
            "Uncomfortable" : 41,
            "Worried" : 42,
            "Worthless" : 43,
            "Helpless" : 50,
            "Foolish" : 51,
            "Frustrated" : 52,
            "Grieving" : 53,
            "Overwhelmed" : 55,
            "Resentful" : 56,
            "Ashamed" : 57,
            "Aggressive" : 58,
            "Disappointed" : 59,
            "Distant" : 60,
            "Enraged" : 61,
            "Furious" : 62,
            "Hateful" : 63,
            // "Hostile" : 64,
            "Irate" : 65,
            "Mad" : 66,
            "Pissed Off" : 67,
            "Provoked" : 68,
            "Violent" : 69,
            "Violated" : 70,
            "Wronged" : 71,
            "Abandoned" : 72,
            "Alone" : 73,
            "Apathetic" : 74,
            "Numb" : 75,
            "Disparaged" : 76,
            "Desperate" : 77,
            "Empty" : 78,
            "Hollow" : 79,
            "Ignored" : 80,
            "Remorse" : 81,
            "Tired" : 82,
            "Exhausted" : 83,
            "Flat" : 84,
            "Sleepy" : 85,
            "Awful" : 86,
            "Exposed" : 87,
            "Humiliated" : 88,
            "Pained" : 89,
            "Rejected" : 90,
            "Withdrawn" : 91,
            "Alienated" : 92,
            "Devastated" : 93,
            "Disrespected" : 94,
            "Inferior" : 95,
            "Insignificant" : 96,
            "Ridiculed" : 97,
            "Powerless" : 98,
            "Victimized" : 99,
            "Threatened" : 100,
            "Constricted" : 101,
            "Indifferent" : 102,
            "Unaware" : 103,
            "Tight" : 104,
            "Pressure" : 105,
            "Bewildered" : 106,
            "Discouraged" : 107,
            "Dismayed" : 108,
            "Fearful" : 109,
            "Frightened" : 110,
            "Hesitant" : 111,
            "Disillusioned" : 112,
            "Judged" : 113,
            "Judgmental" : 114,
            "Self-Critical" : 115,
            "Aversion" : 116,
            "Avoidant" : 117,
            "Weak" : 118,
            "Vulnerable" : 119,
            "Apologetic" : 120,
            "Disconnected" : 121,
            "Stressed Out" : 122
            
        },
        pinata :   {
            "skill_title": "piñata",
            "skill_details": "Lorium sermpra filler text is filling the text sapce.",
            "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/wildcard2.png",
            "skill_id": 0
        }
    };

    this.onSubmit= this.onSubmit.bind(this);
    this.handleBefore_lvlChange = this.handleBefore_lvlChange.bind(this);
    this.handleSIChange = this.handleSIChange.bind(this);
    this.handleSHChange = this.handleSHChange.bind(this);
    this.newRecord = this.newRecord.bind(this);
    this.getSkillsGrid = this.getSkillsGrid.bind(this);
    this.someFn = this.someFn.bind(this);
    
    // end of constructor
    }
        
    handleBefore_lvlChange(before_lvl) {
    this.setState({before_lvl})
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
    // console.log(this.props.state)
    // this.props.updateRecord(this.state.record_id, this.state.before_lvl, this.state.before_lvl);


    this.setState({
        
        message:`Record Made.`
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
        }, this.getEmotionSkills(value))
        console.log('line 116',this.state.emotion_text)
        
        console.log(`line 117`, this.state.emotion_text)
        
        console.log(`line 121`, this.state.emotion_text)
    }


    newRecord  = (e) => {
        // make new record
        console.log('216 newRecord')
        e.preventDefault();
        let url = `http://localhost:3001/api/records`            
        let record = 
            {
            before_lvl:this.state.before_lvl,
            emotion_id:this.state.emotion_id,
            si:this.state.si,
            sh:this.state.sh,
            user_id:this.props.user_id,
            date: Math.round((new Date()).getTime() / 1000)
            };  
            
            console.log(record)
        fetch(url, {
            method: 'post',
            body: JSON.stringify(record),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(r => r.json())
        .then(json=>{this.setState({recent_record:json}, this.getUserSkills())})
        .catch(function(e) {console.log(`something is wrong! : ${e}`); })           
    }

    getNewRecord = (e) => {
        console.log('216 getNewRecord')
        e.preventDefault();
        let auth0_id= this.props.auth0_id
        let url = `http://localhost:3001/api/newRecord?auth0_id=${auth0_id}`
        if (this.props.auth0_id && this.props.auth0_id!==''){
    
        fetch(url, {
            method: 'get',
            headers: { 'Content-Type': 'application/json'}
            })
            .then(res => res.json())
            .then(json => console.log('256',json))
            // .then(json=>{console.log('line 32',json); return json})
            .catch(function(e) {console.log(e)})
        
        }else {console.log(`user id is required`)}
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

        let url = `http://localhost:3001/api/userSkills?id=${this.props.user_id}&emotion=${this.state.emotion_text}`
    
        console.log(`userSkills ${url}`)
        fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json()).then(json => this.setState({userSkillsArray: json},() =>this.getSkillsGrid())).catch(function(e) {
        console.log(e); // “oh, no!”
        })
    
    }


    getSkillsGrid = () => {      
        let baseSkillsArray=[];
        let userSkillsArray=[];
        let emotionSkillsArray=[];
        let customSkillsArray= [];
        let idx;
        let target;


        for(let i=0;i<this.props.baseSkillsArray.length; i++){
          baseSkillsArray.push(this.props.baseSkillsArray[i]);
        }

        for(let i=0;i<this.state.emotionSkillsArray.length; i++){
          emotionSkillsArray.push(this.state.emotionSkillsArray[i]);
        }

        for(let i=0;i<this.state.userSkillsArray.length; i++){
          userSkillsArray.push(this.state.userSkillsArray[i]);
        }

        for(let i=0;i<this.props.customSkillsArray.length; i++){
            customSkillsArray.push(this.props.customSkillsArray[i]);
          }

        while (this.state.skillsGridArray.length < 3) {
        if (this.state.skillsGridArray.length === 1) {
            this.state.skillsGridArray.push(this.state.pinata)
            
        } else if (userSkillsArray.length > 0) {
console.log('grid length from 284', userSkillsArray.length)
            idx = Math.floor((Math.random() * userSkillsArray.length))
            target = userSkillsArray[idx]            
console.log('target from 287', target)
            this.state.skillsGridArray.push(target)
            emotionSkillsArray = emotionSkillsArray.filter(e => e.skill_id !== target.skill_id);
            baseSkillsArray = baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
            userSkillsArray = userSkillsArray.filter(e => e.skill_id !== target.skill_id);
            customSkillsArray = customSkillsArray.filter(e => e.skill_id !== target.skill_id);

            console.log('grid array from 285', this.state.skillsGridArray)
        } else {
            idx = Math.floor((Math.random() * baseSkillsArray.length))
            target = baseSkillsArray[idx]
            this.state.skillsGridArray.push(target)
            emotionSkillsArray = emotionSkillsArray.filter(e => e.skill_id !== target.skill_id);
            baseSkillsArray = baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
        }
        }
    
        // add emotion skills 
    
        while (this.state.skillsGridArray.length < 6) {
        if (emotionSkillsArray.length > 0) {
            idx = Math.floor(Math.random() * emotionSkillsArray.length)
            target = emotionSkillsArray[idx]
            this.state.skillsGridArray.unshift(target)
            console.log(`${target} emotion`)
            emotionSkillsArray = emotionSkillsArray.filter(e => e.skill_id !== target.skill_id);
            baseSkillsArray = baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
            customSkillsArray = customSkillsArray.filter(e => e.skill_id !== target.skill_id);
        } else {
            idx = Math.floor(Math.random() * baseSkillsArray.length)
            target = baseSkillsArray[idx]
            this.state.skillsGridArray.unshift(target)
            baseSkillsArray = baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
        }
        }
        // add base skills 
        while (this.state.skillsGridArray.length < 9) {
        idx = Math.floor(Math.random() * baseSkillsArray.length)
        target = baseSkillsArray[idx]
        this.state.skillsGridArray.push(baseSkillsArray[idx])
        baseSkillsArray = baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
        }

        if (this.state.skillsGridArray.length === 9 ){
            console.log('correct length at end of function')
            emotionSkillsArray = emotionSkillsArray.filter(e => e.user_id === 0);
            

            baseSkillsArray= baseSkillsArray.concat(emotionSkillsArray).concat(customSkillsArray)
            this.setState({skillsGridArray:this.state.skillsGridArray, baseSkillsArray},() => this.getCriticalSkills())

            // this.setState({skillsGridArray:this.state.skillsGridArray},() => this.someFn())
        }
    
    }


    getCriticalSkills = () => {
        console.log('made it to critical skills')
        if (this.state.si || this.state.sh || this.state.before_lvl>6 ){
    
            let url = 'http://localhost:3001/api/criticalSkills'
    
            fetch(url, {
                method: 'get',
                headers: { 'Content-Type': 'application/json'}
                })
                .then(res => res.json())
                .then(json => this.setState({criticalSkills:json}, () => this.someFn()))
                .catch(function(e) {
                console.log(e); // “oh, no!”
            })
        }else {
            this.setState({criticalSkills:[]}, () => this.someFn())
        }
    }

    someFn(){
        console.log('made it to somefn')
        let skillsGridArray= this.state.skillsGridArray
       
        let si = this.state.si
        let sh= this.state.sh
        let before_lvl =this.state.before_lvl
        let recent_record = this.state.recent_record.record;
        let baseSkillsArray = this.state.baseSkillsArray;
        let userSkillsArray= this.state.userSkillsArray
        let emotionSkillsArray = this.emotionSkillsArray;
        let criticalSkills = this.state.criticalSkills;
        this.props.myCallback(skillsGridArray, recent_record, criticalSkills, userSkillsArray, emotionSkillsArray, baseSkillsArray, si, sh, before_lvl);
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
        let grid;

        if (this.state.si){
            grid = '/suicideprevention'
        } else if (this.state.before_lvl>6){
            grid='/criticalgrid'
        } else {
            grid = '/grid'
        }
        return (
            <div style={{margin:'auto'}}>
                <h1 id="feeling"style={{padding:'25px 70px'}}>I'm feeling</h1>
                <div className="AutoCompleteText">
                    <input value={text} type="text" onChange={this.onTextChanged} />
                    <ul>
                        {this.renderSuggestions()}
                    </ul>                
                </div>
                <br/>
                
               
                    <div className = {this.state.emotion_text === 'TEST' ? 'hidden': ''}>
                        <h3>
                        The intensity of this feeling is 
                        </h3>
                        <MySlider style={{margin:'0 auto'}} handleBefore_lvlChange= {this.handleBefore_lvlChange}/>
                    </div>
                    <div className = {this.state.before_lvl<7 ? 'hidden': ''}>
                        <h3>I am also thinking about </h3>  
                        <button className="myBtn" onClick={this.handleSIChange}>Suicide</button>
                        <button className="myBtn" onClick={this.handleSHChange}>Self harm</button> 
                    </div>
                    <div className = {this.state.before_lvl ? '':'hidden'}>
                        <button className="subBtn" onClick={this.newRecord}>Get suggestions</button> 
                    </div>             
               
            </div>
        )
    }

 
}



