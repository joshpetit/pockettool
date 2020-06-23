import React, {Component} from 'react'
import {firestore} from '../common/firebase';
import TextSend from "./TextSend";
import TextReceive from "./TextReceive";

class QuickSend extends Component {

    constructor(props) {
        super(props);
        this.sendText = this.sendText.bind(this);
        this.retrieveText = this.retrieveText.bind(this);
    }

    sendText(code, text) {
        return new Promise(((resolve, reject) => {
            let query = firestore.collection('textSwap')
                .where('code', "==", code).limit(1);
            query.get().then(res => {
                    if (res.docs.length > 0) {
                        reject('Code is in use')
                    } else {
                        firestore.collection('textSwap')
                            .add({
                                code: code,
                                text: text
                            }).then( () => resolve("Text Stored! Will be deleted on first retrieval"))
                            .catch(err => console.log("Error storing Link: " + err))
                    }
                })
                .catch(err => {
                    console.log(err)
                })


        }))

    }

    retrieveText(code) {
        return new Promise(((resolve, reject) => {

            let query = firestore.collection('textSwap').where('code', "==", code);

            query.get()
                .then(res => {
                    if (res.docs[0]) {
                        let ans = res.docs[0].data();
                        let docId = res.docs[0].id;
                        firestore.collection('textSwap')
                            .doc(docId).delete()
                            .catch((err) => console.log(err))
                        resolve(ans);
                    } else {
                        reject('Text not Found')
                    }
                })
                .catch(err => {
                    reject(err);
                })
        }))

    }

    componentDidMount() {
        document.title = "QuickSend"
    }

    render() {
        return (
            <div>
                <TextSend sendText={this.sendText}/>
                <br/>
                <TextReceive retrieveText={this.retrieveText}/>
            </div>
        )
    }
}

export default QuickSend;