import React, { Component } from 'react'
import Auth from './Auth';

export default class Callback extends Component {
  componentDidMount(){
    const auth = new Auth();
    auth.handleAuthentication(()=>{
      // this.props.history.push('/')
      window.location='/';
    });
  }
  render() {
    return (
      <div>
        loading....
      </div>
    )
  }
}