import React, { Component } from 'react';
import './App.css';
import QuickSend from "./SendQuick/QuickSend";
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
                <QuickSend />
            </div>
        )
    }
}

export default App;
