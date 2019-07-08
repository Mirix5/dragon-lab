import React, { Component } from 'react'
import '../css/DungeonJournalPreview.css'

export class DungeonJournalPreview extends Component {
    render() {
        return (
            <div className='container overview'>
                <div className='row'>
                    <div className='col-12'>
                        <h4><a href='/'>Dungeon Journal</a></h4>
                    </div>
                </div>
                <div className='preview-border'>
                    <div className='row'>
                        <div className='col-1'>
                        </div>
                        <div className='col-3 latest-entry'>
                            <h5>Latest Entry</h5>
                        </div>
                        <div className='col-7 latest-entry-date'>
                            <h5>February 19, 2018</h5>
                        </div>
                        <div className='col-1'>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-1'>
                        </div>
                        <div className='col-10'>
                            <div className='col-12 br'></div>
                            <div className='col-12 spacer'></div>
                            <p>
                            Post-ironic pour-over fam shabby chic kickstarter hell of neutra squid chartreuse. 
                            Kickstarter raclette gastropub intelligentsia. Asymmetrical cray beard ethical 
                            iceland cornhole banh mi. Hammock artisan fingerstache, humblebrag ramps kinfolk
                             jianbing sriracha bitters coloring book meditation +1 hashtag. Truffaut literally 
                             enamel pin cold-pressed street art roof party raclette selfies waistcoat narwhal
                              intelligentsia 3 wolf moon everyday carry.
                            Bespoke pop-up marfa crucifix typewriter poke seitan la croix swag. Copper mug lumbersexual organic, blog
                            enamel pin craft beer four loko chillwave. Tousled adaptogen semiotics four loko scenester flannel glossier. 
                            Lo-fi sustainable plaid shabby chic swag microdosing knausgaard cliche gentrify neutra.
                            </p>
                        </div>
                        <div className='col-1'>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
