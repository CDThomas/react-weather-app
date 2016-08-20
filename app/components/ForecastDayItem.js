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
    <div>
      <img src={fileUrl} alt={description} style={{height: 50, width: 50}} />
      <h2>{prettyDate}</h2>
    </div>
  )
}

ForecastDayItem.propTypes = {
  dailyForecast: PropTypes.object.isRequired
}

module.exports = ForecastDayItem
