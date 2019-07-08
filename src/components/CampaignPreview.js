import React, { Component } from 'react'
import '../css/CampaignPreview.css'

export class CampaignPreview extends Component {
    render() {
        return (
            <div className='container overview'>
                <div className=''>
                <h4><a href='/'>My Campaign</a></h4>
                </div>
                <div className='preview-border'>
                    <div className='row'>
                        <div className='col-12 campaign-title'>
                            <h5>Campaign Title</h5>
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
