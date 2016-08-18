var React = require('react')
var Navbar = require('./Navbar')
require('../styles/main.css')

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header>
          <Navbar />
        </header>
        {this.props.children}
      </div>
    )
  }
})

module.exports = App
