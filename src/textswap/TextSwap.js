import React, { Component } from 'react'
import {firestore} from '../common/firebase';
import TextSend from "./TextSend";
import TextReceive from "./TextReceive";

class TextSwap extends Component {

    constructor(props) {
        super(props);
        this.sendText = this.sendText.bind(this);
        this.retrieveText = this.retrieveText.bind(this);
    }

    sendText(code, text) {
        firestore.collection('textSwap')
            .add({
                code: code,
                text: text
            }).then(res => console.log(res));
    }

    retrieveText(code) {
        return new Promise(((resolve, reject) => {

            let query = firestore.collection('textSwap').where('code', "==", code);

            query.get()
                .then(res =>{
                    if (res.docs[0]) {
                        let ans = res.docs[0].data();
                        let docId = res.docs[0].id;
                        console.log(docId)
                        firestore.collection('textSwap')
                            .doc(docId).delete()
                            .catch((err) => console.log(err))
                        resolve(ans);
                    } else {
                        reject('Text not Found')
                    }
                })
                .catch(err =>{
                    reject(err);
                })
        }))

    }

    render() {
        return(
        <div>
            <TextSend sendText={this.sendText} />
            <TextReceive retrieveText={this.retrieveText}/>
        </div>
        )
    }
}

export default TextSwap;