import React, { Component } from 'react'
import '../css/CharacterOverview.css'

export class CharacterOverview extends Component {
    render() {
        return (
            <div className='container character-overview'>
                <div className='character-name'>
                    <h3>Character Name</h3>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <button type="button" className="btn btn-primary">Character Stats</button>
                    </div>
                    <div className='col-2'>
                        <button type="button" className="btn btn-primary">Character Background</button>
                    </div>
                </div>
            </div>
        )
    }
}
