import React, { Component } from 'react';
import './App.css';
import Board from './Board'
import { observe } from './Game';

class App extends Component {

  renderBoard = () => {
    return observe(knightPosition => <Board knightPosition={knightPosition} />)
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          {this.renderBoard()}
        </p>
      </div>
    );
  }
}

export default App;
