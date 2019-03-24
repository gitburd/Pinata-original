import React, { Component } from 'react';


export class GetSkill extends Component {
    state = {
        id:''
      }
    
      onSubmit =(e)=> {
        e.preventDefault();
        this.props.getQuoteById(this.state.id);
       
      }
    
      onChange =(e)=> this.setState({[e.target.name]: e.target.value});
    
      render() {
        return (
          <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
             <label>
               Which quote would you like?:
               <input 
             type="text" 
             name="id" 
             style={{flex: '10', padding: '5px'}}
             placeholder="Quote Id" 
             value={this.state.id} 
             onChange={this.onChange}
             />   
             </label>  

             <input type="submit" value="Submit" className="btn" style={{flex: '1'}}
          />
          </form>
          
        )
      }
    }

export default GetSkill