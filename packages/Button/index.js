import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css';

export default class Button extends Component {
  static propTypes = {
    buttonText: PropTypes.string
  }

  static defaultProps = {
      buttonText: 'Click Me'
  }

  render() {
    return (
      <button>{this.props.buttonText}</button>
    )
  }
}
