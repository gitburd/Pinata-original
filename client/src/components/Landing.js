import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Auth from '../Auth'
import pinata_big from './img/pinata_big.png';

import { MDBRow, MDBCol, MDBIcon } from "mdbreact";




export default class Landing extends Component {

  componentDidMount(){
    if (this.props.auth.isAuthenticated){
        let auth0_id = this.props.auth0_id;
        let first_name = this.props.first_name;
        let last_name = this.props.last_name;

        // app.js 440
        this.props.getUserInfo(auth0_id, first_name, last_name);
    }
  }
  render() {
       
    return (
      <div className="App ">
        <header className="App-header ">
          
            <h1 id="landing">Piñata!</h1>
            <img style={{"padding":"50px", "width":"25%"}} src={pinata_big} alt={'pinata'}/>

            {this.props.auth.isAuthenticated() 
          ? (
            <div>  
              <hr/>        
              <h2> Welcome, {this.props.first_name}  <MDBIcon icon="heart" /> </h2>   
              <div>
    
  </div>       
                <button style={{ cursor: 'pointer' }} onClick={()=>{
                  this.props.auth.logout()
                  window.location='/'             
                  }
                  }
                > logout</button>
            </div>
          ) 
          : (
            <div>
              <hr/>        
              <h2> Welcome, please login to continue.</h2>
              <button  style={{ cursor: 'pointer' }} onClick={this.props.auth.login}> login</button>
            </div>
          )}
        </header>
      </div>
    )
  }
}