import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css';

export default class Ticker extends Component {
  static propTypes = {
    tickerText: PropTypes.string
  }

  static defaultProps = {
      buttonText: 'This is a scrolling bottom line'
  }

  render() {
    return (
      <marquee>{this.props.tickerText}</marquee>
    )
  }
}
