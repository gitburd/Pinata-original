import {
    createStore,
    applyMiddleware
  } from 'redux';
  import {
    combineForms,
    createForms // optional
  } from 'react-redux-form';
  
  const initialUserState = {
    firstName: '',
    lastName: ''
  };
  
  // If you want your entire store to have the form state...
  const store = createStore(combineForms({
    user: initialUserState,
  }));
  
  
  export default store;