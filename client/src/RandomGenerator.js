import React, { Component } from 'react';
import './RandomGenerator.css';

class RandomGenerator extends Component {
    constructor(props) {
        super()
        this.state = {
          currentLetter: "A",
          lettersGeneratedAmount: 0,
          currentTopic: ""
        }
      }
    
      generateRandomTopic() {
          const topics = ["Country", "City"]
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
        let lettersInterval = setInterval(
          function() {
            if (this.state.lettersGeneratedAmount > this.props.maxAmountOfLetters) {
              clearInterval(lettersInterval)
              this.setState((prevState) => {
                  return {
                      currentTopic: this.generateRandomTopic()
                  }
              })
            }
            else {
              this.startLettersSwitch()
            }
          }.bind(this),
          this.props.intervalDuration
        );
      }
    
      render() {
        return (
          <div className="random-elements"> 
            <div className="random-letter">{this.state.currentLetter}</div>
            <div className="random-topic">{this.state.currentTopic}</div>
          </div>
        );
      }

}

export default RandomGenerator;