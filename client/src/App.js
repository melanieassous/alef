import React, { Component } from 'react';
import RandomGenerator from './RandomGenerator.js';
import UserInput from "./UserInput.js"
import { Route, Switch } from 'react-router-dom';
import "./App.css"

class App extends Component {
  constructor() {
    super()
  }


  render() {
    /**const App = () => (
        <div>
          <Switch>
            <Route exact path='/' component={UserInput}/>
          </Switch>
        </div>
      )**/

    return (
      <div class="main-page">
      <div className="main-ui">
          <RandomGenerator maxAmountOfLetters={15} intervalDuration={50}/>
          <UserInput isTopicGenerated/>
      </div>
      </div>
    );
  }
}

export default App;