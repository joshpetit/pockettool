import React, { Component } from 'react'

let ghr = "https://github.com/joshpetit/pockettool";
let mcss = "https://materializecss.com/";
let fb = "https://firebase.google.com/";
let react = "https://reactjs.org/";

class Footer extends Component {

    render() {

        return (
            <div>
                <div className="card-panel collection">
                    <span className=" collection-header">Resources:</span>
                    <ul className="">
                        <li className="collection-item"><a href={ghr} className="waves-effect">Github Repository</a> -
                            Send a pull request if you have an idea
                        </li>
                        <li className="collection-item"><a href={mcss} className="waves-effect">Materialize CSS</a></li>
                        <li className="collection-item"><a href={react} className="waves-effect">React</a></li>
                        <li className="collection-item"><a href={fb} className="waves-effect">Firebase </a></li>
                    </ul>
                </div>

                <h3 className="title">About:</h3>
                <p className="large">I made this because I pretty consistently need to send a zoom link to
                    another device and sometimes don't have the necessary apps (Your Phone or KDE Connect) installed
                    on one of the devices. This just makes it easy to send a link without needing to download an entire
                    app. Obviously it can be used for other things like love letters, gourmet recipes, or your smash
                    poetry on
                    nuclear proton theory. Or just zoom links.</p>

                <span>DISCLAIMER: I do not guarantee that you'll receive your link, if you type in a code that someone else
        guesses they just beat you to it. I don't recommend sending extremely sensitive information through here
        (I guess you can't send a love letter lol). <br /> Big thanks to Liz, my 100% Board certified tester <br/></span>
                <br/>
            </div>
        )
    }

}

export default Footer;