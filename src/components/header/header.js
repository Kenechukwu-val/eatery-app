import React, { Component } from 'react'
import './header.css'
import logo from '../../assests/images/logo.png'
import facebook from '../../assests/icons/facebook.svg'
import twitter from '../../assests/icons/twitter.svg'
import instagram from '../../assests/icons/instagram.svg'

export default class navbar extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="logo-box">
                        <img src={logo} alt="logo" className="logo" />
                    </div>

                    <nav className="navigation">
                        <ul className="navigation__list">
                            <li className="navigation__item">
                                <div className="item-box">
                                    <a href="/#" className="navigation__link">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                </div>
                            </li>

                            <li className="navigation__item">
                                <div className="item-box">
                                    <a href="/#" className="navigation__link">
                                        <img src={twitter} alt="twitter" />
                                    </a>
                                </div>
                            </li>

                            <li className="navigation__item">
                                <div className="item-box">
                                    <a href="/#" className="navigation__link">
                                        <img src={instagram} alt="instagram" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </header>

            </div>
        )
    }
}
