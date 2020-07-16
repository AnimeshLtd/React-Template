import * as React from "react"
import { hot } from "react-hot-loader"

import "./app.css"

class App extends React.Component {
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
