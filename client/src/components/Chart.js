import React, { Component } from 'react'

import {Bar, Line, Pie, Scatter} from 'react-chartjs-2';

export default class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
            }
            
        }
        this.getChartData = this.getChartData.bind(this)
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
            // rgba(91,0,99,1)0%, rgba(37,1,83,1) 49%, rgba(1,35,143,1)
            {
                label:'before',
                data: beforeLvlSet,
                backgroundColor:'#7a085e',
                // backgroundColor:[
                // 'rgba(255, 99, 132, 0.6)',
                // 'rgba(54, 162, 235, 0.6)',
                // 'rgba(255, 206, 86, 0.6)',
                // 'rgba(75, 192, 192, 0.6)',
                // 'rgba(153, 102, 255, 0.6)',
                // 'rgba(255, 159, 64, 0.6)',
                // 'rgba(255, 99, 132, 0.6)'
                // ], 
                pointRadius:6,
                borderColor: 'rgba(0, 0, 0, 0.3)',
                showLine:false
            },

            {
                label:'after',
                data: afterLvlSet,
                
                backgroundColor:  'rgb(2, 116, 255)',
                // backgroundColor:[
                // 'rgba(255, 99, 132, 0.6)',
                // 'rgba(54, 162, 235, 0.6)',
                // 'rgba(255, 206, 86, 0.6)',
                // 'rgba(75, 192, 192, 0.6)',
                // 'rgba(153, 102, 255, 0.6)',
                // 'rgba(255, 159, 64, 0.6)',
                // 'rgba(255, 99, 132, 0.6)'
                // ], 
                pointRadius:6,
                borderColor: 'rgba(0, 0, 0, 0.3)',
                showLine:false
            }
                // options: {
                //     scales: {
                //         xAxes: [{
                //             type: 'linear',
                //             position: 'bottom'
                //         }]
                //     }
                // }
            

        ]     
    }
})
    

    console.log(beforeLvlSet)
    console.log(afterLvlSet)
 
}

    

    render() {
        
        return (
            <div style={{margin:'40px auto auto auto', padding:'30px', width:'70%', backgroundColor:'hsla(360, 100%, 100%, .9)'}} className="chart">
           <button onClick={this.getChartData.bind(this)}> data time! </button>
            <Line
              data={this.state.chartData}
              options={{
               
             
              }}
            />
    
          
          </div>
        )
    }
}
