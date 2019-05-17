import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../App.css';
import { Form, Button, Card, CardDeck}  from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MySlider from './MySlider';
import AfterLvlSlider from './AfterLvlSlider';
import EmotionsTypeahead from './EmotionsTypeahead'
import SkillsTypeahead from './SkillsTypeahead'
import {Link} from 'react-router-dom';
 

export default class MakeCustomSkill extends Component {
  constructor(){
    super();
    this.state = { 
      skill_title:'',
      skill_details:'',
      skill_icon:'https://s3-us-west-2.amazonaws.com/pinata-images/icons/unicorn.png'
      
      // https://s3-us-west-2.amazonaws.com/pinata-images/icons/compassion.png
    }
  }

  updateSkill_title(e){
    this.setState({skill_title:e.target.value.substr(0,13)})
  }

  updateSkill_details(e){
    this.setState({skill_details:e.target.value.substr(0,50)})
  }

    onSubmit =(e)=> { 
        e.preventDefault();
        this.makeNewCustomSkill(this.state.skill_title, this.state.skill_icon, this.state.skill_details, this.props.user_id);
      }
    

      makeNewCustomSkill  = (skill_title,skill_icon,skill_details, user_id) => { 
        let url = `http://localhost:3001/api/customskills`            
        let skill = 
          {
          skill_title,
          skill_details,
          skill_icon,
          is_heart:true,
          user_id
          };       
        fetch(url, {
          method: 'post',
          body: JSON.stringify(skill),
          headers: { 'Content-Type': 'application/json'}
        })
        .then(r => r.json())
        // .then(json=>{this.setState({recent_record:json.record}); return json})
        .catch(function(e) {console.log(`something is wrong! : ${e}`); })           
      }
    
      setSkillIcon = (e,skill_icon)=>{
        e.preventDefault();
        this.setState({skill_icon})
      }

    
  render() {
            
    return (
      <div  >

        <button style={{background:'transparent', border:'none', cursor:'auto'}}> <h1 >Make a new Action</h1></button>
        
        <Link className="navbar-brand" to="/custom">
          <i class="far fa-arrow-alt-circle-left" style={{ fontSize: '2em', padding:'2px' }} ></i>
          </Link>
        <h3> Action Name </h3>
        <input style={{margin:'20px'}} type='text' value={this.state.skill_title} onChange={this.updateSkill_title.bind(this)}></input>
        <h3> Action Description </h3>
        <input style={{margin:'20px auto', width:'75%'}} type='textarea' 
        value={this.state.skill_details}
        multiline = {true}
        numberOfLines={5}
        onChange={this.updateSkill_details.bind(this)}></input>       
       <h3> Choose an image </h3>
       <div style={{padding:'5% 25%'}}>
        <CardDeck>
          <Card className = 'customSkillIcon'>
            <Card.Img  variant="top" src="https://s3-us-west-2.amazonaws.com/pinata-images/icons/maze.png" onClick={ e =>this.setSkillIcon(e,"https://s3-us-west-2.amazonaws.com/pinata-images/icons/maze.png")}/>
          </Card>
          <Card className = 'customSkillIcon'>
            <Card.Img  variant="top" src="https://s3-us-west-2.amazonaws.com/pinata-images/icons/chess.png"
            onClick={ e =>this.setSkillIcon(e,"https://s3-us-west-2.amazonaws.com/pinata-images/icons/chess.png")} />
          </Card>
          <Card className = 'customSkillIcon'>
            <Card.Img  variant="top" src="https://s3-us-west-2.amazonaws.com/pinata-images/icons/heart.png"
            onClick={ e =>this.setSkillIcon(e, "https://s3-us-west-2.amazonaws.com/pinata-images/icons/heart.png")}/>
          </Card>
          <Card className = 'customSkillIcon'>
            <Card.Img  variant="top" src="https://s3-us-west-2.amazonaws.com/pinata-images/icons/unicorn.png" />
          </Card>

        </CardDeck>;
        <CardDeck>
          <Card className = 'customSkillIcon'>
            <Card.Img variant="top" src="https://s3-us-west-2.amazonaws.com/pinata-images/icons/blossom.png" 
             onClick={ e =>this.setSkillIcon(e, "https://s3-us-west-2.amazonaws.com/pinata-images/icons/blossom.png")}/>
          </Card>
          <Card className = 'customSkillIcon'>
            <Card.Img variant="top" src="https://s3-us-west-2.amazonaws.com/pinata-images/icons/rocket.png"
              onClick={ e =>this.setSkillIcon(e, "https://s3-us-west-2.amazonaws.com/pinata-images/icons/rocket.png")}/>
          </Card>
          <Card className = 'customSkillIcon'>
            <Card.Img  variant="top" src="https://s3-us-west-2.amazonaws.com/pinata-images/icons/triskele.png" 
             onClick={ e =>this.setSkillIcon(e, "https://s3-us-west-2.amazonaws.com/pinata-images/icons/triskele.png")}/>
          </Card>
          <Card className = 'customSkillIcon'>
            <Card.Img variant="top" src="https://s3-us-west-2.amazonaws.com/pinata-images/icons/target.png" 
            onClick={ e =>this.setSkillIcon(e, "https://s3-us-west-2.amazonaws.com/pinata-images/icons/target.png")}/>
          </Card>
            
          </CardDeck>
        </div>
        <button  style={{margin:'0px auto 20px auto', fontSize:'20px',  width:'50%'}} className='subBtn' type="button" onClick = {this.onSubmit.bind(this)} >Create Action
        </button>  
      </div>         
    )
  }
}