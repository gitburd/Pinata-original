import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Form }  from 'react-bootstrap';

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
    "Depressed"
        
    ];
    this.state={
        emotions:[],
        text:"",
        record_id:'',
        emotion_id:'',
        emotion_text:'',
        before_lvl:'',
        si:'',
        sh:''
    };

    this.onSubmit= this.onSubmit.bind(this);
    this.handleBefore_lvlChange = this.handleBefore_lvlChange.bind(this);
    
    // end of state
    }
        
        handleBefore_lvlChange(before_lvl) {
        this.setState({before_lvl: before_lvl.target.value})
        }

        onSubmit =(e)=> {
        e.preventDefault();
        // console.log(this.props.state)
        // this.props.updateRecord(this.state.record_id, this.state.before_lvl, this.state.before_lvl);
    



        this.setState({
            
        //     before_lvl:'',
        //     date:'',
        //     si:false,
        //     sh:false,
            message:`Record updated.`
            });
    
        }


  onTextChanged = (e) =>{
    const value = e.target.value; 
    let emotions = [];
    if (value.length >0){
        const regex = new RegExp(`^${value}`, 'i');
        emotions = this.items.sort().filter(v => regex.test(v));
    }
        this.setState(() => ({emotions, text:value}));

    }
  
emotionSelected(value){
    
    this.setState(() =>({
        emotion_text:value,
        emotions:[],
        text:value
    }))
    this.getEmotionSkills();
}


addRecord  = () => {

    let url = `http://localhost:3001/api/record`

    let newRecord = 
  
      {
      before_lvl:this.state.before_lvl,
      si:this.state.si,
      sh:this.state.sh,
      user_id:this.props.user_id,
      date:  "9999-99-01"
      }
  
    fetch(url, {
      method: 'post',
      body: JSON.stringify(newRecord),
      headers: { 'Content-Type': 'application/json'}
      
      })
    .catch(function(e) {console.log(`something is wrong! : ${e}`); })
  
}

getEmotionSkills = () => {
let url = `http://localhost:3001/api/emotionSkills?emotion=${this.state.emotion_text}`
console.log(url)
fetch(url, {
method: 'get',
headers: { 'Content-Type': 'application/json'}
})
.then(res => res.json()).then(json => this.setState({emotionSkillsArray: json})).catch(function(e) {
console.log(e); // “oh, no!”
})

}

 

    renderEmotions(){
        const {emotions} = this.state;
        if (emotions.length === 0 ){
            return null
        }
        return (
            <div>
            <ul>
                
                {emotions.map((item) => <li onClick={()=> 
                  this.emotionSelected(item)
                  
                }>{item}</li>)
                  
                  }
               
            </ul>

           
            </div>
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
            {this.renderEmotions()}
        </ul>
        
      </div>
      <br/>

      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Before Level</Form.Label>
    <Form.Control as="select"  defaultValue={this.state.before_lvl}
  onChange={this.handleBefore_lvlChange.bind(this)}
  >
    
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
     
    </Form.Control>
  </Form.Group>
 
  <input type="submit" value="Submit" className="btn" style={{ margin:'20px'} }
        />
</Form>

      <button onClick={this.getEmotionSkills}>get emotion skills</button>

      <Link to={`/grid`}> Click me!</Link>

      {/* <p className='flagText'>Thoughs of suicide</p> */}
      </div>
    )
  }

 
}



