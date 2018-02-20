import React, { Component } from 'react'
import { Header } from './components/Header'
import { CharacterPreview } from './components/CharacterPreview'
import { CampaignPreview } from './components/CampaignPreview'
import './css/bootstrap/css/bootstrap.css'
import './css/App.css'
import './css/index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CharacterPreview />
        <CampaignPreview />
      </div>
    )
  }
}

export default App
