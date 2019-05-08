import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import suicideprevention from './img/suicideprevention.jpg';
import crisistextline from './img/crisistextline.jpg';
import trevorproject from './img/trevorproject.png';
import towriteloveonherarms from './img/towriteloveonherarms.jpeg';
import themighty from './img/themighty.png';
import afsp from './img/afsp.png';


export default class SIResources extends Component {
  render() {
    return (
      <div>
          <Link to="/criticalgrid">
                        <button type="button">
                            Skip these
                        </button>
                </Link>
        
        <a href="https://suicidepreventionlifeline.org/" target="_blank">
          <img style={{"padding":"30px", "width":"40%"}} src={suicideprevention} alt={'pinata'}/>
        </a>
        <br/>
        <a href="https://www.crisistextline.org/" target="_blank">
          <img style={{"padding":"30px", "width":"40%"}} src={crisistextline} alt={'pinata'}/>
        </a>
        <br/>
        <a href="https://www.thetrevorproject.org/#sm.000cl30ii1bkdd6gr4w2fz7wy91p9" target="_blank">
          <img style={{"padding":"30px", "width":"40%"}} src={trevorproject} alt={'pinata'}/>
        </a>


        <br/>
        <a href="https://afsp.org/find-support/" target="_blank">
          <img style={{"padding":"30px", "width":"40%"}} src={afsp} alt={'pinata'}/>
        </a>
        <br/>
        <a href="https://twloha.com/find-help/" target="_blank">
          <img style={{"padding":"30px", "width":"40%"}} src={towriteloveonherarms} alt={'pinata'}/>
        </a>


        <br/>

        <p>For When Your Only Thought Is Suicide and and many other articels and resources.</p> 
        <a href="https://themighty.com/suicide-prevention-resources/" target="_blank">
          <img style={{"padding":"30px", "width":"40%"}} src={themighty} alt={'pinata'}/>
        </a>
      


      </div>
    )
  }
}
