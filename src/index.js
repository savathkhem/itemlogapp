import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAZYLec00OoaJqs3ZnUxovgVHy0QFNoL74",
    authDomain: "itemlogapp-9a157.firebaseapp.com",
    databaseURL: "https://itemlogapp-9a157.firebaseio.com",
    projectId: "itemlogapp-9a157",
    storageBucket: "",
    messagingSenderId: "628887270649",
    appId: "1:628887270649:web:be2faa642968a5db715e28"
  };
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
