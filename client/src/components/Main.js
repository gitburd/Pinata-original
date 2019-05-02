import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
export default class Main extends Component {
    render(){
        return (
            <div>
            <p className="App-intro">
            To get started...
            </p>

            <p>Hello, {this.props.name}</p>
          <Link to ='/secret'>secret area</Link>
          <hr/>
          Please login first 
          <hr/>
    {/* <button onClick={this.props.auth.login}>log in</button>  */}
            </div>
        )
    }
}