import React, { Component } from 'react';
import GameManager from './GameManager.js';
import UserAnswer from "./UserAnswer.js"
import "./App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentTopic: "",
      currentLetter: "",
      userInput: "",
      didUserWin: null,
      gameState: null
    }

    this.updateCurrentTopic = this.updateCurrentTopic.bind(this)
    this.updateCurrentLetter = this.updateCurrentLetter.bind(this)
    this.updateUserInput = this.updateUserInput.bind(this)
    this.setUserState = this.setUserState.bind(this)
    this.setGameState = this.setGameState.bind(this)
  }

  updateCurrentTopic(currentTopic)  {
    this.setState(state => ({ currentTopic: currentTopic }));
  }

  updateCurrentLetter(currentLetter) {
    this.setState(state => ({ currentLetter: currentLetter}))
  }

  updateUserInput(userInput) {
    this.setState(state => ({ userInput: userInput}))
  }

  setUserState(userState) {
    this.setState(state => ({ didUserWin: userState})) 
  }

  setGameState(gameState) {
    if (gameState === true) {
      this.setState(state => ({ userInput: ""}))
    }
    this.setState(state => ({ gameState: gameState}))
  }

  render() {
    return (
      <div>
        <header className="game-header"><span className="game-title">ALEF</span><span className="author-name">By Melanie</span></header>
        <div className="main-ui">
          <GameManager maxAmountOfLetters={15} intervalDuration={50} updateCurrentTopic={this.updateCurrentTopic}
           updateCurrentLetter={this.updateCurrentLetter} userInput={this.state.userInput} setUserState={this.setUserState}
           setGameState={this.setGameState}/>
          <div className="bottom-section">
            <UserAnswer setUserState={this.setUserState} didUserWin={this.state.didUserWin} updateUserInput={this.updateUserInput}
             currentLetter={this.state.currentLetter} currentTopic={this.state.currentTopic} gameState={this.state.gameState}
             userInput = {this.state.userInput}/>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;