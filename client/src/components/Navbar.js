import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
import auth0Client from '../Auth';


export default class Navbar extends Component {
 
  
    render() {
       
      return (
        <div>
         

          <div  className="sidenav">

            
            <Link className="navbar-brand" to="/"> Home</Link>
            <Link className="navbar-brand" to="/feeling">Feeling </Link>
            <Link className="navbar-brand" to="/records/list">Records </Link>
            <Link className="navbar-brand" to="/records/add">New Record</Link>
            <Link className="navbar-brand" to="/records/update">Update Records</Link>
            <Link className="navbar-brand" to="/after"> Finish Record</Link>
            <Link className="navbar-brand" to="/records/search">Search Records</Link>

          </div>


        </div>



    
  )};
}

