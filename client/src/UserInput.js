import React, { Component } from 'react';
import './UserInput.css';

class UserInput extends Component {

    constructor() {
        super() 

        this.state = {
            input: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        const {value} = event.target 
        this.setState({
            input: value
        })
        console.log(this.state)
    }

    handleClick() {
        // send to backend this.state.input
        console.log(this.state.input)
    }

    render() {
        return (
        <div className="input-elements">
            <input className="user-answer"
                name="userAnswer" 
                type="text"
                value={this.state.input}
                onChange={this.handleChange} 
                placeholder="Answer" 
            />
            <button className="send-button" onClick={this.handleClick}>SEND</button>
        </div>
    );
  }
}

export default UserInput;
