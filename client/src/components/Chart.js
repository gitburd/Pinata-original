import React, { Component } from 'react'

import {Bar, Line, Pie, Scatter} from 'react-chartjs-2';

export default class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Boston'],
                datasets:[
                  {
                    label:'Population',
                    data: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 5
                    } , {
                        x: 3,
                        y: 9
                    }, 
                    {
                        x: 4,
                        y: 8
                    }, 
                    {
                        x: 5,
                        y: 4
                    }, 
                    {
                        x: 6,
                        y: 1
                    }
                    ],
                    backgroundColor:[
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(255, 159, 64, 0.6)',
                      'rgba(255, 99, 132, 0.6)'
                    ], 
                    pointRadius:6,
                    borderColor: 'rgba(0, 0, 0, 0.3)'
                  },
                  {
                    label:'cats',
                    data: [{
                        x: 0,
                        y: 6
                    }, {
                        x: 1,
                        y: 7
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 3
                    }, 
                    {
                        x: 4,
                        y: 8
                    }, 
                    {
                        x: 5,
                        y: 6
                    }, 
                    {
                        x: 6,
                        y: 2
                    }
                    ],
                    backgroundColor:[
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(255, 159, 64, 0.6)',
                      'rgba(255, 99, 132, 0.6)'
                    ], 
                    pointRadius:6,
                    borderColor: 'rgba(0, 0, 0, 0.3)'
                  }

                ],
                options: {
                    scales: {
                        xAxes: [{
                            type: 'linear',
                            position: 'bottom'
                        }]
                    }
                }
            }
            
        }
    }

    

    render() {
        
        return (
            <div style={{margin:'40px auto auto auto', padding:'30px', width:'70%', backgroundColor:'hsla(360, 100%, 100%, .9)'}} className="chart">
           
            <Scatter
              data={this.state.chartData}
              options={{
                title:{
                  display:this.props.displayTitle,
                  text:'Largest Cities In '+this.props.location,
                  fontSize:25
                },
                legend:{
                  display:this.props.displayLegend,
                  position:this.props.legendPosition
                }
              }}
            />
    
          
          </div>
        )
    }
}
