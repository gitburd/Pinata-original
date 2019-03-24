import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import GetAllSkills from './components/GetAllSkills.js';
import Skill from './components/Skill.js';
import SkillsList from './components/SkillsList.js';
import music from './components/img/music.png';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import ImageResults from './components/Image-Results/ImageResults';
import AutoCompleteText from './components/AutoCompleteText';
import Timer from './components/Timer';
import pinata_big from './components/img/pinata_big.png';
// import

// import withStyles from './components/Form/Field';
// import ComposedTextField from './components/Form/Field';


const http = require('http');
const fetch = require('node-fetch');

class App extends Component {
state ={ 
  skillsList:[],
  postFeeling:'',
  preFeeling:'',
  levelChange:'',
  item:''
  

  // resultSkills:[],
  // selectedSkills:null
}

getAllSkills = ()=>{
  fetch("http://localhost:3001/api/skills", {
    method: 'get',
    headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json()).then(json => this.setState({skillsList: json})).catch(function(e) {
    console.log(e); // “oh, no!”
   })
  
  }


  render() {
    return (
      
      <MuiThemeProvider>
        <Router>
          <div className="App">
          {/* <NavBar/> */}
          
          
  
          <Route path="/" exact render = { props =>(
            <React.Fragment>
          <header className="App-header">
  
          <h1>Piñata</h1>
          <Link to ='/assessment'>
          <img style={{"padding":"50px", "width":"35%"}} src={pinata_big} alt={'pinata'}/>
          </Link>

          </header>
          </React.Fragment>)} />

          <Route path="/assessment" exact render = { props =>(
            <React.Fragment>
              <div className="App-Component">
              <div className="App-Component">
              <AutoCompleteText/>
              </div>
              </div>
          </React.Fragment>)} />
  
          <Route exact path="/skills" exact render = { props =>(
            <React.Fragment>
              
            
              <Search/>
              {/* <NavBar/> */}
              {/* <GetAllSkills getAllSkills={this.getAllSkills}/> */}
              <SkillsList  skillsList= {this.state.skillsList} /> 
              <ImageResults />   
              
            </React.Fragment>)} />
            

{/* change this to /:skill/timer  */}
            <Route exact path="/timer" exact render = { props =>(
            <React.Fragment>
              
             <Timer/>
             <Search/>
              
            </React.Fragment>)} />
  
  
          {/* <Route path="/quotes/:id" exact component = {getQuoteById}/> */}
  
    
        </div>
        </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;
