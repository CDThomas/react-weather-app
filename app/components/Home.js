var React = require('react')
var Search = require('./Search')

var Home = React.createClass({
  render: function () {
    return (
      <div className="Home">
        <h1 className="Home__text">Enter a City and State</h1>
        <Search />
      </div>
    )
  }
})

module.exports = Home
