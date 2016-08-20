var React = require('react')
var PropTypes = React.PropTypes
var moment = require('moment')

function ForecastDayItem (props) {
  var fileName = props.dailyForecast.weather[0].icon + '.svg'
  var fileUrl = './app/images/' + fileName
  var description = props.dailyForecast.weather[0].description

  var rawDate = props.dailyForecast.dt
  // Parse as Unix timestamp and format as "dayOfWeek, Month dayOfMonth"
  var prettyDate = moment(rawDate, 'X').format('dddd, MMM D')
  return (
    <li className="ForecastDayItem" onClick={props.onDaySelect.bind(null, props.dailyForecast)}>
      <img src={fileUrl} alt={description} className="ForecastDayItem__icon" />
      <h2 className="ForecastDayItem__text">{prettyDate}</h2>
    </li>
  )
}

ForecastDayItem.propTypes = {
  dailyForecast: PropTypes.object.isRequired,
  onDaySelect: PropTypes.func.isRequired
}

module.exports = ForecastDayItem
