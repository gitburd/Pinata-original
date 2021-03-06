import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../App.css';
import { Form, Button}  from 'react-bootstrap';
import Slider, { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';

 
export default class MySlider extends Component {
    state={
        
    }
    handleChange = sliderValue => {
        this.props.handleBefore_lvlChange(sliderValue)
        // this.setState({ sliderValue });
      };
  render() {
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    const Handle = Slider.Handle;
    
    const handle = (props) => {
      const { value, dragging, index, ...restProps } = props;
      return (
        <Tooltip
          prefixCls="rc-slider-tooltip"
          overlay={value}
          visible={dragging}
          placement="top"
          key={index}
        >
          <Handle value={value} {...restProps}  />
        </Tooltip>
      );
    };
    
    const wrapperStyle = { width: '70%', margin:'60px auto' };


    return (
       <div>
            <div style={wrapperStyle}>
                <Slider  onChange={this.handleChange} min={0} max={10} defaultValue={5} handle={handle} marks={{ 0:{style:{color:'white', fontSize: '18px',fontFamily: 'Roboto'}, label:'Mild'}, 10:{style:{color:'white', fontSize: '18px',fontFamily: 'Roboto'}, label:'Extreme'}}}/>
       
            </div>
            
            
        </div>
    )
  }
}
