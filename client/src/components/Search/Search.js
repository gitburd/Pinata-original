import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../Image-Results/ImageResults';
import music from '../img/music.png';

import wringtowel from '../img/wringtowel.png';
import workout from '../img/workout.png';
import wildcard from '../img/wildcard.png';
import takewalk from '../img/takewalk.png';
import takebreather from '../img/takebreather.png';
import punchpillow from '../img/punchpillow.png';
import phonefriend from '../img/phonefriend.png';
import cookfood from '../img/cookfood.png';



 class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        // apiUrl:'https://localhost:3001/',
        images:[music,wringtowel,workout,wildcard,takewalk,takebreather,punchpillow,phonefriend,cookfood],
        skills:["music","art","pet","nature", "reading"]
    };

    
   
    // componentDidMount(){
  
    //   fetch("http:/localhost:3001/api/skills", {
    //     method: 'get',
    //     headers: { 'Content-Type': 'application/json'}
    //     })
    //     .then(res => res.json())
    //     .then(json => console.log(json))
    //     // .then(json => this.setState({images:json}))
    //     .catch(function(e) {
    //     console.log(e); // “oh, no!”
    //    })
    //   //  console.log(this.state.images)
    // }



    // onTextChange = (e) =>{
        
    //     console.log(this.state.images)
    //     this.setState({[e.target.name]:e.target.value}, () =>{
    //         fetch("http://localhost:3001/api/skills", {
    // method: 'get',
    // headers: { 'Content-Type': 'application/json'}
    // })
    // .then(res => res.json())
    // .then(json => {
    
//         this.setState({ images:[...json]})
    
//     })
//     .catch(function(e) {
//     console.log(e); // “oh, no!”
//    })
// })
//     }




  render() {
   
      console.log(this.state.images)
    return (
      <div>
     
        {/* {this.state.images.length>0 ? (<ImageResults images={this.state.images}/>): null} */}
      </div>
    )
  }
}



export default Search;