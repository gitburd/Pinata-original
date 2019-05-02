import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

import { ButtonToolbar, Button }  from 'react-bootstrap';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


import SkillDetails from './components/SkillDetails';


import AutoCompleteText from './components/AutoCompleteText';

import pinata_big from './components/img/pinata_big.png';
import SkillsGrid from './components/SkillsGrid';

import Record from './components/Record';
import RecordUpdate from './components/RecordUpdate';
import RecordsList from './components/RecordsList'
import RecordsListUpdate from './components/RecordsListUpdate'

import AddFullRecord from './components/AddFullRecord'
import AddRecordEmotion from './components/AddRecordEmotion'
import AddRecordSkill from './components/AddRecordSkill'


import FormBlank from './components/FormBlank';
import Update from './components/Update';
import FinishRecordPrompt from './components/FinishRecordPrompt';
import AfterLvlPrompt from './components/AfterLvlPrompt';
import Landing from './components/Landing'
import Secret from './components/Secret'
import Callback from './Callback'

import Navbar from './components/Navbar'
const http = require('http');
const fetch = require('node-fetch');

class App extends Component {
  state = { 
    test:'fail',
    modalShow: false,
    skillsList:[],
      user_id:'',
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
            "skill_details": "https://s3-us-west-2.amazonaws.com/pinata-images/takebreather.png",
            "skill_icon": "url to the image",
            "skill_id": 5
        },
        {
            "skill_title": "Punch a Pillow",
            "skill_details": "https://s3-us-west-2.amazonaws.com/pinata-images/punchpillow.png",
            "skill_icon": "url to the image",
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

  componentDidMount(){

  if(this.props.auth.isAuthenticated()
  && !this.state.user_id){
    this.setState({user_id:localStorage.getItem('user_id')})

  }
}



    selectRecord =(record) => {
      console.log(record)
      this.setState({  
      record_id:record.record_id,
      before_lvl:record.before_lvl,
      after_lvl:record.after_lvl,
      emotion:record.emotion_text,
      emotion_id:record.emotion_id,
      skill:record.skill_title,
      skill_id:record.skill_id,
      si:record.si,
      sh:record.sh,
      date:record.date  

    })
    }

    setRecord_id=(record_id) => {
      console.log('app 215 sent',record_id)
      this.setState({record_id:record_id})
      console.log('app 217 state ',this.state.record_id)
    }

    getRecentRecord = (record) => {
    this.setState({
      recentRecord: record
    })
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

    updateRecord = (record_id, before_lvl, after_lvl) => {

      if(record_id!==''&& before_lvl!=='' && after_lvl!==''){

        let url = `http://localhost:3001/api/userRecords?record_id=${record_id}`

        let update = {
          before_lvl: parseInt(before_lvl),
          after_lvl: parseInt(after_lvl)
        }

        console.log(update)

        fetch(url, {
          method: 'put',
          body: JSON.stringify(update),
          headers: { 'Content-Type': 'application/json'}
          })
          .catch(function(e) {console.log(`something is wrong ${e}`)})

      }
  }

    addSkillToRecord = (skill_id) => {

      if(skill_id !== ''){

        let url = `http://localhost:3001/api/setSkill`

        let body = {
          record_id:this.state.recentRecord[0].record_id,
          skill_id:this.state.skill_id
        }
        console.log(body)

        fetch(url, {
          method: 'put',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json'}
          })
          .catch(function(e) {console.log(`something is wrong ${e}`)})

    }
  }

    addFullRecord = (skill_id,emotion_id, before_lvl, after_lvl,si,sh) => {
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
        date:  "2099-02-20",
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

      if (this.state.user_id){
     
          let url = `http://localhost:3001/api/userSkills?id=${this.state.user_id}&emotion=${this.state.emotion}`

          fetch(url, {
            method: 'get',
            headers: { 'Content-Type': 'application/json'}
            })
            .then(res => res.json()).then(json => this.setState({userSkillsArray: json})).catch(function(e) {
            console.log(e); // “oh, no!”
          })
      }
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
      }

    }

  
    skillClicked=(skill_id, skill_icon, skill_details, skill_title)=>{ this.setState({skill_id:skill_id, skill_icon:skill_icon, skill_details:skill_details, skill_title:skill_title, modalShow: true})}

    myCallback= (skillsGridArray,record_id)=>{
      this.setState({skillsGridArray:skillsGridArray, record_id:record_id})
    }

    showModalCallback = () =>{
      this.setState({modalShow:false})
    }

   userIdCallback= (json)=>{
      this.setState({user_id:json.user_id})
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
                  this.setState({user_id:json[0].user_id}); localStorage.setItem( 'user_id', json[0].user_id )}
                else{
                  this.makeNewUser(auth0_id, first_name, last_name);
                  console.log('Welcome new user!')}
                  }) 
              
              // .then(json => {return json[0].emotion_id})
              .catch(function(e) {
              console.log(e); // “oh, no!”
            })
      }
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
          <div className="App main">

          <Route path="/" exact render = { props =>(
            <React.Fragment >
          <Landing {...this.props}{...props} user_id ={this.props.user_id} getUserInfo={this.getUserInfo}  userIdCallback= {this.userIdCallback}/>
          </React.Fragment>)} />

          <Route path="/callback" exact 
              component={Callback}/>

          <Route path="/" render = { props =>(
            <React.Fragment>
        
              <Navbar/>


          </React.Fragment>)} />

       

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
                             Let's learn Auth: 
                        </header>
                        
                        <p> Uh oh! You have to log in first!</p>
                    </React.Fragment>
                    
                )} />

          
          <Route path="/feeling" exact render = { props =>(
            this.props.auth.isAuthenticated() 
            ? <React.Fragment>
                <div >
                <div style={{width:'50%', paddingTop:'100px', margin:'0 auto'}}>
                  <AutoCompleteText myCallback = {this.myCallback} baseSkillsArray={this.state.baseSkillsArray}  user_id= {this.state.user_id}/>   
                </div>
                </div>
              </React.Fragment>
              :
              <React.Fragment>
                   <Landing {...this.props} {...props}/>
              </React.Fragment>
            )}

          />


          <Route exact path="/grid" exact render = { props =>(
            this.props.auth.isAuthenticated() 
            ? <React.Fragment>
              <div >

             
               

                <SkillDetails 
                updateRecord = {this.updateRecord}
                addSkillToRecord = {this.addSkillToRecord}
                recentRecord = {this.state.recentRecord}
                user_id={this.state.user_id} 
                skill_title={this.state.skill_title} 
                skill_icon = {this.state.skill_icon}
                skill_details={this.state.skill_details}  
                skill_id = {this.state.skill_id} 
                show={this.state.modalShow}
                showModalCallback={this.showModalCallback}
              
                />
       
               <SkillsGrid  
               user_id = {this.state.user_id}
               addSkillToRecord = {this.addSkillToRecord}
               skillClicked = {this.skillClicked} 
               userSkillsArray = {this.state.userSkillsArray} 
               emotionSkillsArray={this.state.emotionSkillsArray} 
               baseSkillsArray={this.state.baseSkillsArray} 
               skillsGridArray={this.state.skillsGridArray}
               setRecord_id = {this.setRecord_id}
               getRecentRecord = {this.getRecentRecord}
               recentRecord = {this.state.recentRecord}
               show={this.state.modalShow}
                showModalCallback={this.showModalCallback}
        
               />               
               
              </div>    
              </React.Fragment>
            : <React.Fragment>
               <Landing {...this.props} {...props}/>
              </React.Fragment>
            
          )} 
          />



            <Route exact path="/after" exact render = { props =>(
            <React.Fragment>
              <div >
                <AfterLvlPrompt
                  addSkillToRecord = {this.addSkillToRecord}
                  recentRecord = {this.state.recentRecord}
                  user_id={this.state.user_id} 
                  skill_title={this.state.skill_title} 
                  skill_icon = {this.state.skill_icon}
                  skill_details={this.state.skill_details}  
                  skill_id = {this.state.skill_id} 
                  show={this.state.modalShow} 
                  showModalCallback={this.showModalCallback}
                
                onHide={modalClose}/>

                {this.state.date} - {this.state.emotion} :  {this.state.skill}
                <br/>
                Before : {this.state.before_lvl}
                <br/>
                After : {this.state.after_lvl}
              </div>

            
              <div >              
                <Update updateRecord = {this.updateRecord}  record_id = {this.state.record_id} before_lvl = {this.state.before_lvl} />
                <hr/>
                <button onClick={this.getUserRecords}>get user Records</button>             
                <RecordsListUpdate handleSelectRecord = { this.selectRecord.bind(this) } recordsList = {this.state.recordsList}/>
                {/* <RecordsList recordsList = {this.state.recordsList}/> */}               
              </div>
            </React.Fragment>)} />


            <Route path="/records" render = { props =>(
               this.props.auth.isAuthenticated() 
               ? <React.Fragment>
                  <div >
                    <h1>Records</h1>
              
                  </div>
            </React.Fragment>
             :
             <React.Fragment>
                  <Landing {...this.props} {...props}/>
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
                  <Landing {...this.props} {...props}/>
                </React.Fragment>
            )} />

            <Route exact path="/records/add" exact render = { props =>(
              this.props.auth.isAuthenticated() 
              ? <React.Fragment> 
                  <FormBlank addFullRecord= {this.addFullRecord} getEmotionId={this.getEmotionId} />        
                </React.Fragment>
              : <React.Fragment>
                 <Landing {...this.props} {...props}/>
                </React.Fragment>
                
            )} />

            <Route exact path="/records/update" exact render = { props =>(
              this.props.auth.isAuthenticated() 
              ? <React.Fragment>
                  <div >
                  {this.state.date} - {this.state.emotion} :  {this.state.skill}
                  <br/>
                  Before : {this.state.before_lvl}
                  <br/>
                  After : {this.state.after_lvl}
                  </div>
                  <div >  
                  <Update updateRecord = {this.updateRecord}  record_id = {this.state.record_id} before_lvl = {this.state.before_lvl} />
                  <hr/>
                  <button onClick={this.getUserRecords}>get user Records</button>  
                  <RecordsListUpdate handleSelectRecord = { this.selectRecord.bind(this) } recordsList = {this.state.recordsList}/>   
                  </div>
                  </React.Fragment>
                : <React.Fragment>
                    <Landing {...this.props} {...props}/>
                  </React.Fragment>
            )} />

{/* finish record */}

            <Route path="/finish" exact render = { props =>(
              this.props.auth.isAuthenticated() 
              ? <React.Fragment>
                  <div >
                    <FinishRecordPrompt 
                      recentRecord = {this.state.recentRecord}
                      updateRecord = {this.updateRecord}/>
                  </div>
                  </React.Fragment>
              : <React.Fragment>
                 <Landing {...this.props} {...props}/>
                </React.Fragment>
              )} />

        </div>
        </Router>
        </MuiThemeProvider> 
    );
  }
}

export default App;
