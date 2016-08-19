var React = require('react')
var PropTypes = React.PropTypes
var weatherApiHelpers = require('../utils/weatherApiHelpers')

var ForecastContainer = React.createClass({
  propTypes: {
    routeParams: PropTypes.shape({
      city: PropTypes.string.isRequired
    }).isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      dailyForecasts: []
    }
  },
  componentDidMount: function () {
    var city = this.props.routeParams.city
    weatherApiHelpers.getDailyForecasts(city)
      .then(function (dailyForecasts) {
        this.setState({
          dailyForecasts: dailyForecasts,
          isLoading: false
        })
      }.bind(this))
  },
  render: function () {
    if (this.state.isLoading) return <p>Loading...</p>
    return (
      // TODO: render ForecastDayList made up of ForcastDay components
      <div>Forecast for {this.props.routeParams.city}</div>
    )
  }
})

module.exports = ForecastContainer
