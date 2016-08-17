var React = require('react')
var Search = require('./Search')
require('../styles/main.css')

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header>
          <nav className="navbar">
            <h1 className="navbar__title">Weather App</h1>
            <Search />
          </nav>
        </header>
        {this.props.children}
      </div>
    )
  }
})

module.exports = App
