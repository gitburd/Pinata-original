import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css';
import Record from './Record.js';
import RecordUpdate from './RecordUpdate';


class RecordsListUpdate extends Component {

  onSelectRecord(record){
    this.props.handleSelectRecord(record)
  }

  render() {
    let searchList  = this.props.searchList.map((record)=>(
            
      <RecordUpdate 
      key={record.record_id} 
      record={record} 
      onSelectRecord = {this.onSelectRecord.bind(this)}
      currentRecord = {record}
        />
        
    ))
    let recordsList = this.props.recordsList.map((record)=>(
            
      <RecordUpdate 
      key={record.record_id} record={record} 
      onSelectRecord = {this.onSelectRecord.bind(this)}
      currentRecord = {record}
        />
        
    ))
    return (
      <div>
        <button onClick={this.props.getUserRecords} style={{margin:'10px auto', fontSize:'20px',  width:'50%', alignItems:'center'}} className='subBtn' type="button">Get Records List
        </button>  
        <div className='recordsList'>
          {recordsList}
        </div>
      </div> 
    )
  }
}
  
// {searchList}
     

// PropTypes
RecordsListUpdate.propTypes= {
  recordsList: PropTypes.array.isRequired
}


export default RecordsListUpdate 
