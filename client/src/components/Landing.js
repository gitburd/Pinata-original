import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Auth from '../Auth'
import pinata_big from './img/pinata_big.png';

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
            
                <h1>Piñata!</h1>

               <h2> Welcome, {this.props.first_name}  </h2> 
                <img style={{"padding":"50px", "width":"25%"}} src={pinata_big} alt={'pinata'}/>

                {this.props.auth.isAuthenticated() ? (
            <div>          
                    <hr/>    
                    <button onClick={()=>{
                        this.props.auth.logout()
                        window.location='/'             
                        }
                    }
                        > logout</button>
            </div>
          ) : (
              <div>
                    <h3>Please login to continue.</h3>
                    <hr/>
                <button onClick={this.props.auth.login}> login</button>
              </div>
      )}
                
             </header>

            <hr/>
            <div>
               
             do you want to see the <Link to ="/secret">secret</Link> page? 
           
            </div>

    
       </div>
      )
    }


}