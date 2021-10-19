import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDFxFMS61HMiXkUHd7zJj5_AByJX5UkmDg",
  authDomain: "project-571742898086791774.firebaseapp.com",
  projectId: "project-571742898086791774",
  storageBucket: "project-571742898086791774.appspot.com",
  messagingSenderId: "679784031586",
  appId: "1:679784031586:web:54b5c856476db174f5383b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
