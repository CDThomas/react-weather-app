var React = require('react')
require('../main.css')

var App = React.createClass({
  render: function() {
    return (
      <header>
        <nav>
          <div>Name</div>
          <div>Search bar</div>
        </nav>
      </header>
    )
  }
})

module.exports = App
