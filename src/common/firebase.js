import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUfJw-i2k4BIxAE46v_sro-pcR1CETb3c",
    authDomain: "pockettool-84616.firebaseapp.com",
    databaseURL: "https://pockettool-84616.firebaseio.com",
    projectId: "pockettool-84616",
    storageBucket: "pockettool-84616.appspot.com",
    messagingSenderId: "226319336950",
    appId: "1:226319336950:web:536cae157e755243e473d7"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();