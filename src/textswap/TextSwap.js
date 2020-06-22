import React, { Component } from 'react'
import {firestore} from '../common/firebase';
import TextSend from "./TextSend";

class TextSwap extends Component {

    constructor(props) {
        super(props);
        this.sendText = this.sendText.bind(this);
    }

    sendText(code, text) {
        firestore.collection('textSwap')
            .add({
                code: code,
                text: text
            }).then(res => console.log(res));
    }

    render() {
        return(
        <div>
            <TextSend sendText={this.sendText} />
        </div>
        )
    }
}

export default TextSwap;