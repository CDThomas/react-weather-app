var React = require('react')
var PropTypes = React.PropTypes

var ForecastContainer = React.createClass({
  render: function () {
    return (
      <div>Forecast for {this.props.routeParams.city}</div>
    )
  }
})

module.exports = ForecastContainer
