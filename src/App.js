import React, { Component } from 'react';
import './App.css';
import QuickSend from "./QuickSend/QuickSend";
import { auth } from "./common/firebase"
import Navigation from "./navigation/Navigation";


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
                <Navigation />
                <QuickSend />
            </div>
        )
    }
}

export default App;
