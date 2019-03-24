import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import PropTypes from 'prop-types';

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
    "Depressed",
    "Music"
        
    ];
    this.state={
        suggestions:[],
        text:""
    };
  }

  onTextChanged = (e) =>{
    const value = e.target.value; 
    let suggestions = [];
    if (value.length >0){
        const regex = new RegExp(`^${value}`, 'i');
        suggestions = this.items.sort().filter(v => regex.test(v));
    }
        this.setState(() => ({suggestions, text:value}));

    }
  
suggestionSelected(value){
    this.setState(() =>({
        text:value,
        suggeestion:[],
        item:value
    }))
}



 

    renderSuggestions(){
        const {suggestions} = this.state;
        if (suggestions.length === 0 ){
            return null
        }
        return (
            <ul>
                <Link to={`/skills`}>
                {suggestions.map((item) => <li onClick={()=> 
                  this.suggestionSelected(item)
                  
                }>{item}</li>)
                  
                  }
                </Link>
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
      <p className='flagText'>Thoughs of suicide</p>
      </div>
    )
  }

 
}



