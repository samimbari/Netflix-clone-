import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC4ppHw7dgCPGD8PyMyrVw4JCkh_KQOf6M",
    authDomain: "netflix-clone-5a2ef.firebaseapp.com",
    projectId: "netflix-clone-5a2ef",
    storageBucket: "netflix-clone-5a2ef.appspot.com",
    messagingSenderId: "609034747426",
    appId: "1:609034747426:web:f23c06b7534c2122fb947b"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth};
  export default db;