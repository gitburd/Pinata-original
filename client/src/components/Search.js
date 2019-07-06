import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Form}  from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import SkillsTypeahead from './SkillsTypeahead';
import EmotionsTypeahead from './EmotionsTypeahead';
import RecordUpdate from './RecordUpdate';
import MySlider from './MySlider';
import {Link} from 'react-router-dom';

 
export default class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      key:'Full List',
      emotion:'',
      emotion_id:'',
      skill:'',
      skill_id:'0',
      before_lvl:'5',
      after_lvl:'5',
      si:false,
      sh:false,
      message:'',
      startDate: new Date(),
      date:new Date().getTime() / 1000,
      showSearchBtn:false,
      showSearchForm:false
    }
    this.handleBefore_lvlChange = this.handleBefore_lvlChange.bind(this);
    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  onSelectRecord(record){
    this.props.handleSelectRecord(record)
  } 
  // componentDidMount() {

  //   if (this.props.key==='Action'){`
  //     this.props.searchByQuery('Skill', this.state.skill_id);
  //   }

  //   if (this.props.propkey==='Thoughts of suicide or self harm'){
  //       this.props.searchByQuery('critical', true);
  //   }
  //   if(this.props.propkey==='Feeling'){
  //     this.props.searchByQuery('Feeling', this.state.query)
  //   }
  //   if(this.props.propkey==='Impact'){
  //     this.props.searchByQuery('Impact', this.state.query)
  //   }
  //   if(this.props.propkey==='Unfinished'){
  //     this.props.searchByQuery('Unfinished', true)
  //   }
  //   if(this.props.propkey==='Full List'){
  //     this.props.searchByQuery('FullList', true)
  //   }
  // }
 
  handleKeyChange(key) {
    this.setState({showSearchBtn:false, key: key.target.value})
    if (key.target.value === 'Unfinished' || key.target.value === 'Full List' || key.target.value === 'Thoughts of suicide or self harm'){
      this.setState({showSearchBtn:true})
    }
    }

  handleQueryChange(query) {
    this.setState({showSearchBtn:true, query: query.target.value})

    }

  search=(e)=>{
    e.preventDefault();
   
    this.props.setKeyQueryCallback(this.state.key, this.state.query)
  
    if (this.state.key==='Action'){
        this.props.searchByQuery('Skill', this.state.skill_id);
    }

    if (this.state.key==='Thoughts of suicide or self harm'){
        this.props.searchByQuery('critical', true);
    }
    if(this.state.key==='Feeling'){
      this.props.searchByQuery('Feeling', this.state.query)
    }
    if(this.state.key==='Impact'){
      this.props.searchByQuery('Impact', this.state.query)
    }
    if(this.state.key==='Unfinished'){
      this.props.searchByQuery('Unfinished', true)
    }
    if(this.state.key==='Full List'){
      this.props.searchByQuery('FullList', true)
    }
  }

  
  setSkillCallback = (skill) =>{

    this.setState({skill})
    let url = `/api/skill_id?skill_title=${skill}`
    
    fetch(url, {
      method: 'get',
      headers: { 'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(json => this.setState({query:json[0].skill_id, skill_id:json[0].skill_id, showSearchBtn:true}))
      .catch(function(e) {
      console.log(e); // “oh, no!”
     })

  }



  setEmotionCallback = (emotion)=>{
 
    this.setState({query:emotion, showSearchBtn:true})
    
    
  //   let url = `/api/emotion_id?emotion_text=${emotion}`
  // console.log(url)
  // fetch(url, {
  //   method: 'get',
  //   headers: { 'Content-Type': 'application/json'}
  //   })
  //   .then(res => res.json()).then(json => this.setState({emotion_id:json[0].emotion_id})).catch(function(e) {
  //   console.log(e); // “oh, no!”
  //  })
 
  }
 
  handleBefore_lvlChange(impact) {
    // let fieldName = event.target.name;
    // let fleldVal = event.target.value;
    this.setState({query:impact, showSearchBtn:true})
  }


  render() {

    let searchList  = this.props.recordsList.map((record)=>(           
      <RecordUpdate 
        key={record.record_id} 
        record={record} 
        onSelectRecord = {this.onSelectRecord.bind(this)}
        currentRecord = {record}
      />         
    ))
     
    return (
      <div style={{width:'100%', paddingTop:'20px'}}>
      <h1>My Records  
      {/* <Link className="navbar-brand" to="/records/list">
      <sup>  <i class="far fa-list-alt" style={{ fontSize: '1.9em', paddingLeft:'4px' }} > <span style={{fontFamily: 'Roboto' }}>  </span> </i> </sup>
      </Link> */}
      <Link className="navbar-brand" to="/records/add">
           <i class="far fa-plus-square" style={{ fontSize: '1.8em', paddingLeft:'8px' }} > <span style={{fontFamily: 'Roboto' }}>  </span> </i> 
      </Link>

      <Link to="/records/search">
      <i className="navbar-brand" onClick = {() => {this.setState({showSearchForm:true})}} class="fas fa-search" style={{ fontSize: '.9em', padding:'8px' }} > <span style={{fontFamily: 'Roboto' }}>  </span> </i>
      </Link>
      </h1>
      <div className={this.state.showSearchForm ? '' : 'hidden'}>
      
        <div style={{margin:'0 auto'}}>
          <h3 style={{float:'left', paddingRight:'20px'}}><b>Search by : </b> </h3>

          <form >
            <div class="form-group">

              <Form.Control as="select"    style={{width:'60%', margin:'17px auto', float:'left'}} onChange={this.handleKeyChange.bind(this)}>    
                <option>Select one</option>
                <option>Feeling</option>
                <option>Action</option>
                <option>Impact</option>
                <option>Unfinished</option> 
                <option>Full List</option>
                <option>Thoughts of suicide or self harm</option>
              </Form.Control>
            </div>
          </form>
          
          <br/>

            <div className= {this.state.key==='Feeling'? '':'hidden'}>
              <EmotionsTypeahead 
                setEmotionCallback= {this.setEmotionCallback} 
                
              />
            </div>
          
            <div className= {this.state.key==='Action'? '':'hidden'}>
              <SkillsTypeahead  
                skillsTypeahead = {this.props.skillsTypeahead}
                setSkillCallback = {this.setSkillCallback}
              />
            </div>
            
            <div className= {this.state.key==='Impact'? '':'hidden'}>
              <MySlider handleBefore_lvlChange = {this.handleBefore_lvlChange}/>           
            </div>
          
          </div>

          <div className = {this.state.showSearchBtn ? '' : 'hidden'} >
            <br/>
            <button  style={{width:'30%', fontSize:'calc(12px + 1vmin)', margin:'5px auto'}} className='subBtn' onClick={this.search}>Search</button>              
          </div>
        </div>
        
        {searchList}
      </div>  
       
    )
  }
}

