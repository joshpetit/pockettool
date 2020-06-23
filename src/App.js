import React, { Component } from 'react';
import './App.css';
import TextSwap from "./textswap/TextSwap";
import { auth } from "./common/firebase"


class App extends Component {

    componentDidMount() {
        auth.signInAnonymously().then(user=>{
            
        }).catch(err => {
                console.log(err)
            }
        )
    }


    render() {
        return(
            <div>
                <TextSwap />
            </div>
        )
    }
}

export default App;
