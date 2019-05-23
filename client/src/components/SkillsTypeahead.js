import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Form }  from 'react-bootstrap';
import Moment from 'react-moment';
import Slider, { Range } from 'rc-slider';
import MySlider from './MySlider';


export default class SkillsTypeahead extends Component {

    constructor(props){
        super(props);
    //   this.items = this.props.skillsTypeahead
  
      
        this.state={
            suggestions:[],
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
                }
        
            ]
        }
    }

    onTextChanged = (e) =>{
        const value = e.target.value; 
        let suggestions = [];
        if (value.length >0){
            // const regex = new RegExp(`^${value}`, 'i');
            const regex = new RegExp(`${value}`, 'i');
            suggestions = this.props.skillsTypeahead.sort().filter(v => regex.test(v));
        }
            this.setState({suggestions, text:value});
    
    }
     
      suggestionSelected(value){
        console.log('line 106',value)
        console.log('line 107',this.state.skill_title)
        let the_id = this.state.baseSkillsArray[value]
        this.setState({
            skill_title:value,
            suggestions:[],
            text:value ,
            skill_id:the_id 
        }, this.props.setSkillCallback(value))
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
                <div style={{margin:'auto'}}>
                    
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


