import React, { Component } from 'react';
import './UserAnswer.css';
import ServerCommunicator from './ServerCommunicator';

class UserAnswer extends Component {
    constructor(props) {
        super() 

        this.state = {
            input: "",
            needsAnimation: true 
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.keyPressed = this.keyPressed.bind(this)
    }

    handleChange(event) {
        const {value} = event.target 
        this.props.updateUserInput(value)
        this.setState({
            input: value
        })
    }

    handleClick() {
        if (this.state.input) {
            if (this.state.input.toLowerCase().startsWith(this.props.currentLetter.toLowerCase())) {
                if(this.props.currentTopic === "Country") {
                  ServerCommunicator.checkIfCountry(this.state.input).then(serverResponse => this.handleServerResponse(serverResponse));
                }
                else {
                    ServerCommunicator.checkIfCity(this.state.input).then(serverResponse => this.handleServerResponse(serverResponse));
                }
            }
            else {
                this.props.setUserState(false);
            }
        }
        else {
            this.props.setUserState(false);
        }
        this.setState({ needsAnimation: true})
      }

      keyPressed(event) {
        if (event.key === "Enter") {
            this.handleClick();
        }
      }

    handleServerResponse(serverResponse) {
        if (serverResponse["isCountry"] && serverResponse["isCountry"] === true 
        || serverResponse["isCity"] && serverResponse["isCity"] === true) {
            this.props.setUserState(true);
        }
        else {
            this.props.setUserState(false);
        }
    }

    render() {
        let result;
        if (this.props.didUserWin === true) {
            result = <div className={this.state.needsAnimation ? "user-won balldrop-div" : "user-won"}>NICE!</div> 
        }
        else if (this.props.didUserWin === false) {
            result = <div className={this.state.needsAnimation ? "user-lost shaking-div" : "user-lost"}>Nope :( Try again!</div>
        }
        if (this.state.needsAnimation) {
            setTimeout(() => { this.setState({ needsAnimation: false})}, 500)
        }
        let value = this.props.userInput === "" ? this.props.userInput : this.state.input;

        let answerUI;
        if (this.props.gameState) {
            answerUI =             
            <div className="input-elements">
            <input className="user-answer"
                name="userAnswer" 
                type="text"
                onChange={this.handleChange}
                onKeyPress={this.keyPressed} 
                value={value}
                placeholder="Answer" />
        <a className="button send-button" onClick={this.handleClick}></a>
        </div>
        }
        return (
        <div>
            {answerUI}
            {result}
        </div>
    );
  }
}

export default UserAnswer;
