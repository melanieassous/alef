import React, { Component } from 'react';
import './UserInput.css';

class UserInput extends Component {
    constructor(props) {
        super() 

        this.state = {
            input: "",
            currentTopic: props.currentTopic
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        const {value} = event.target 
        this.setState({
            input: value
        })
    }

    handleClick() {
        console.log(this.props.currentTopic)
        this.checkIfCity();
        this.checkIfCountry();
        //if (this.state.topic === "City")
    }

    checkIfCountry() {
        fetch("http://localhost:5000/isCountry?countryName=" + this.state.input)
        .then(res => res.json())
        .then(json => console.log(json));
    }

    checkIfCity() {
        fetch("http://localhost:5000/isCity?cityName=" + this.state.input)
        .then(res => res.json())
        .then(json => console.log(json));
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
