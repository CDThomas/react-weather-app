var React = require('react')
var PropTypes = React.PropTypes

var DetailsContainer = React.createClass({
  propTypes: {
    routeParams: PropTypes.shape({
      city: PropTypes.string.isRequired
    }).isRequired
  },
  render: function () {
    return (
      <div>{this.props.routeParams.city} {this.props.location.state.forecast.dt}</div>
    )
  }
})

module.exports = DetailsContainer
