var React = require('react')
var PropTypes = React.PropTypes
var weatherApiHelpers = require('../utils/weatherApiHelpers')
var ForecastDayList = require('../components/ForecastDayList')

var ForecastContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
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
  handleDaySelect: function (forecast) {
    this.context.router.push({
      pathname: '/details/' + this.props.routeParams.city,
      state: {
        forecast: forecast
      }
    })
  },
  render: function () {
    if (this.state.isLoading) return <p>Loading...</p>

    return (
      <ForecastDayList
        onDaySelect={this.handleDaySelect}
        city={this.props.routeParams.city}
        dailyForecasts={this.state.dailyForecasts} />
    )
  }
})

module.exports = ForecastContainer
