import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Form }  from 'react-bootstrap';
import Moment from 'react-moment';
import Slider, { Range } from 'rc-slider';
import MySlider from './MySlider';


export default class Typeahead extends Component {
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
            
        }
    }
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
    }, this.props.setEmotionCallback(value))
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



