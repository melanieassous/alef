import React, { Component } from 'react';
import RandomGenerator from './RandomGenerator.js';
import UserInput from "./UserInput.js"
import { Route, Switch } from 'react-router-dom';
import "./App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentTopic: ""
    }

    this.updateCurrentTopic = this.updateCurrentTopic.bind(this)
  }

  updateCurrentTopic(currentTopic)  {
    this.setState(state => ({ currentTopic: currentTopic }));
  }

  render() {
    return (
      <div className="main-page">
      <div className="main-ui">
          <RandomGenerator maxAmountOfLetters={15} intervalDuration={50} updateCurrentTopic={this.updateCurrentTopic}/>
          <UserInput currentTopic={this.state.currentTopic}/>
      </div>
      </div>
    );
  }
}

export default App;