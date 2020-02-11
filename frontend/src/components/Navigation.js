import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-info">
                <Link className="navbar-brand mb-0 h1" to="/" >SCRUM POKER</Link> 
            </nav>
        )
    }
}
