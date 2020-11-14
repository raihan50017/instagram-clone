import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD2mQlTm1uegKvCx9xKrzLZnwA2dFQq_7Y",
    authDomain: "instagram-clone-43698.firebaseapp.com",
    databaseURL: "https://instagram-clone-43698.firebaseio.com",
    projectId: "instagram-clone-43698",
    storageBucket: "instagram-clone-43698.appspot.com",
    messagingSenderId: "607383834587",
    appId: "1:607383834587:web:0a2e748e52487be8ac21fe"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};