var React = require('react')

var Search = React.createClass({
  render: function () {
    return (
      <div>
        <form>
          <input className="Search__input" type="text" placeholder="City, state" />
          <button type="submit" className="btn">
            Get Weather
          </button>
        </form>
      </div>
    )
  }
})

module.exports = Search
