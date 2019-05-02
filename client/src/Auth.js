import history from './history';
import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';

// ...
export default class Auth {
  accessToken;
  idToken;
  expiresAt;
  
   
  auth0 = new auth0.WebAuth({
    domain: 'dev-g9bfudtd.auth0.com',
    clientID: '52nWjKf0RiI4Wlih3OzwLJSzjSmKPjju',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid profile'
  });
  constructor(){
    this.login = this.login.bind(this)
    this.state= {
      accessToken:localStorage.access_token,
      id_token: localStorage.id_token,
      expires_at:localStorage.expires_at
    }
    }
   
    login(){
      this.auth0.authorize();
    }
    
  
   
    // parses the result after authentication from URL hash
    handleAuthentication = (callback) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          callback();
        } else if (err) {
          callback();
          console.log(err);
        }
      });
    }
  
    // Sets user details in localStorage
    setSession = (authResult) => { 
      // Set the time that the access token will expire at
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
      this.state={
          accessToken:authResult.accessToken,
          id_token: authResult.idToken,
          expires_at:authResult.expiresAt
  
      }
      // navigate to the home route
      // history.replace('/');
    }
  
    // removes user details from localStorage
    logout = () => {
      // Clear access token and ID token from local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      localStorage.setItem('isLoggedIn', 'false');
      this.state={}
      
      // navigate to the home route
      // this.props.history.replace('/');
    }
  
    // checks if the user is authenticated
    isAuthenticated = () => {
        if(!this.state.expires_at){
            return false;
        }
      // Check whether the current time is past the
      // access token's expiry time
      let expiresAt = JSON.parse(this.state.expires_at);
      // console.log(expiresAt)
      return new Date().getTime() < expiresAt;
    }
  
    getProfile(){
        if (this.state.id_token){
            // console.log(this.state.id_token)
  
            return jwtDecode(this.state.id_token);
        } else {
            return {};
        }
    }
  }