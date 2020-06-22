const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const firestore = admin.firestore();

exports.aggregate = functions.firestore
    .document("textSwap/{textID}").onCreate(( async (snapshot, context) => {
        let code = snapshot.data().code;

        let doc = admin.firestore().collection('aggregation').doc('values')
        let docData = await doc.get();
        docData = docData.data();

        docData.values.push(code);
        const update = {
            values: docData.values
        }
        doc.set(update).catch((err)=>console.log(err))
    }))

exports.update = functions.firestore
    .document('textSwap/{textID}').onDelete(( async (snapshot,  context) =>{
        let code = snapshot.data().code;
        let doc = admin.firestore().collection('aggregation')
            .doc('values');
        let docData = await doc.get()

        let data = docData.data();

        let values = [];
        data.values.forEach( value =>{
            if (value !== code){
                values.push(value);
            }
        })
        const update ={
            values: values
        }

        doc.set(update)
            .catch(err => console.log(err));
    }))
