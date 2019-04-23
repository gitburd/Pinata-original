import React, { Component } from 'react'

export default class AddFullRecord extends Component {
    state = {
    skill_id:1,
    emotion_id:1,
    before_lvl:1,
    after_lvl:1,
    si:false,
    sh:false, 
    msg:''
    }

    onSubmit =(e)=> {
        e.preventDefault();
        this.props.addFullRecord( this.state.skill_id, this.state.emotion_id, this.state.before_lvl, this.state.after_lvl, this.state.sh, this.state.si);


        this.setState({
            skill_id:1,
            emotion_id:1,
            before_lvl:1,
            after_lvl:1,
            si:false,
            sh:false,
            message:`Record added : ${this.state.emotion_id} & ${this.state.skill_id}`
          });

      }
    
      onChange =(e)=> this.setState({[e.target.name]: e.target.value});

  render() {
    return (
        <div>
        <form onSubmit={this.onSubmit} className="main">
           <label>
             Emotion :
             </label>
             <input 
           type="text" 
           name="emotion_id" 
           style={{flex: '10', padding: '5px'}}
           placeholder="6" 
           value={this.state.emotion_id} 
           onChange={this.onChange}
           />
            <label>
             Skill :
             </label>
             <input 
           type="text" 
           name="skill_id" 
           style={{flex: '10', padding: '5px'}}
           placeholder="6" 
           value={this.state.skill_id} 
           onChange={this.onChange}
           />


            <label>
             before :
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
            after:
             </label>
             <input 
           type="text" 
           name="after_lvl" 
           style={{flex: '10', padding: '5px'}}
           placeholder="6" 
           value={this.state.after_lvl} 
           onChange={this.onChange}
           />

               <label>
             Si:
             </label>
             <input 
           type="text" 
           name="si" 
           style={{flex: '10', padding: '5px'}}
           placeholder="true" 
           value={this.state.si} 
           onChange={this.onChange}
           />

<label>
             sh:
             </label>
             <input 
           type="text" 
           name="sh" 
           style={{flex: '10', padding: '5px'}}
           placeholder="true" 
           value={this.state.sh} 
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
