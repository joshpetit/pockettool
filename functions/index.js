const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const firestore = admin.firestore();

exports.aggregate = functions.firestore
    .document("textSwap/{textID}").onCreate(( async (snapshot, context) => {
        let code = snapshot.data().code;

        let doc = admin.firestore().collection('textSwap').doc('values')
        let docData = await doc.get();
        docData = docData.data();

        docData.values.push(code);
        const update = {
            values: docData.values
        }
        doc.set(update).catch((err)=>console.log(err))
    }))
