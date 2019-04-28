import React, { Component } from 'react'import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, ButtonToolbar }  from 'react-bootstrap';

export default class AfterLvlPrompt extends Component {


//   setSkill =(e)=> {
//     e.preventDefault();
//     // let record_id = this.props.recentRecord[0].record_id
//     console.log(`this is a test`)
//     // this.props.updateRecord(this.state.record_id, this.state.skill_id);
//     console.log(this.props.skill_title)
//     console.log(this.props.skill_id)
//     // console.log(record_id)
//     console.log('from details', this.props.recentRecord[0].record_id)

//     this.props.addSkillToRecord(this.props.skill_id)


//     }


//     getRecentRecord = () => {

//       console.log(  `hello from line 10ish`)

//       let url = `http://localhost:3001/api/mostRecentRecord?user_id=2`
    
//       fetch(url, {
//         method: 'get',
//         headers: { 'Content-Type': 'application/json'}
//         })
//         .then(res => res.json()).then(json => this.setState({record_id:json.record_id})).catch(function(e) {console.log(e)})
    
//     }

      render() {
 


        return (
          <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='modal' 
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
             
              {this.props.skill_title}
             
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img  src={this.props.skill_icon} className="skill_details_icon" /> 
           
              <p>{this.props.skill_details}</p>

              
              
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={()=>this.props.onHide}>Close</Button>
            {/* <Button style={{margin:'10px'}} onClick = {this.setSkill}
              variant="outline-success">Try it</Button> */}




             
            </Modal.Footer>
          </Modal>
        );
      }
    }
    

