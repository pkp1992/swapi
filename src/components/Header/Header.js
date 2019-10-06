import React, {Component} from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                 Star DB
                </div>
                    <ul className="header_list">
                        <li>People</li>
                        <li>Planets</li>
                        <li>Starships</li>
                    </ul>
            </div>
        )
    }
}