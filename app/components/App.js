var React = require('react')
var PropTypes = React.PropTypes
var Navbar = require('./Navbar')
require('../styles/main.css')

var App = React.createClass({
  propTypes: {
    children: PropTypes.element.isRequired
  },
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
