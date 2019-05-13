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




export default class Slider extends Component {
  render() {
    return (
        <div>
            <Slider />
            <Range />
        </div>
    )
  }
}
