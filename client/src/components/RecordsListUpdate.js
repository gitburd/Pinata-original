import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css';
import Record from './Record.js';
import RecordUpdate from './RecordUpdate';




 class RecordsListUpdate extends Component {
  constructor(props) {
    super(props);
  }

onSelectRecord(record){
    this.props.handleSelectRecord(record)
}

  render() {
  
  let recordsList = this.props.recordsList.map((record)=>(
         
    <RecordUpdate key={record.record_id} record={record} 
    onSelectRecord = {this.onSelectRecord.bind(this)}
    currentRecord = {record}
     />
     
  ))

  
        return (
          
          <div>
              
        {recordsList}
       
          </div>
          
          
        )
  }
}
  

     

// PropTypes
RecordsListUpdate.propTypes= {
  recordsList: PropTypes.array.isRequired
}


export default RecordsListUpdate 
