import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from '@mtm112/core';
import Ticker from "@mtm112/ticker";
import Grid from "@mtm112/grid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button buttonText='Hey Mike' />
          <Grid />
          <Ticker tickerText='Scrolling Scrolling SCROLLING'/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
