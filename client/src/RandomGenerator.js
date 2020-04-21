import React, { Component } from 'react';
import './RandomGenerator.css';
import randomcolor from "randomcolor"
import UserInput from "./UserInput"

class RandomGenerator extends Component {
    constructor(props) {
        super()
        this.state = {
          currentLetter: "",
          lettersGeneratedAmount: 0,
          currentTopic: ""
        }
      }

      startGame() {
        let lettersInterval = setInterval(
          function() {
            if (this.state.lettersGeneratedAmount > this.props.maxAmountOfLetters) {
              clearInterval(lettersInterval)
              var generatedTopic = this.generateRandomTopic()
              this.setState((prevState) => {
                  return {
                      currentTopic: generatedTopic
                  }
              })
              this.props.updateCurrentTopic(generatedTopic);
            }
            else {
              this.startLettersSwitch()
            }
          }.bind(this),
          this.props.intervalDuration
        );
      }
    
      //this.props.updateCurrentTopic(this.state.currentTopic);
      generateRandomTopic() {
          const topics = ["Country", "City"]
          this.props.updateCurrentTopic(this.state.currentTopic);
          return topics[Math.floor(Math.random() * topics.length)]
      }

      generateRandomLetter() {
        const totalAmountOfLetters = 26;
        return (String.fromCharCode( Math.floor(Math.random() * totalAmountOfLetters) + 97)).toLocaleUpperCase()
      }

      startLettersSwitch() {
        this.setState((prevState) => {
            return {
                currentLetter: this.generateRandomLetter(),
                lettersGeneratedAmount: prevState.lettersGeneratedAmount + 1
            }
          });
      }
    
      componentDidMount() {

      }
    
      render() {
        return (
          <div>
            <button onClick={() => this.startGame()}>START</button>
            <div className="random-elements"> 
              <div class="letter-container"><header className="random-letter">{this.state.currentLetter}</header></div>
              <div className="random-topic">{this.state.currentTopic}</div>
            </div>
          </div>
        );
      }

}

export default RandomGenerator;