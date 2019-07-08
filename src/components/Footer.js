import React, { Component } from 'react'
import '../css/Footer.css'

export class Footer extends Component {
    render() {
        return (
            <header className="app-header">
                <div className='container'>
                    <div className='col'>
                        <div className='row'>
                            <div className='col-10'>
                                <h1 className="app-title">Dragon Lab</h1>
                            </div>
                            <div className='col-2'>
                                <button type="button" className="btn btn-primary float-right">Log In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
