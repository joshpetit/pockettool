import React, { Component } from 'react'
import logo from '../common/pockettoolsLogo.svg'

class Navigation extends Component {

    render() {

        return (
            <div className="nav-wrapper">
                <nav className="nav-content green">
                    <div className='container '>
                        <a href={'https://github.com/joshpetit/pockettool'}><img className="brand-logo center-align center" width={75} src={logo} /></a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;