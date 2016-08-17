var React = require('react')
var Router = require('react-router').Router
var Route = require('react-router').Route
var hashHistory = require('react-router').hashHistory
var Hello = require('../components/Hello')

var routes = (
    <Router history={hashHistory}>
      <Route path="/" component={Hello} />
    </Router>
)

module.exports = routes
