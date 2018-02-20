import React, { Component } from 'react'
import '../css/CharacterPreview.css'

export class CharacterPreview extends Component {
    render() {
        return (
            <div className='container character-overview overview'>
                <div className='character-name'>
                    <h4><a href='/'>My Character</a></h4>
                </div>
                <div className='preview-border'>
                    <div className='row'>
                        <div className='col-3'>
                            <img alt='class portrait' src='images/warlock_f.png' className='col-12'/>
                        </div>
                        <div className='col-8 preview-characteristics-title container'>
                            <div className='row'>
                                <div className='col-4'>
                                    <h5>Character Name</h5>
                                </div>
                                <div className='col-8 align-right'>
                                    <h5>Level 5 Human Warlock</h5>
                                </div>
                            </div>
                            <div className='col-12 br'>
                            </div>
                            <div className='row spacer'></div>
                            <div className='row'>
                                <div className='col-12'>
                                    <p>Art party mlkshk portland, hashtag irony knausgaard air plant farm-to-table cold-pressed. 
                                        Poke gentrify cronut iPhone four loko blue bottle knausgaard austin tousled 3 wolf moon 
                                        lomo disrupt fanny pack. Fam flexitarian narwhal cred tofu. Vaporware fingerstache 
                                        organic, quinoa ennui gochujang pok pok salvia venmo mustache before they sold out 
                                        jianbing squid stumptown food truck. Ramps food truck franzen woke, meggings palo santo 
                                        kombucha shoreditch tumeric +1 af thundercats slow-carb before they sold out. Migas 
                                        kogi pabst chartreuse, heirloom ugh pok pok tbh air plant vice wayfarers raw denim DIY 
                                        austin. Flexitarian live-edge YOLO you probably haven't heard of them, keffiyeh craft 
                                        beer quinoa coloring book la croix.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
