import React, { Component } from 'react'
import '../css/Header.css'

export class Header extends Component {
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
                                <button type="button" className="btn btn-primary float-right">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}