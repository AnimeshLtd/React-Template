import React, { Component } from "react"
import { hot } from "react-hot-loader"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React!</h1>
        <img src="./images/copyleft.png" height="40"></img>
      </div>
    )
  }
}

export default hot(module)(App)
