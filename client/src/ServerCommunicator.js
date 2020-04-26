import React, { Component } from 'react';
import "./ServerCommunicator.css"
import "./App.css"

class ServerCommunicator extends Component{
    constructor() {
        super()
    }
    
    static checkIfCountry(userInput) {
        return fetch("https://alefgame.herokuapp.com/isCountry?countryName=" + userInput)
        .then(res => res.json())
        .then(inputJson => {
            return inputJson
        });
    }

    static checkIfCity(userInput) {
        return fetch("http://localhost:5000/isCity?cityName=" + userInput)
        .then(res => res.json())
        .then(inputJson => 
            {
                return inputJson
            });
    }

    render() {
        return (<div></div>)
    }
}

export default ServerCommunicator;