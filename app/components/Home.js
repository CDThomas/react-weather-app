var React = require('react')
var SearchContainer = require('../containers/SearchContainer')

function Home () {
  return (
    <div className="Home">
      <h1 className="Home__text">Enter a City and State</h1>
      <SearchContainer horizontal={false} />
    </div>
  )
}

module.exports = Home
