function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
export default class Ticker extends Component {
  render() {
    return React.createElement("marquee", null, this.props.tickerText);
  }

}

_defineProperty(Ticker, "propTypes", {
  tickerText: PropTypes.string
});

_defineProperty(Ticker, "defaultProps", {
  buttonText: 'This is a scrolling bottom line'
});