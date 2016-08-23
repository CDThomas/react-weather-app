var React = require('react')
var PropTypes = React.PropTypes
var Details = require('../components/Details')

var DetailsContainer = React.createClass({
  propTypes: {
    routeParams: PropTypes.shape({
      city: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        forecast: PropTypes.object.isRequired
      }).isRequired
    }).isRequired
  },
  render: function () {
    return (
      <Details
        dailyForecast={this.props.location.state.forecast}
        city={this.props.routeParams.city} />
    )
  }
})

module.exports = DetailsContainer
