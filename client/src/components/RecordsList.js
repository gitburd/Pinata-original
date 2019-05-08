import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css';
import Record from './Record.js';

class RecordsList extends Component {
    constructor(props) {
      super(props);
    }
  render() {
    let recordsList = this.props.recordsList.map((record)=>(         
      <Record key={record.record_id} record={record}  />
    ))
    return (     
      <div className='recordsList'>      
        {recordsList}
      </div>
   
    )
  }
}

RecordsList.propTypes= {
  recordsList: PropTypes.array.isRequired
}

export default RecordsList 
