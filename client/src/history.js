const history = require('history');

export default history.createBrowserHistory({
  basename: process.env.NODE_ENV === 'development' ? '' : '/reactivesearch-auth0-example'
});