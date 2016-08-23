var React = require('react')
var PropTypes = React.PropTypes
var ForecastHeading = require('./ForecastHeading')

function ForecastDayItem (props) {
  return (
    <li className="ForecastDayItem" onClick={props.onDaySelect.bind(null, props.dailyForecast)}>
      <ForecastHeading dailyForecast={props.dailyForecast} />
    </li>
  )
}

ForecastDayItem.propTypes = {
  dailyForecast: PropTypes.object.isRequired,
  onDaySelect: PropTypes.func.isRequired
}

module.exports = ForecastDayItem
