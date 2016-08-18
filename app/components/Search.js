var React = require('react')
var PropTypes = React.PropTypes
var classNames = require('classnames')

function Search (props) {
  var formClass = classNames({
    'Search': true,
    'Search--horizontal': props.horizontal
  })
  return (
    <div>
      <form onSubmit={props.onSubmitCity} className={formClass}>
        <input
          className="Search__input" 
          type="text"
          placeholder="City, state"
          value={props.city}
          onChange={props.onUpdateCity} />
        <button type="submit" className="btn">
          Get Weather
        </button>
      </form>
    </div>
  )
}

Search.propTypes = {
  horizontal: PropTypes.bool.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  onSubmitCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = Search
