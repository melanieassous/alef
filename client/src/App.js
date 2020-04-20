import React, { Component } from 'react';
import RandomGenerator from './RandomGenerator.js';
import UserInput from "./UserInput.js"
import { Route, Switch } from 'react-router-dom';
import "./App.css"

class App extends Component {
  componentDidMount() {
    this.callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
}

callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
};

  render() {
    const App = () => (
        <div>
          <Switch>
            <Route exact path='/' component={UserInput}/>
          </Switch>
        </div>
      )

    return (
      <div className="main-ui">
        {/* <RandomGenerator maxAmountOfLetters={15} intervalDuration={50}/>
        <UserInput /> */}
        <Switch>
            <App/>
        </Switch>
      </div>
    );
  }
}

export default App;