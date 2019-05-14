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
        'Delusional',
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
        },
        baseSkillsArray :
        [
            
                {
                    "skill_title": "Aroma",
                    "skill_details": "Breathing in something that smells good, essential oils, incense, candles, flowers, perfume, any smell you like.",
                    "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/aroma.png ",
                    "skill_id": 22
                },
                {
                  "skill_title": "Compassion",
                  "skill_details": "Find love in your heart for yourself and others.",
                  "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/compassion.png",
                  "skill_id": 23
              },
              {
                "skill_title": "Cute Overload",
                "skill_details": "Time for a few cat videos! Take some time to appreciate anything adorable.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/cute.png",
                "skill_id": 24
              },
        
              {
                "skill_title": "Goals",
                "skill_details": "Make a todo list. Plan out your future or next steps.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/goals.png",
                "skill_id": 25
              },
              {
                "skill_title": "Gratitude ",
                "skill_details": "Remember the kind words and deeds of loving people. Reflect on the things you are grateful for.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/gratitude.png",
                "skill_id": 26
              },
              {
                "skill_title": "Nature",
                "skill_details": "Garden, visit the forest, go for a walk or hike. Spend sometime time with plants.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/nature.png",
                "skill_id": 27
              },
              {
                "skill_title": "Read",
                "skill_details": "Get out of your head and into a book. Break out your favorite or try something new.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/read.png",
                "skill_id": 28
              },
              {
                "skill_title": "Punch a Pillow",
                "skill_details": "Get out some of those feelings on a pillow.",
                "skill_icon": " https://s3-us-west-2.amazonaws.com/pinata-images/icons/punchpillow.png",
                "skill_id": 29
              },
              {
                "skill_title": "Video Games",
                "skill_details": "Have fun! Take some time off and enjoy yourself.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/playvideogames.png",
                "skill_id": 30
              },
              {
                "skill_title": "Listen to Music",
                "skill_details": "Play your favorites or check out something new.",
                "skill_icon": " https://s3-us-west-2.amazonaws.com/pinata-images/icons/listenmusic.png",
                "skill_id": 31
              },
              {
                "skill_title": "Take a Walk",
                "skill_details": "Get outside. Breath in the fresh air and get a bit of exercise.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/takewalk.png ",
                "skill_id": 32
              },
              {
                "skill_title": "Workout",
                "skill_details": "Exercise, lift weights, or otherwise get moving at the gym or anywhere else.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/workout.png",
                "skill_id": 33
              },
              {
                "skill_title": "Wring Towel",
                "skill_details": "Let out your feelings physically.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/wringtowel.png",
                "skill_id": 34
              },
              {
                "skill_title": "Make Art",
                "skill_details": "Draw, paint, color, sculpt, dance, make music, write, be creative!",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/makeart.png",
                "skill_id": 35
              },
        
              {
                "skill_title": "Write",
                "skill_details": "Journal, write a story or stream of consciousness, write a letter no need to send it, express yourself.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/write.png",
                "skill_id": 36
              },
              {
                "skill_title": "Perform",
                "skill_details": "Karaoke, act out a scene, do comedy, dance, express yourself.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/perform.png",
                "skill_id": 37
              },
              {
                "skill_title": "Take a Bath",
                "skill_details": "Bath or shower. Relax in the water, try some candles, music or bath salts.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/takebath.png",
                "skill_id": 39
              },
          
              {
                "skill_title": "Tidy Up",
                "skill_details": "Clean up your space.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/tidy.png",
                "skill_id": 43
              },
              {
                "skill_title": "Lay in Sun",
                "skill_details": "Get outside and soak up some Vitamin D.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/sun.png ",
                "skill_id": 44
              },
              {
                "skill_title": "Phone a Friend",
                "skill_details": "Reach out and call someone you trust.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/phonefriend.png",
                "skill_id": 45
              },
              {
                "skill_title": "Support Network",
                "skill_details": "Spend time with friends or family. Reach out to your support network in person, over the phone or online.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/social1.png",
                "skill_id": 46
              },
              {
                "skill_title": "Comedy",
                "skill_details": "Standup, improve, satire you have so many options!",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/comedy.png",
                "skill_id": 47
              },
              {
                "skill_title": "Stretch",
                "skill_details": "Stretch out or practice yoga with others or on your own.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/strech.png",
                "skill_id": 48
              },
              {
                "skill_title": "Meditate",
                "skill_details": "Clear your mind. Follow a guided practice or meditate on your own.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/meditate1.png",
                "skill_id": 49
              },
              {
                "skill_title": "Take a Breath",
                "skill_details": "If you have a favorite breath it out. If try 'box breathing' Slowly. Count to four while breathing out. Count to four while holding your breath. Count to four while breathing in.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/takebreather2.png",
                "skill_id": 50
              },
              {
                "skill_title": "Play with Pet",
                "skill_details": "Show some love to your fuzzy friend.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/playpet.png",
                "skill_id": 51
              },
           
              {
                "skill_title": "Fix Something",
                "skill_details": "Work on your car/bike or other project. Tinker around and solve a problem.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/fix.png",
                "skill_id": 52
              },
              {
                "skill_id": 18,
                "skill_title": "Tempurature",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/temperature.png",
                "skill_details": "Try to change your body temperature. Splash your face with cold water or hold an ice cube to focus your mind on something else.",
            },
            {
                "skill_id": 19,
                "skill_title": "Intense Exercise",
                "skill_details": "Try some intense exercise to help increase oxygen flow to the brain. Sprinting or a good workout at the gym.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/intenseexercise.png"
            },
            {
                "skill_id": 20,
                "skill_title": "Paced Breathing",
                "skill_details": "Try taking some deep breaths. Paced breathing can help stop the fight or flight or freeze shallow breathing response. Breath in from your diaphragm for 6 seconds. Hold for 7. Breath out for 8. Pause for 4 seconds and start again.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/pacedbreathing.png"
            },
            {
                "skill_id": 21,
                "skill_title": "Muscle Relaxation",
                "skill_details": "Try to release the tension in your body by alternate between tightening and relaxing your muscles. Focus on muscle groups one at a time. You may be holding tension in you face, jaw, neck, shoulders, back, lower back, arms, hands, legs, feet or toes and not realize it.",
                "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/icons/musclerelax.png"
            }
          
         
        ]
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
        let idx;
        let target;
        while (this.state.skillsGridArray.length < 3) {
        if (this.state.skillsGridArray.length === 1) {
            this.state.skillsGridArray.push(this.state.pinata)
            
        } else if (this.state.userSkillsArray.length > 0) {
console.log('grid length from 284', this.state.userSkillsArray.length)
            idx = Math.floor((Math.random() * this.state.userSkillsArray.length))
            target = this.state.userSkillsArray[idx]            
console.log('target from 287', target)
            this.state.skillsGridArray.push(target)
            this.state.emotionSkillsArray = this.state.emotionSkillsArray.filter(e => e.skill_id !== target.skill_id);
            this.state.baseSkillsArray = this.state.baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
            this.state.userSkillsArray = this.state.userSkillsArray.filter(e => e.skill_id !== target.skill_id);
console.log('grid array from 285', this.state.skillsGridArray)
        } else {
            idx = Math.floor((Math.random() * this.state.baseSkillsArray.length))
            target = this.state.baseSkillsArray[idx]
            this.state.skillsGridArray.push(target)
            this.state.emotionSkillsArray = this.state.emotionSkillsArray.filter(e => e.skill_id !== target.skill_id);
            this.state.baseSkillsArray = this.state.baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
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
            this.state.baseSkillsArray = this.state.baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
    
        } else {
            idx = Math.floor(Math.random() * this.state.baseSkillsArray.length)
            target = this.state.baseSkillsArray[idx]
            this.state.skillsGridArray.unshift(target)
            this.state.baseSkillsArray = this.state.baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
        }
        }
        // add base skills 
        while (this.state.skillsGridArray.length < 9) {
        idx = Math.floor(Math.random() * this.state.baseSkillsArray.length)
        target = this.state.baseSkillsArray[idx]
        this.state.skillsGridArray.push(this.state.baseSkillsArray[idx])
        this.state.baseSkillsArray = this.state.baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
        }

        if (this.state.skillsGridArray.length === 9 ){
            console.log('correct length at end of function')
            this.setState({skillsGridArray:this.state.skillsGridArray},() => this.getCriticalSkills())

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
        let baseSkillsArray = this.baseSkillsArray;
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



