import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {GridList, GridTile} from 'material-ui/GridList';

import { Link } from 'react-router-dom'
import { IconButton } from 'material-ui';
import wringtowel from '../img/wringtowel.png';
import workout from '../img/workout.png';
import wildcard from '../img/wildcard.png';
import takewalk from '../img/takewalk.png';
import takebreather from '../img/takebreather.png';
import punchpillow from '../img/punchpillow.png';
import phonefriend from '../img/phonefriend.png';
import cookfood from '../img/cookfood.png';
import playvideogames from '../img/playvideogames.png';
import pinata_small from '../img/pinata_big.png';



class ImageResults extends Component {

  getStyle= ()=> {
    return {
    padding: '20px',
    maxheight:'50 px',
    maxWidth: '50 px'
    }
}

  renderImages() {
   

    let images = [punchpillow,takebreather, wringtowel,takewalk ,wildcard,workout,playvideogames,cookfood,phonefriend];
  let imageTitle= ['Punch Pillow', 'Take Breather','Wring Towel','Take Walk' ,'Wild Card','Workout','Play Video Games','Cook Food','Phone Friend'];
    
   let imagesTiles = [];
   for (let i=0; i<images.length;i++){
      imagesTiles.push(
        
        <GridTile
        key= {images[i]}
        title={imageTitle[i]}
        >

          <img style={{"padding":"50px" }} src={images[i]} alt={imageTitle[i]}/>
          
        </GridTile>)
    }
    return imagesTiles;
  }

render(){
  
  let imageListContent =(
    <GridList cols={3}>

    {this.renderImages()}
  </GridList>

  )

    return (

      <div style={{"margin":"75px"}}>
        {imageListContent }
        <Link to='/timer'>Try it out</Link>
        
      </div>

    )
  }
}



ImageResults.propTypes={
    images: PropTypes.array.isRequired
}
export default ImageResults; 