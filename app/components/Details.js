var React = require('react')
var PropTypes = React.PropTypes
var ForecastHeading = require('./ForecastHeading')

function Details (props) {
  var description = props.dailyForecast.weather[0].description

  return (
    <div className="Details">
      <ForecastHeading dailyForecast={props.dailyForecast} />
      <h2 className="Details__cityName">{props.city}</h2>
      <ul className="Details__list">
        <li>{description}</li>
        <li>min temp: {Math.round(props.dailyForecast.temp.min)} degrees</li>
        <li>max temp: {Math.round(props.dailyForecast.temp.max)} degrees</li>
        <li>humidity: {props.dailyForecast.humidity}</li>
      </ul>
    </div>
  )
}

Details.propTypes = {
  dailyForecast: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = Details
