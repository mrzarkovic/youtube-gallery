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
    },

    getVideos: function () {
      let database = firebaseApp.database();
        database.ref('videos').once('value', function (snapshot) {
            let videos = [];
            snapshot.forEach(function (childSnapshot) {
                let video = {
                    id: childSnapshot.key,
                    title: childSnapshot.val().title,
                    video_id: childSnapshot.val().video_id,
                    description: childSnapshot.val().description
                }
                videos.push(video);
            });
            AppActions.receiveVideos(videos);
        });
    }
};