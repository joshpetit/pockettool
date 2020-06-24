import React, {Component} from 'react'
import {firestore} from '../common/firebase';
import TextSend from "./TextSend";
import TextReceive from "./TextReceive";
import './QuickSend.css'
import Footer from "./Footer";
import logo from '../common/quicksend.svg'


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
                    reject('Please use another Code')
                } else {
                    firestore.collection('textSwap')
                        .add({
                            code: code,
                            text: text
                        }).then( () => resolve("Text Stored! Will be deleted on first retrieval"))
                        .catch(err => {
                            alert("Error storing Link, see console for details ")
                            console.log(err);
                        })
                }
            })
                .catch(err => {
                    alert("Error Querying Database, see console for details");
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
            <div className="container">
                <h4 className="brand-logo centered center ">QuickSend</h4>
                <div className='center-align '>
                    <p className="center ">Send Text and Links between devices. Codes and values expire after retrieval</p>
                    <button className='btn-small white hide-on-med-and-up'><a href='#textReceive' >Jump to Restore</a></button>
                </div>
                <div className="row">
                    <TextSend sendText={this.sendText}/>
                    <div className='center'>
                        <img className='hide-on-med-and-up center ' alt="Quick Send Logo centered center" src={logo} width={90} />
                    </div>
                    <TextReceive retrieveText={this.retrieveText}/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default QuickSend;