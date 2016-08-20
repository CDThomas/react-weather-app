var React = require('react')
var PropTypes = React.PropTypes
var ForecastDayItem = require('./ForecastDayItem')

function ForecastDayList (props) {
  return (
    <div>
      <h1>{props.city}</h1>
      <p>Select a day</p>
      {props.dailyForecasts.map(function (dailyForecast, i) {
        return (
          <ForecastDayItem
            dailyForecast={dailyForecast}
            key={i} />
        )
      })}
    </div>
  )
}

ForecastDayList.propTypes = {
  dailyForecasts: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = ForecastDayList
