import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDXKpE0IIS0j4LRU_-w0pzLaLIQX33zcHw",
    authDomain: "quickride-backend.firebaseapp.com",
    projectId: "quickride-backend",
    storageBucket: "quickride-backend.appspot.com",
    messagingSenderId: "324648134614",
    appId: "1:324648134614:web:602a01291d16145d45e677",
    measurementId: "G-DVGKQ99VML"
  };
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
 

  export default firebase;