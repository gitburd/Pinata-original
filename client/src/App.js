import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Chart from './components/Chart';
import Emotion from './components/Emotion'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import 'bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SkillDetails from './components/SkillDetails';
import AutoCompleteText from './components/AutoCompleteText';
import SkillsGrid from './components/SkillsGrid';
import CriticalSkillsGrid from './components/CriticalSkillsGrid'
import RecordsList from './components/RecordsList'
import RecordsListUpdate from './components/RecordsListUpdate'
import FormBlank from './components/FormBlank';
import Update from './components/Update';
import AfterLvlPrompt from './components/AfterLvlPrompt';
import Landing from './components/Landing';
import Secret from './components/Secret';
import Callback from './Callback';
import Sidenavbar from './components/Sidenavbar';
import SIResources from './components/SIResources';
import UpdateModal from './components/UpdateModal';



const http = require('http');
const fetch = require('node-fetch');

class App extends Component {
  state = { 
    searchList:[],
    key:'SH',
    query:'true',
    test:'fail',
    modalShow: false,
    recordModalShow: false,
    skillsList:[],
      user_info:[],
      record_id:'',
      before_lvl:'',
      after_lvl:'',
      impact:null,
      emotion:'',
      emotion_id:'',
      skill_id:'',
      skill_icon:'',
      skill_title:'',
      skill_details:'',
      si:'',
      sh:'',
      recordsList : [],
      userSkillsArray : [],
      emotionSkillsArray : [],
      skillsGridArray : [],
      resEmotionId:'',
      has_prompted:0,
      prompt_record:{},
      pinata :   {
        "skill_title": "piñata",
        "skill_details": "Lorium sermpra filler text is filling the text sapce.",
        "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/wildcard.png",
        "skill_id": 0
      },

      emotionsArray:[
        {
          "emotion_id": 1,
          "emotion_text": "test emotion);\n"
        },
        {
          "emotion_id": 2,
          "emotion_text": "test emotion"
        },
        {
          "emotion_id": 3,
          "emotion_text": "Angry"
        },
        {
          "emotion_id": 4,
          "emotion_text": "Sad"
        },
        {
          "emotion_id": 5,
          "emotion_text": "Depressed"
        },
        {
          "emotion_id": 6,
          "emotion_text": "Isolated"
        },
        {
          "emotion_id": 7,
          "emotion_text": "Lonely"
        },
        {
          "emotion_id": 8,
          "emotion_text": "Scared"
        },
        {
          "emotion_id": 9,
          "emotion_text": "Hopeless"
        }
      ],
    
      baseSkillsArray :
      [
        {
            "skill_title": "Test skill",
            "skill_details": "Lorium sermpra filler text is filling the text sapce.",
            "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/wildcard.png",
            "skill_id": 1
        },
        {
            "skill_title": "Play Video Games",
            "skill_details": "Lorium sermpra filler text is filling the text sapce.",
            "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/playvideogames.png",
            "skill_id": 2
        },
        {
            "skill_title": "Wring a Towel",
            "skill_details": "Lorium sermpra filler text is filling the text sapce.",
            "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/wringtowel.png",
            "skill_id": 3
        },
        {
            "skill_title": "Workout",
            "skill_details": "Lorium sermpra filler text is filling the text sapce.",
            "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/workout.png",
            "skill_id": 4
        },
        {
            "skill_title": "Take a Breather",
            "skill_details": "filler text will be written later",
            "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/takebreather.png",
            "skill_id": 5
        },
        {
            "skill_title": "Punch a Pillow",
            "skill_details": "filler text will be written later",
            "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/punchpillow.png",
            "skill_id": 6
        }, 
        {
          "skill_title": "Dance",
          "skill_details": "Lorium sermpra filler text is filling the text sapce.",
          "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/wildcard.png",
          "skill_id": 7
        }, 
        {
          "skill_title": "Listen to Music",
          "skill_details": "Lorium sermpra filler text is filling the text sapce.",
          "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/wildcard.png",
          "skill_id": 8
        }, 
        {
          "skill_title": "Make Art",
          "skill_details": "Lorium sermpra filler text is filling the text sapce.",
          "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/wildcard.png",
          "skill_id": 9
        }, 
        {
          "skill_title": "Phone a Friend",
          "skill_details": "Lorium sermpra filler text is filling the text sapce.",
          "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/phonefriend.png",
          "skill_id": 10
        }, 
        {
          "skill_title": "Take a Walk",
          "skill_details": "Lorium sermpra filler text is filling the text sapce.",
          "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/takewalk.png",
          "skill_id": 11
        }, 
        {
          "skill_title": "Cook",
          "skill_details": "Lorium sermpra filler text is filling the text sapce.",
          "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/cookfood.png",
          "skill_id": 12
        },
        {
          "skill_title": "Play with Pet",
          "skill_details": "Lorium sermpra filler text is filling the text sapce.",
          "skill_icon": "https://s3-us-west-2.amazonaws.com/pinata-images/wildcard.png",
          "skill_id": 12
        }  
    ]
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // set state to back up in local storage 
    this.setState(JSON.parse(localStorage.getItem('backup')))
  }

  saveStateToLocalStorage() {
    localStorage.setItem('backup', JSON.stringify(this.state))
  }

  
  getUserInfo = (auth0_id, first_name, last_name) => {
    
    let url = `http://localhost:3001/api/user?auth0_id=${auth0_id}`
    
    if (auth0_id ){
      fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(json => {
        if (json.length>0) { 
          console.log(json);
          this.setState({user_id:json[0].user_id}, 
          ()=> this.getPromptRecord(auth0_id)
          ); 
          // localStorage.setItem( 'user_id', json[0].user_id )
        }else{
        this.makeNewUser(auth0_id, first_name, last_name);
        console.log('Welcome new user!')}
      })      // .then(json => {return json[0].emotion_id})
      .catch(function(e) {console.log(e);
      })
    }
  }

  getPromptRecord = (auth0_id) => {
    
    let url = `http://localhost:3001/api/promptRecord?auth0_id=${auth0_id}`
    if (this.state.user_id && this.state.user_id!==''){
      fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(json => this.setPromptRecord(json))
        .catch(function(e) {console.log(e)}) 
    }else {console.log(`user id is required`)}
  }

  setPromptRecord = (record) => {  
    if (record.length>0 
      && !this.state.has_prompted
      ){
      this.setState({
        has_prompted:true,
        prompt_record: record[0]
      }
      , ()=>{ window.location='/finish'}
      );
    } 
  }

  recentRecord = (json) => {
  let url = `http://localhost:3001/api/mostRecentRecord?user_id=${json[0].user_id}`
    if (json[0].user_id && json[0].user_id!==''){
      fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(json => this.getRecentRecord(json))
        .catch(function(e) {console.log(e)}) 
    }else {console.log(`user id is required`)}
  }

  getRecentRecord = (record) => {
    this.setState({
      recentRecord: record
    });
    if (record.length>0 && this.state.prompt_count===0){
      this.state.prompt_count+=1;
      window.location='/'; 
    }
  }


  newRecord = () =>{
    let url = `http://localhost:3001/api/newRecord?user_id=${this.state.user_id}`
      if (this.state.user_id && this.state.user_id!==''){
        fetch(url, {
          method: 'get',
          headers: { 'Content-Type': 'application/json'}
          })
          .then(res => res.json())
          .then(json => this.getNewtRecord(json))
          .catch(function(e) {console.log(e)}) 
      }else {console.log(`user id is required`)}
  }

  getNewRecord = (record) => {
    this.setState({
    newRecord: record
    });
  }



  selectRecord =(record) => {
    console.log('in record select')
    this.setState({  
    update_record_id:record.record_id,
    update_before_lvl:record.before_lvl,
    update_after_lvl:record.after_lvl,
    update_emotion:record.emotion_text,
    update_emotion_id:record.emotion_id,
    update_skill:record.skill_title,
    update_skill_id:record.skill_id,
    update_si:record.si,
    update_sh:record.sh,
    update_date:record.date  

  },this.recordClicked(),console.log('after recordClicked')  )
  }

  recordClicked=()=>{ 
    console.log(this.state.update_record_id, this.state.update_before_lvl, this.state.update_date)
    this.setState({
      recordModalShow:true
    })
      
  }
  
  recordModalClose = () =>{
    this.setState({recordModalShow:false}, console.log('it should close?'))
  }



  setRecord_id=(record_id) => {
    console.log('app 215 sent',record_id)
    this.setState({record_id:record_id})
    console.log('app 217 state ',this.state.record_id)
  }


  getUserRecords = () => {
    if (this.state.user_id!==''){
      let url = `http://localhost:3001/api/userRecords?user_id=${this.state.user_id}`
      console.log(url)
      fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json()).then(json => this.setState({recordsList: json})).catch(function(e) {
        console.log(e); // “oh, no!”
      })
    }
  }

  searchByQuery = () => {
    
    let url = `http://localhost:3001/api/search/SH?user_id=${this.state.user_id}&keyword=${this.state.query}`

    console.log(`the url is ${url}`)
    fetch(url, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(json => this.setState({
        searchList: json
      }, console.log(this.state.searchList)))
      .catch(e => {
        console.log(`fetch failed`)
      })
    console.log(this.state.searchList)
  }











  updateRecord = (record_id, before_lvl, after_lvl) => {
    if(record_id!==''&& before_lvl!=='' && after_lvl!==''){
      let url = `http://localhost:3001/api/userRecords?record_id=${record_id}`
      let update = {
        before_lvl: parseInt(before_lvl),
        after_lvl: parseInt(after_lvl)
      }
      console.log('app 371 update',update)
      fetch(url, {
        method: 'put',
        body: JSON.stringify(update),
        headers: { 'Content-Type': 'application/json'}
      })
      // .then(r => r.json())
      // .then(json=>{this.setState({recent_record:json}); console.log(json); return json})
      .catch(function(e) {console.log(`something is wrong ${e}`)})
    }else{(console.log(`missing record_id or lvls`))}
  }

  addSkillToRecord = (skill_id) => {
      if (!this.state.recent_record.skill_id){
        let url = `http://localhost:3001/api/setSkill`
        let body = {
          record_id:this.state.recent_record.record_id,
          skill_id:this.state.skill_id
        }
        console.log(body)
        fetch(url, {
          method: 'put',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json'}
        })
        .then(r => r.json())
        // .then(json=>{ console.log(json); return json})
        .then(json=>{this.setState({recent_record:json.record}); console.log(json); return json})
        .catch(function(e) {console.log(`something is wrong ${e}`)})
      }else{
        this.makeNewRecordWithSkill();
      }
}

  makeNewRecordWithSkill  = () => {
    
    console.log('grid 40 newRecord')
 
    let url = `http://localhost:3001/api/recordwithskill`            
    let record = 
      {
      before_lvl:this.state.recent_record.before_lvl,
      emotion_id:this.state.recent_record.emotion_id,
      si:this.state.recent_record.si,
      sh:this.state.recent_record.sh,
      user_id:this.state.recent_record.user_id,
      date: Math.round((new Date()).getTime() / 1000),
      skill_id:this.state.skill_id
      };       
    fetch(url, {
      method: 'post',
      body: JSON.stringify(record),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(r => r.json())
    .then(json=>{this.setState({recent_record:json.record}); return json})
    .catch(function(e) {console.log(`something is wrong! : ${e}`); })           
  }

  addFullRecord = (skill_id,emotion_id, before_lvl, after_lvl,si,sh, date) => {
    let url = `http://localhost:3001/api/fullRecord`

    let newRecord = 

      {
      skill_id,
      emotion_id,
      before_lvl,
      after_lvl,
      si,
      sh,
      user_id:this.state.user_id,
      date,
      impact: before_lvl - after_lvl
      }

    fetch(url, {
      method: 'post',
      body: JSON.stringify(newRecord),
      headers: { 'Content-Type': 'application/json'}
      
      })
    .catch(function(e) {console.log(`something is wrong! : ${e}`); })

  }

  getUserSkills = () => {
    if (this.state.user_id && this.state.emotion){   
      let url = `http://localhost:3001/api/userSkills?user_id=${this.state.user_id}&emotion=${this.state.emotion}`

      fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(json => this.setState({userSkillsArray: json}))
        .catch(function(e) {
        console.log(e); // “oh, no!”
      })
    }else {console.log('user id and emotion required')}
  }

  getEmotionSkills = () => {
    let url = `http://localhost:3001/api/emotionSkills?emotion=${this.state.emotion}`
    fetch(url, {
      method: 'get',
      headers: { 'Content-Type': 'application/json'}
      })
      .then(res => res.json()).then(json => this.setState({emotionSkillsArray: json})).catch(function(e) {
      console.log(e); // “oh, no!”
    })
  }

  getSkillsGrid = () => {
    let idx;
    let target;
    // add user skills 
    while (this.state.skillsGridArray.length < 3) {
      if (this.state.skillsGridArray.length === 1) {
        this.state.skillsGridArray.push(this.state.pinata)
      } else if (this.state.userSkillsArray.length > 0) {
        idx = Math.floor((Math.random() * this.state.userSkillsArray.length))
        target = this.state.userSkillsArray[idx]
        this.state.skillsGridArray.push(target)
        if (this.state.emotionSkillsArray){
        this.state.emotionSkillsArray = this.state.emotionSkillsArray.filter(e => e.skill_id !== target.skill_id)};
        this.state.baseSkillsArray = this.state.baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
        this.state.userSkillsArray = this.state.userSkillsArray.filter(e => e.skill_id !== target.skill_id);

      } else {
        idx = Math.floor((Math.random() * this.state.baseSkillsArray.length))
        target = this.state.baseSkillsArray[idx]
        this.state.skillsGridArray.push(target)
        if (this.state.emotionSkillsArray){
          this.state.emotionSkillsArray = this.state.emotionSkillsArray.filter(e => e.skill_id !== target.skill_id)};
        this.state.emotionSkillsArray = this.state.emotionSkillsArray.filter(e => e.skill_id !== target.skill_id);
        this.state.baseSkillsArray = this.state.baseSkillsArray.filter(e => e.skill_id !== target.skill_id);
      }
    }

    // add emotion skills 

    while (this.state.skillsGridArray.length < 6) {
      if (this.state.emotionSkillsArray && this.state.emotionSkillsArray.length > 0) {
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

  }

  getEmotionId =(emotion) => {
    if (emotion!==''){
      let url = `http://localhost:3001/api/emotion_id?emotion_text=${emotion}`
      console.log(url)
      fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json()).then(json => {return json[0].emotion_id}).catch(function(e) {
        console.log(e); // “oh, no!”
      })
    } else {console.log('emotion required')}
  }


  skillClicked=(skill_id, skill_icon, skill_details, skill_title)=>{ 
    this.setState({
      skill_id:skill_id, 
      skill_icon:skill_icon, 
      skill_details:skill_details, 
      skill_title:skill_title, 
      modalShow: true}, 
      // recordModalShow
      ()=> {console.log(skill_icon)
    })
  }

 


  myCallback= (skillsGridArray,recent_record,criticalSkills, userSkillsArray, si, sh, before_lvl)=>{
    this.setState({skillsGridArray:skillsGridArray,recent_record:recent_record, criticalSkills:criticalSkills, userSkillsArray:userSkillsArray}, () =>{
      let grid;

        if (si){
            grid = '/suicideprevention'
        } else if (before_lvl>5){
            grid='/criticalgrid'
        } else {
            grid = '/grid'
        }
        window.location=grid;
    })

  }

  showModalCallback = () =>{
    this.setState({modalShow:false, skill_id:'', skill_details:'', skill_icon:''})
  }

  userIdCallback= (json)=>{
    this.setState({user_id:json.user_id})
  }


  makeNewUser =  (auth0_id, first_name, last_name) =>{
    let url = `http://localhost:3001/api/user`
    let body = {
      auth0_id, 
      first_name,
      last_name
    }

    fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json'}
      
    })
    .catch(function(e) {console.log(`something is wrong! : ${e}`); })
  }


  render() {

    let modalClose = () => console.log('app 469');
    return (
      
      <MuiThemeProvider>
        <Router>
        <div className='background'>
          <div className="App main">

          <Route path="/" exact render = { props =>(
            <React.Fragment >
             
              <Landing 
              {...this.props}{...props} 
              user_id ={this.props.user_id} 
              getUserInfo={this.getUserInfo}  
              userIdCallback= {this.userIdCallback}
              getPromptRecord = {this.getPromptRecord}
              />
          
            </React.Fragment>)} 
          />

          <Route path="/callback" exact 
            component={Callback}
          />
          
          <Route path="/" render = { props =>(
            <React.Fragment>    
              <Sidenavbar/>    
            </React.Fragment>)} 
          />

          <Route path="/secret" exact render = { props =>(
              this.props.auth.isAuthenticated() 
                ? <React.Fragment>
                    <header className="App-header"> 
                          Let's learn Auth: 
                    </header>                 
                    <Secret {...this.props}/>
                </React.Fragment>
                :
                <React.Fragment>
                    <header className="App-header"> 
                    Uh oh! You have to log in first! 
                    </header>               
                </React.Fragment>              
          )} />

         <Route path="/feeling" exact render = { props =>(
            this.props.auth.isAuthenticated() 
            ?
            <React.Fragment>
                
                <div style={{ paddingTop:'50px', margin:'0 auto'}}>
                  <AutoCompleteText 
                  myCallback = {this.myCallback} 
                  baseSkillsArray={this.state.baseSkillsArray}  
                  user_id= {this.state.user_id}/>   
                </div>
                
              </React.Fragment>
              :
              <React.Fragment>
                  <Landing 
                    {...this.props}{...props} 
                    user_id ={this.props.user_id} 
                    getUserInfo={this.getUserInfo}  
                    userIdCallback= {this.userIdCallback}
                    getPromptRecord = {this.getPromptRecord}
                  />
              </React.Fragment>
            )}
          />
          <Route exact path="/grid" exact render = { props =>(
            this.props.auth.isAuthenticated() 
            ? 
            <React.Fragment>
              <div >

                <SkillDetails 
                // updateRecord = {this.updateRecord}
                newRecord={this.newRecord}
                addSkillToRecord = {this.addSkillToRecord}
                recent_record = {this.state.recent_record}
                user_id={this.state.user_id} 
                skill_title={this.state.skill_title} 
                skill_icon = {this.state.skill_icon}
                skill_details={this.state.skill_details}  
                skill_id = {this.state.skill_id} 
                show={this.state.modalShow}
                showModalCallback={this.showModalCallback}
                {...this.props} 
                {...props}             
                />
              <SkillsGrid  
              user_id = {this.state.user_id}
              newRecord={this.newRecord}
              addSkillToRecord = {this.addSkillToRecord}
              skillClicked = {this.skillClicked} 
              userSkillsArray = {this.state.userSkillsArray} 
              emotionSkillsArray={this.state.emotionSkillsArray} 
              baseSkillsArray={this.state.baseSkillsArray} 
              skillsGridArray={this.state.skillsGridArray}
              setRecord_id = {this.setRecord_id}
              getRecentRecordWithoutSkill = {this.getRecentRecord}
              recent_record = {this.state.recent_record}
              show={this.state.modalShow}
                showModalCallback={this.showModalCallback}
                {...this.props} 
                {...props}       
              />                             
              </div>    
              </React.Fragment>
            : <React.Fragment>
                <Landing 
                  {...this.props}{...props} 
                  user_id ={this.props.user_id} 
                  getUserInfo={this.getUserInfo}  
                  userIdCallback= {this.userIdCallback}
                  getPromptRecord = {this.getPromptRecord}
                />
              </React.Fragment>           
          )} 
          />     
          <Route exact path="/criticalgrid" exact render = { props =>(
            this.props.auth.isAuthenticated() 
            ? 
            <React.Fragment>
              <div >

                <SkillDetails 
                  // updateRecord = {this.updateRecord}
                  newRecord={this.newRecord}
                  addSkillToRecord = {this.addSkillToRecord}
                  recent_record = {this.state.recent_record}
                  user_id={this.state.user_id} 
                  skill_title={this.state.skill_title} 
                  skill_icon = {this.state.skill_icon}
                  skill_details={this.state.skill_details}  
                  skill_id = {this.state.skill_id} 
                  show={this.state.modalShow}
                  showModalCallback={this.showModalCallback}
                  {...this.props} 
                  {...props}         
                />
                <CriticalSkillsGrid  
                  criticalSkills= {this.state.criticalSkills}
                  user_id = {this.state.user_id}
                  newRecord={this.newRecord}
                  addSkillToRecord = {this.addSkillToRecord}
                  skillClicked = {this.skillClicked} 
                  userSkillsArray = {this.state.userSkillsArray} 
                  emotionSkillsArray={this.state.emotionSkillsArray} 
                  baseSkillsArray={this.state.baseSkillsArray} 
                  skillsGridArray={this.state.skillsGridArray}
                  setRecord_id = {this.setRecord_id}
                  getRecentRecordWithoutSkill = {this.getRecentRecord}
                  recent_record = {this.state.recent_record}
                  show={this.state.modalShow}
                  showModalCallback={this.showModalCallback}
                  {...this.props} 
                  {...props}
                />                          
              </div>    
            </React.Fragment>
            : 
            <React.Fragment>
              <Landing 
                  {...this.props}{...props} 
                  user_id ={this.props.user_id} 
                  getUserInfo={this.getUserInfo}  
                  userIdCallback= {this.userIdCallback}
                  getPromptRecord = {this.getPromptRecord}
              />
            </React.Fragment>         
            )} 
            />

          <Route path="/suicideprevention" exact render = { props =>(
            !this.props.auth.isAuthenticated() 
              ? <React.Fragment>
                  <header className="App-header"> 
                        Let's learn Auth: 
                  </header>                 
                  <Secret {...this.props}/>
              </React.Fragment>
              :
              <React.Fragment>
                <SIResources />             
              </React.Fragment>              
          )} />


            <Route exact path="/finish" exact render = { props =>(
              this.props.auth.isAuthenticated() 
              ? <React.Fragment>
                <div >
                  <AfterLvlPrompt
                  updateRecord = {this.updateRecord}  
                  record_id = 'test' 
                  prompt_record = {this.state.prompt_record} 
                  />
                </div>
                </React.Fragment>
              : <React.Fragment>
                  <Landing 
                    {...this.props}{...props} 
                    user_id ={this.props.user_id} 
                    getUserInfo={this.getUserInfo}  
                    userIdCallback= {this.userIdCallback}
                    getPromptRecord = {this.getPromptRecord}
                  />
                </React.Fragment>
                )} 
              />
            <Route path="/records" render = { props =>(
              this.props.auth.isAuthenticated() 
              ? <React.Fragment>
                  <div >
                               
                  </div>
                </React.Fragment>
            :
                <React.Fragment>
                        <header className="App-header"> 
                        Uh oh! You have to log in first! 
                        </header>
                </React.Fragment>
            )} />

            <Route exact path="/records/list" exact render = { props =>(
              this.props.auth.isAuthenticated() 
              ? <React.Fragment>
                  <div >
                    <button onClick={this.getUserRecords}>get user Records</button>
                    <RecordsList recordsList = {this.state.recordsList}/>
                    </div>
                  </React.Fragment>
            :  <React.Fragment>
                  <Landing 
                    {...this.props}{...props} 
                    user_id ={this.props.user_id} 
                    getUserInfo={this.getUserInfo}  
                    userIdCallback= {this.userIdCallback}
                    getPromptRecord = {this.getPromptRecord}
                  />
                </React.Fragment>
            )} />

            <Route exact path="/records/add" exact render = { props =>(
              this.props.auth.isAuthenticated() 
              ? <React.Fragment> 
                  <FormBlank addFullRecord= {this.addFullRecord} getEmotionId={this.getEmotionId} />        
                </React.Fragment>
              : <React.Fragment>
                  <Landing 
                    {...this.props}{...props} 
                    user_id ={this.props.user_id} 
                    getUserInfo={this.getUserInfo}  
                    userIdCallback= {this.userIdCallback}
                    getPromptRecord = {this.getPromptRecord}
                  />
                </React.Fragment>
                
            )} />
            <Route path="/search" exact render = { props =>(
              this.props.auth.isAuthenticated() 
                ? <React.Fragment>
                    <header className="App-header"> 
                          We will be able to search soon  
                    </header>                 
                    
                </React.Fragment>
                :
                <React.Fragment>
                    <header className="App-header"> 
                    Uh oh! You have to log in first! 
                    </header>               
                </React.Fragment>              
            )} />

            <Route path="/chart" exact render = { props =>(
              this.props.auth.isAuthenticated() 
                ? <React.Fragment>
                  <Chart/>
                </React.Fragment>
                :
                <React.Fragment>
                    <header className="App-header"> 
                    Uh oh! You have to log in first! 
                    </header>               
                </React.Fragment>              
              )} />

            <Route exact path="/records/update" exact render = { props =>(
              this.props.auth.isAuthenticated() 
              ? <React.Fragment>
                   
                  <div >  
                  <UpdateModal 
                  recordModalShow={this.state.recordModalShow}
                  update_date={this.state.update_date}
                  update_record_id = {this.state.update_record_id}
                  update_before_lvl = {this.state.update_before_lvl}
                  update_after_lvl = {this.state.update_after_lvl}
                  update_emotion = {this.state.update_emotion}
                  update_skill = {this.state.update_skill}
                  update_si = {this.state.update_si}
                  update_sh = {this.state.update_sh}

                  recordClicked = {this.recordClicked}
                  recordModalShow={this.state.recordModalShow}
                  recordModalClose = {this.recordModalClose}
                  searchList = {this.state.searchList}
                  handleSelectRecord = { this.selectRecord.bind(this) } 
                  recordsList = {this.state.recordsList}
                  updateRecord = {this.updateRecord} 
     
                  />

                    {/* <Update 
                    updateRecord = {this.updateRecord}  
                    record_id = {this.state.record_id} 
                    before_lvl = {this.state.before_lvl} 
                    after_lvl = {this.state.after_lvl}
                    date = {this.state.date}
                    emotion= {this.state.emotion}
                    skill = {this.state.skill}
                    searchByquery={this.searchByQuery}
                    />
                    <hr/> */}
                    
                    <button onClick={this.getUserRecords}>get user Records</button>  
                    <RecordsListUpdate 
                    recordClicked = {this.recordClicked}
                    recordModalCloseCallback = {this.recordModalCloseCallback}
                    searchList = {this.state.searchList}
                    handleSelectRecord = { this.selectRecord.bind(this) } 
                    recordsList = {this.state.recordsList}
                    />   
                  </div>
                </React.Fragment>
              : <React.Fragment>
                  <Landing 
                    {...this.props}{...props} 
                    user_id ={this.props.user_id} 
                    getUserInfo={this.getUserInfo}  
                    userIdCallback= {this.userIdCallback}
                    getPromptRecord = {this.getPromptRecord}
                    />
                </React.Fragment>
              )} 
            />
          </div>
          </div>
        </Router>
      </MuiThemeProvider> 
    );
  }
}

export default App;
