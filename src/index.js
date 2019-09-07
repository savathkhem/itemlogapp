import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import * as firebase from 'firebase';

// THEME
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';

// FIREBASE
var firebaseConfig = {
    apiKey: "AIzaSyAZYLec00OoaJqs3ZnUxovgVHy0QFNoL74",
    authDomain: "itemlogapp-9a157.firebaseapp.com",
    databaseURL: "https://itemlogapp-9a157.firebaseio.com",
    projectId: "itemlogapp-9a157",
    storageBucket: "",
    messagingSenderId: "628887270649",
    appId: "1:628887270649:web:be2faa642968a5db715e28"
  };

// INITIALIZE FIREBASE
firebase.initializeApp(firebaseConfig);
const render = Component => {
ReactDOM.render(
      <MuiThemeProvider theme={muiTheme}>
        <Component />
      </MuiThemeProvider>,
document.getElementById('root')
  );
};

//RENDER ONCE
render (App);

// WEBPACK HOT MODULE REPLACEMENT API
if (module.hot) {
  module.hot.accept('./pages/App', () => {
    render(App);
  });
}
