import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, ButtonToolbar }  from 'react-bootstrap';

export default class SkillDetails extends Component {
    render() {

      let getRecentRecord = () => {

        let url = `http://localhost:3001/api/mostRecentRecord?user_id=2`
      
        fetch(url, {
          method: 'get',
          headers: { 'Content-Type': 'application/json'}
          })
          .then(res => res.json()).then(json => console.log(json)).catch(function(e) {console.log(e)})
      
      }
      
        return (
          <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
              {this.props.skill_title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            
              {this.props.skill_icon}
              <p>{this.props.skill_details}</p>

              
              
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={()=>this.props.onHide}>Close</Button>
            <Button style={{margin:'10px'}} onClick = {this.getRecentRecord} 



            
            variant="outline-success">Try it</Button>
             
            </Modal.Footer>
          </Modal>
        );
      }
    }
    