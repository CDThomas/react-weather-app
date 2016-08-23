var React = require('react')
var PropTypes = React.PropTypes
var moment = require('moment')

function ForecastHeading (props) {
  var fileName = props.dailyForecast.weather[0].icon + '.svg'
  var fileUrl = './app/images/' + fileName
  var description = props.dailyForecast.weather[0].description

  var rawDate = props.dailyForecast.dt
  // Parse as Unix timestamp and format as "dayOfWeek, Month dayOfMonth"
  var prettyDate = moment(rawDate, 'X').format('dddd, MMM D')

  return (
    <div>
      <img src={fileUrl} alt={description} className="ForecastHeading__icon" />
      <h2 className="ForecastHeading__text">{prettyDate}</h2>
    </div>
  )
}

ForecastHeading.propTypes = {
  dailyForecast: PropTypes.object.isRequired
}

module.exports = ForecastHeading
