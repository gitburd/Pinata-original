import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, ButtonToolbar }  from 'react-bootstrap';

export default class SkillDetails extends Component {
    render() {
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
              <h4>{this.props.skill_details}</h4>
              <p>
                
                {this.props.skill_icon}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    }
    