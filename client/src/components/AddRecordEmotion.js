import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default class AddRecord extends Component {
    constructor(props){
        super(props);
      this.emotions = ["Fear",
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
          emotion:"",
      };
    }
  
    onTextChanged = (e) =>{
      const value = e.target.value; 
      let suggestions = [];
      if (value.length >0){
          const regex = new RegExp(`^${value}`, 'i');
          suggestions = this.emotions.sort().filter(v => regex.test(v));
      }
          this.setState(() => ({suggestions, text:value}));
  
      }
    
  suggestionSelected(value){
      this.setState(() =>({
          text:value,
          suggeestion:[],
          emotion:value
      }))
  }
  
  
  
   
  
      renderSuggestions(){
          const {suggestions} = this.state;
          if (suggestions.length === 0 ){
              return null
          }
          return (
              <ul>
                  
                  {suggestions.map((emotion) => <li onClick={()=> 
                    this.suggestionSelected(emotion)
                    
                  }>{emotion}</li>)
                    
                    }
                  
              </ul>
          )
      }
    
    
      render() {
          const { text } = this.state
      return (
          <div className="main">
              <h1>Emotion</h1>
        <div className="AutoCompleteText">
          <input value={text} type="text" onChange={this.onTextChanged} />
          <ul>
              {this.renderSuggestions()}
          </ul>
          


        </div>
        
        </div>
      )
    }
  
   
  }
