import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Auth from './Auth'
// import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

const auth = new Auth();
let state = {};

window.setState = (changes) => {
    state = Object.assign({}, state, changes);
    ReactDOM.render(<App {...state}/>, document.getElementById('root'));

};

let firstname = auth.getProfile().given_name || 'you';
let lastname = auth.getProfile().family_name || '';
let auth0_id = auth.getProfile().sub || '';
let user_id = '';




let initialState = {
    first_name: firstname,
    last_name: lastname,
    user_id,
    auth0_id,
    auth
}

window.setState(initialState)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
