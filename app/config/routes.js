var React = require('react')
var Router = require('react-router').Router
var Route = require('react-router').Route
var hashHistory = require('react-router').hashHistory
var App = require('../components/App')

var routes = (
    <Router history={hashHistory}>
      <Route path="/" component={App} />
    </Router>
)

module.exports = routes
