import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../App.css';
import { Form }  from 'react-bootstrap';

export default class FinishRecordPrompt extends Component {
    constructor(props) {
        super(props)
        this.state={
          after_lvl:''  
        }
        this.onSubmit= this.onSubmit.bind(this);
        this.handleAfter_lvlChange = this.handleAfter_lvlChange.bind(this);
        
        // console.log(this.props.state)
        }
            
            handleAfter_lvlChange(after_lvl) {
            this.setState({after_lvl: after_lvl.target.value})
            }

            onSubmit =(e)=> {
            e.preventDefault();
            console.log(this.props.state)

            let recentRecord = this.props.recentRecord[0]

            this.props.updateRecord(recentRecord.record_id, recentRecord.before_lvl, this.state.after_lvl);
        
            this.setState({
                emotion:'',
                emotion_id:'',
                skill:'',
                skill_id:'',
                before_lvl:'',
                after_lvl:'',
                date:'',
                si:false,
                sh:false,
                message:`Record updated.`
                });
        
            }
        
  
    render() {
    return (
      <div>
          <h2>Most Recent Record: </h2>
        {this.props.recentRecord[0].date} {this.props.recentRecord[0].emotion_text} {this.props.recentRecord[0].skill_title}


        <h2>How did it go?</h2>
        <div style={{width:'50%', margin:'0 auto'}}>
        <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>After Level</Form.Label>
    <Form.Control as="select"  
  onChange={this.handleAfter_lvlChange.bind(this)}>
    
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
       onClick={this.onSubmit.bind(this)} />
</Form>
</div>
      </div>
    )
  }
}
