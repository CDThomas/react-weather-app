var React = require('react')
var PropTypes = React.PropTypes

var ForecastContainer = React.createClass({
  propTypes: {
    routeParams: PropTypes.shape({
      city: PropTypes.string.isRequired
    }).isRequired
  },
  render: function () {
    return (
      <div>Forecast for {this.props.routeParams.city}</div>
    )
  }
})

module.exports = ForecastContainer
