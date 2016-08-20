var React = require('react')
var PropTypes = React.PropTypes
var ForecastDayItem = require('./ForecastDayItem')

function ForecastDayList (props) {
  return (
    <div className="ForecastDayList">
      <h1 className="ForecastDayList__heading">{props.city}</h1>
      <p className="ForecastDayList__subtext">Select a day</p>
      <ul className="ForecastDayList__container">
        {props.dailyForecasts.map(function (dailyForecast, i) {
          return (
            <ForecastDayItem
              onDaySelect={props.onDaySelect}
              dailyForecast={dailyForecast}
              key={i} />
          )
        })}
      </ul>
    </div>
  )
}

ForecastDayList.propTypes = {
  dailyForecasts: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  onDaySelect: PropTypes.func.isRequired
}

module.exports = ForecastDayList
