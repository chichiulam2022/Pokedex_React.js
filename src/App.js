import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import Pokegame from "./Pokegame"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>My Pokémons</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <Pokegame />
      </div>
    )
  }
}
export default App;
