import React, { Component } from 'react'

import {Bar, Line, Pie, Scatter} from 'react-chartjs-2';
import SkillsTypeahead from './SkillsTypeahead';
import EmotionsTypeahead from './EmotionsTypeahead';
import { Form,OverlayTrigger,Tooltip}  from 'react-bootstrap';

export default class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
            },
            feelingChartData:{},
            actionChartData:{},
            showFeelingChart:false,
            showActionChart:false,
            showCriticalChart:false
        }
        this.getChartData = this.getChartData.bind(this)
        this.getFeelingData = this.getFeelingData.bind(this)
        this.getActionData = this.getActionData.bind(this)
        
        this.handleKeyChange = this.handleKeyChange.bind(this);
        this.handleQueryChange = this.handleQueryChange.bind(this);
    }

    // static defaultProps = {
    //     displayTitle:true,
    //     displayLegend: true,
    //     legendPosition:'right',
    //     location:'City',
    //     displayLabel:true
    //   }
    

    getChartData  = () => {
        let beforeLvlSet = [];
        let afterLvlSet = [];
        let emotionLabels = [];
        let skillLabels = [];

        for(let i=0; i < this.props.recordsList.length && beforeLvlSet.length < 10; i++){    
            beforeLvlSet.push({x:i, y:this.props.recordsList[i].before_lvl})
            afterLvlSet.push({x:i, y:this.props.recordsList[i].after_lvl})
            emotionLabels.push(this.props.recordsList[i].emotion_text)
            skillLabels.push(this.props.recordsList[i].skill_title) 
        }

        this.setState({beforeLvlSet, afterLvlSet,
            chartData:{
                labels: emotionLabels,
                datasets:[
                    {
                        label:'before',
                        data: beforeLvlSet,
                        backgroundColor:'#7a085e',
                        pointRadius:6,
                        borderColor: 'rgba(0, 0, 0, 0.3)',
                        showLine:false
                    },

                    {
                        label:'after',
                        data: afterLvlSet,
                        backgroundColor:  'rgb(2, 116, 255)',
                        pointRadius:6,
                        borderColor: 'rgba(0, 0, 0, 0.3)',
                        showLine:false
                    }
                ]     
            }
        })
    
    }

    makeFeelingChart = () => {
        let labelsArray=[];
        let data =  [];

        for (let i =0; i<this.state.searchList.length;i++){
            labelsArray.push(this.state.searchList[i].skill_title);
            data.push(this.state.searchList[i].impact);
        }
        this.setState({
            feelingChartData:{
                labels: labelsArray,
                datasets:[
                  {
                    label: this.state.searchList.length > 0 ? this.state.searchList[0].emotion_text : '',
                    data:data,
                    backgroundColor:' #55153B'                   
                  }
                ]
             }, 
            showFeelingChart:true,
            showActionChart:false,
            showCriticalChart:false
        })

    }
    getFeelingData = () => {
          
        let url = `http://localhost:3001/api/search/Feeling?user_id=${this.props.user_id}&keyword=${this.state.query}`
               
            console.log(`the url is ${url}`)
            fetch(url, {
                method: 'get',
                headers: {
                  'Content-Type': 'application/json'
                }
              })
            .then(res => res.json())
            // .then(json => console.log(json))
            .then(json => this.setState({
            searchList: json}, this.makeFeelingChart))
            .catch(e => { console.log(`fetch failed`)})    
        }

        makeActionChart = () => {
            console.log('hello from 127')
            let labelsArray=[];
            let data =  [];
    
            for (let i =0; i<this.state.searchList.length;i++){
                labelsArray.push(this.state.searchList[i].emotion_text);
                data.push(this.state.searchList[i].impact);
            }
            console.log(this.state.searchList)

            this.setState({
                actionChartData:{
                    labels: labelsArray,
                    datasets:[
                      {
                        label: this.state.searchList.length > 0 ? this.state.searchList[0].skill_title: '',
                        data:data,
                        backgroundColor:
                          ' #55153B'                       
                      }
                    ]
                 }, 
                 showActionChart:true,
                 showFeelingChart:false,
                 showCriticalChart:false
                
            })
    
        }
        getActionData = () => {
     
            let url = `http://localhost:3001/api/search/Skill?user_id=${this.props.user_id}&keyword=${this.state.skill_id}`
                   
                console.log(`the url is ${url}`)
                fetch(url, {
                    method: 'get',
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  })
                .then(res => res.json())
                // .then(json => console.log(json))
                .then(json => this.setState({
                searchList: json}, this.makeActionChart))
                .catch(e => { console.log(`fetch failed`)}) 
        }
        
        makeCriticalChart = () => {
            let labelsArray=[];
            let data =  [];
    
            for (let i =0; i<this.state.searchList.length;i++){
                labelsArray.push(this.state.searchList[i].skill_title);
                data.push(this.state.searchList[i].impact);
            }
            this.setState({
                criticalChartData:{
                    labels: labelsArray,
                    datasets:[
                      {
                        label: 'Thoughts of suicide or self harm',
                        data:data,
                        backgroundColor:' #55153B'                   
                      }
                    ]
                 }, 
                showCriticalChart:true,
                showFeelingChart:false,
                showActionChart:false
                
            })
    
        }
        getCriticalData = () => {
              
            let url = `http://localhost:3001/api/search/critical?user_id=${this.props.user_id}`
                   
                console.log(`the url is ${url}`)
                fetch(url, {
                    method: 'get',
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  })
                .then(res => res.json())
                // .then(json => console.log(json))
                .then(json => this.setState({
                searchList: json}, this.makeCriticalChart))
                .catch(e => { console.log(`fetch failed`)})    
            }

    handleKeyChange(key) {
    this.setState({key: key.target.value})
    }

    handleQueryChange(query) {
      this.setState({query: query.target.value})
      }

  search=(e)=>{
    e.preventDefault();
  
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
    let url = `http://localhost:3001/api/skill_id?skill_title=${skill}`
    
    fetch(url, {
      method: 'get',
      headers: { 'Content-Type': 'application/json'}
      })
      .then(res => res.json()).then(json => this.setState({skill_id:json[0].skill_id})).catch(function(e) {
      console.log(e); // “oh, no!”
     })

  }
  onSelectRecord(record){
    this.props.handleSelectRecord(record)
  } 


  setEmotionCallback = (emotion)=>{
 
    this.setState({query:emotion})
    
    
    let url = `http://localhost:3001/api/emotion_id?emotion_text=${emotion}`
  console.log(url)
  fetch(url, {
    method: 'get',
    headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json()).then(json => this.setState({emotion_id:json[0].emotion_id})).catch(function(e) {
    console.log(e); // “oh, no!”
   })
 
  }

  handleBefore_lvlChange(impact) {
    // let fieldName = event.target.name;
    // let fleldVal = event.target.value;
    this.setState({query:impact})
  }


    render() {
        let myData; 
        if (this.state.showFeelingChart) myData = this.state.feelingChartData;
        if (this.state.showActionChart) myData = this.state.actionChartData;
        if (this.state.showCriticalChart) myData = this.state.criticalChartData;
        
        let getData;
        if(this.state.key==='Feeling') getData = this.getFeelingData.bind(this)
        if(this.state.key==='Action') getData = this.getActionData.bind(this)
        if(this.state.key==='Thoughts of suicide or self harm') getData = this.getCriticalData.bind(this)
        
        return (
            <div style={{width:'100%'}}>
                
                <h1>Search Records </h1>
                
                <div style={{margin:'auto', width:'40%'}}>
          <form>

            <div class="form-group">
              <label> </label>
              <Form.Control as="select" onChange={this.handleKeyChange.bind(this)}>    
                <option>Select one</option>
                <option>Full List</option>
                <option>Feeling</option>
                <option>Action</option>
                <option>Thoughts of suicide or self harm</option>
              </Form.Control>
            </div>

            <div style={{padding:'10px'}} className= {this.state.key==='Feeling'? '':'hidden'}>
              <EmotionsTypeahead 
              emotionsTypeahead = {this.props.emotionsTypeahead}
              setEmotionCallback= {this.setEmotionCallback} />
            </div>
         
            <div style={{padding:'10px'}} className= {this.state.key==='Action'? '':'hidden'}>
              <SkillsTypeahead  
                skillsTypeahead = {this.props.skillsTypeahead}
                setSkillCallback = {this.setSkillCallback}
              />
            </div>
          </form>
          <button  style={{width:'40%', fontSize:'calc(12px + 1vmin)', margin:'10px auto'}} className='subBtn' onClick={this.search}>Search</button>              
        </div>
    
                {/* <div style={{margin:'40px auto auto auto', padding:'30px', width:'70%', backgroundColor:'hsla(360, 100%, 100%, .9)'}} className="chart">
                    <button onClick={this.getChartData.bind(this)}> data time! </button> */}
                    {/* <Line
                    data={this.state.chartData}
                    options={{
                    }}
                    /> */}
            
                {/* </div> */}
                <div style={{margin:'40px auto auto auto', padding:'30px', width:'70%', backgroundColor:'hsla(360, 100%, 100%, .9)'}} className="chart">
                    <button onClick={getData}> data time! </button>
                    <Bar
                        data={myData}
                        options={{
                    
                        }}
                    />
                
                </div>
            </div>
        )
    }
}
