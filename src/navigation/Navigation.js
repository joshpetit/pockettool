import React, { Component } from 'react'
import logo from '../common/pockettoolsLogo.svg'

class Navigation extends Component {

    render() {

        return (
            <div className="nav-wrapper">
                <nav className="nav-content green">
                    <div className='container '>
                        <img className="brand-logo center-align center" width={75} src={logo} />
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;