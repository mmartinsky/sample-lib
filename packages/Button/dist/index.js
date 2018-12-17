function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
export default class Button extends Component {
  render() {
    return React.createElement("button", null, this.props.buttonText);
  }

}

_defineProperty(Button, "propTypes", {
  buttonText: PropTypes.string
});

_defineProperty(Button, "defaultProps", {
  buttonText: 'Click Me Again'
});