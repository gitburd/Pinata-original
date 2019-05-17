import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth from './Auth'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const auth = new Auth()

  ReactDOM.render(<App auth={auth}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('Fake Test', () => {
  expect(true).toBeTruthy();
});

// test('gets user id ', ()=>{

  
//   expect(true).toBeTruthy();
// })

 