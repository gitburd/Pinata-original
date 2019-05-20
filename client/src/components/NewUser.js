import React, { Component } from 'react'

import { Provider } from 'react-redux';

// We'll create this in step 3.
import store from './store.js';

// We'll create this in step 4.
import UserForm from './components/UserForm.js';

export default class NewUser extends Component {
  render() {
    return (
        <Provider store={ store }>
            <UserForm />
        </Provider>      
    
    )
  }
}
