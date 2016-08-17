var React = require('react')
var ReactDOM = require('react-dom')
var routes = require('./config/routes')

// Mount the app to the dom using the specified tag
ReactDOM.render(
  routes,
  document.getElementById('app')
)
