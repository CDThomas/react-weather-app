var React = require('react')
var PropTypes = React.PropTypes
var Search = require('../components/Search')

var SearchContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  propTypes: {
    horizontal: PropTypes.bool
  },
  getDefaultProps: function () {
    return {
      horizontal: true
    }
  },
  getInitialState: function () {
    return {
      city: ''
    }
  },
  handleUpdateCity: function (e) {
    this.setState({
      city: e.target.value
    })
  },
  handleSubmitCity: function (e) {
    e.preventDefault()

    this.context.router.push('/forecast/' + this.state.city)
  },
  render: function () {
    return (
      <Search
        horizontal={this.props.horizontal}
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
        city={this.state.city} />
    )
  }
})

module.exports = SearchContainer
