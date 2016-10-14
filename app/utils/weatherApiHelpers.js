var axios = require('axios')

var API_BASE_URL = 'http://api.openweathermap.org/data/2.5/'

var client = axios.create({
  baseURL: API_BASE_URL,
  params: {
    APPID: process.env.WEATHER_API_KEY,
    units: 'imperial'
  }
})

function getFiveDayForecast (city) {
  return client.get('/forecast/daily', {
    params: {
      q: city,
      cnt: 5 // number of days to get
    }
  })
}

var helpers = {
  getDailyForecasts: function(city) {
    return getFiveDayForecast(city)
      .then(function (response) {
        return response.data.list
      })
      .catch(function (err) {
        // eslint-disable-next-line no-console
        console.warn('Error fetching forecast', err)
      })
  }
}

module.exports = helpers
