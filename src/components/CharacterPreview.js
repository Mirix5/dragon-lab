import React, { Component } from 'react'
import '../css/CharacterPreview.css'

export class CharacterPreview extends Component {
    render() {
        return (
            <div className='container character-overview '>
                <div className='character-name'>
                    <h4>My Character</h4>
                </div>
                <div className='preview-border'>
                    <div className='row'>
                        <div className='col-3'>
                            <img alt='class portrait' src='images/warlock_f.png' className='col-12'/>
                        </div>
                        <div className='col-9 preview-characteristics-title container'>
                            <div className='row'>
                                <div className='col-4'>
                                    <h5>Character Name</h5>
                                </div>
                                <div className='col-4 align-right'>
                                    <h5>Level 5</h5>
                                </div>
                                <div className='col-4'>
                                    <h5>Human Warlock</h5>
                                </div>
                            </div>
                            <div className='col-12 br'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
