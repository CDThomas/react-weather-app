var React = require('react')
var Link = require('react-router').Link
var SearchContainer = require('../containers/SearchContainer')

function Navbar () {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="navbar__title">Weather App</h1>
      </Link>
      <SearchContainer />
    </nav>
  )
}

module.exports = Navbar
