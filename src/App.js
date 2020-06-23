import React, { Component } from 'react';
import './App.css';
import SendQuick from "./SendQuick/SendQuick";
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
                <SendQuick />
            </div>
        )
    }
}

export default App;
