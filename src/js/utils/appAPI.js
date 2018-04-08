const AppActions = require('../actions/AppActions');
const firebase = require('firebase');

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA6tshrYxaFEktSvcsq4GB2Tq4LyfG27xM",
  authDomain: "gallery-23e21.firebaseapp.com",
  databaseURL: "https://gallery-23e21.firebaseio.com",
  projectId: "gallery-23e21",
  storageBucket: "gallery-23e21.appspot.com",
  messagingSenderId: "171094164873"
});

module.exports = {
    saveVideo: function (video) {
      let database = firebaseApp.database();
      database.ref('videos').push(video);
    }
};