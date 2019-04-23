import React, { Component } from 'react'

export default class UpdateRecord extends Component {
  state = {
    record_id:1,
    before_lvl:1,
    after_lvl:1,
    msg:''
    }

    onSubmit =(e)=> {
        e.preventDefault();
        this.props.updateRecord( this.state.record_id, this.state.before_lvl, this.state.after_lvl);


        this.setState({
          record_id:1,
          before_lvl:1,
          after_lvl:1,
          message:`Record Updated`
          });

      }
    
      onChange =(e)=> this.setState({[e.target.name]: e.target.value});

  render() {
    return (
        <div className="main">
        <form onSubmit={this.onSubmit} >
           <label>
             record id :
             </label>
             <input 
           type="text" 
           name="record_id" 
           style={{flex: '10', padding: '5px'}}
           placeholder="6" 
           value={this.state.record_id} 
           onChange={this.onChange}
           />
            <label>
             before lvl :
             </label>
             <input 
           type="text" 
           name="before_lvl" 
           style={{flex: '10', padding: '5px'}}
           placeholder="6" 
           value={this.state.before_lvl} 
           onChange={this.onChange}
           />
           
           <label>
            after lvl:
             </label>
             <input 
           type="text" 
           name="after_lvl" 
           style={{flex: '10', padding: '5px'}}
           placeholder="6" 
           value={this.state.after_lvl} 
           onChange={this.onChange}
           />
   
           
           <input type="submit" value="Submit" className="btn" style={{ margin:'20px'} }
        />
        </form>

        {this.state.msg}
       
         
        </div>
     
    )
  }
}
