var React = require('react')
var Router = require('react-router').Router
var Route = require('react-router').Route
var IndexRoute = require('react-router').IndexRoute
var hashHistory = require('react-router').hashHistory
var App = require('../components/App')
var Home = require('../components/Home')

var routes = (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
)

module.exports = routes
