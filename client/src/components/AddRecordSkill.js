import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default class AddRecord extends Component {
    constructor(props){
        super(props);
      this.skills = ["Fear",
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
          suggestions:[],
          text:"",
          skill:"",
      };
    }
  
    onTextChanged = (e) =>{
      const value = e.target.value; 
      let suggestions = [];
      if (value.length >0){
          const regex = new RegExp(`^${value}`, 'i');
          suggestions = this.skills.sort().filter(v => regex.test(v));
      }
          this.setState(() => ({suggestions, text:value}));
  
      }
    
  suggestionSelected(value){
      this.setState(() =>({
          text:value,
          suggeestion:[],
          skill:value
      }))
  }
  
  
  
   
  
      renderSuggestions(){
          const {suggestions} = this.state;
          if (suggestions.length === 0 ){
              return null
          }
          return (
              <ul>
                  
                  {suggestions.map((skill) => <li onClick={()=> 
                    this.suggestionSelected(skill)
                    
                  }>{skill}</li>)
                    
                    }
                  
              </ul>
          )
      }
    
    
      render() {
          const { text } = this.state
      return (
          <div className="main">
              <h1>Skill</h1>
        <div className="AutoCompleteText">
          <input value={text} type="text" onChange={this.onTextChanged} />
          <ul>
              {this.renderSuggestions()}
          </ul>
          


        </div>
        <p className='flagText'>Thoughs of suicide</p>
        </div>
      )
    }
  
   
  }
