import firebase from "firebase/app";
import Rebase from 're-base';
import 'firebase/database'


export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCrul1FcMjPWTYmkpCKn61mn2x7W2ABcO4",
     authDomain: "burgers-restaurants.firebaseapp.com",
    databaseURL: "https://burgers-restaurants-default-rtdb.europe-west1.firebasedatabase.app",


});

const base = Rebase.createClass(firebaseApp.database());


export default base;


