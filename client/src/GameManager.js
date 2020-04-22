import React, { Component } from 'react';
import './GameManager.css';
 
class GameManager extends Component {
    constructor(props) {
        super()
        this.state = {
          currentLetter: "",
          lettersGeneratedAmount: 0,
          currentTopic: "",
          gameState: "START"
        }
        this.isGameStarted = false;
      }

      startGame() {
        this.isGameStarted = true; //switch to false when loose/win??
        this.state.gameState = "NEXT";
        this.props.setUserState(null);
        this.props.setGameState(true);
        let lettersInterval = setInterval(
          function() {
            if (this.state.lettersGeneratedAmount > this.props.maxAmountOfLetters) {
              clearInterval(lettersInterval)
              var generatedTopic = this.generateRandomTopic()
              this.setState((prevState) => {
                  return {
                      currentTopic: generatedTopic,
                      lettersGeneratedAmount: 0
                  }
              })
              this.props.updateCurrentTopic(generatedTopic); 
            }
            else {
              this.setState((prevState => {
                return {
                  currentTopic: ""
                }
              }))
              this.startLettersSwitch()
            }
          }.bind(this),
          this.props.intervalDuration
        );
      }
    
      generateRandomTopic() {
          const topics = ["Country", "City"]
          return topics[Math.floor(Math.random() * topics.length)]
      }

      generateRandomLetter() {
        const totalAmountOfLetters = 26;
        let generatedLetter = String.fromCharCode( Math.floor(Math.random() * totalAmountOfLetters) + 97).toLocaleUpperCase();
        this.props.updateCurrentLetter(generatedLetter);
        return generatedLetter;
      }

      startLettersSwitch() {
        this.setState((prevState) => {
            return {
                currentLetter: this.generateRandomLetter(),
                lettersGeneratedAmount: prevState.lettersGeneratedAmount + 1
            }
          });
      }
      
      render() {
        let letterContainer;
        if (this.isGameStarted) {
          letterContainer = <div>
            <div className="letter-container"><header className="random-letter">{this.state.currentLetter}</header></div>
          </div> 
        }
        else {
          letterContainer = <div></div>
        }

        let buttonClass = this.state.gameState === "START" ? "button start-button" : "button next-button";
        return (
          <div>
            <a className={buttonClass} onClick={() => this.startGame()}>{this.state.gameState}</a>
            <div className="random-elements"> 
              {letterContainer}
              <br/><div className="topic-container"><div className="random-topic">{this.state.currentTopic}</div></div>
            </div>
          </div>
        );
      }

}

export default GameManager;