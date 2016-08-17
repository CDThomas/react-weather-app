var React = require('react')
require('../main.css')

var App = React.createClass({
  render: function() {
    return (
      <header>
        <nav className="navbar">
          <h1 className="navbar__title">Weather App</h1>
        </nav>
      </header>
    )
  }
})

module.exports = App
