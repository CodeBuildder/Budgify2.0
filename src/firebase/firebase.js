import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBfdStzFXDATuSy890264Ms0Xi0PancG0Q",
    authDomain: "budgify-theexpensemanager.firebaseapp.com",
    databaseURL: "https://budgify-theexpensemanager-default-rtdb.firebaseio.com",
    projectId: "budgify-theexpensemanager",
    storageBucket: "budgify-theexpensemanager.appspot.com",
    messagingSenderId: "376711627424",
    appId: "1:376711627424:web:fcde7a172b192b59b1bfc5",
    measurementId: "G-YYHDNS88H2"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'Kaushiks'
})