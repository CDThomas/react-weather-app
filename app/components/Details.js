var React = require('react')
var PropTypes = React.PropTypes
var ForecastHeading = require('./ForecastHeading')

function Details (props) {
  return (
    <div>
      <ForecastHeading dailyForecast={props.dailyForecast} />
      <h2>{props.city}</h2>
      <ul>
        <li>foo</li>
      </ul>
    </div>
  )
}

Details.propTypes = {
  dailyForecast: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = Details
