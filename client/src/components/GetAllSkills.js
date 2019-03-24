import React, { Component } from 'react';


export class GetAllSkills extends Component {
    
      onSubmit =(e)=> {
        e.preventDefault();
        this.props.getAllSkills();
       
      }
    
      // onChange =(e)=> this.setState({[e.target.name]: e.target.value});
    
      render() {
        return(
        <button onClick={this.props.getAllSkills.bind(this)} >Get!</button>
      
        )}
    }

export default GetAllSkills