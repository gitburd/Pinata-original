import React, { Component } from 'react'
import takebreather from './img/takebreather.png';


export default class Timer extends Component {



  render() {
    return (
      <div>
        <img style={{"padding":"50px","width":"50%" }} src={takebreather} alt={'take breather'}/>
        <h3>How long would you like to try this skill? </h3>

       
      </div>
    )
  }


}
