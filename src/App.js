import React, { Component } from 'react'
import { Header } from './components/Header'
import { CharacterOverview } from './components/CharacterOverview'
import './css/bootstrap/css/bootstrap.css'
import './css/App.css'
import './css/index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CharacterOverview />
      </div>
    )
  }
}

export default App
