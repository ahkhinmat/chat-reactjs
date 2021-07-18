import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyBIwD0ctePYFGSi4knSHePVrac1UVkttTI",
    authDomain: "chapapp-21b52.firebaseapp.com",
    projectId: "chapapp-21b52",
    storageBucket: "chapapp-21b52.appspot.com",
    messagingSenderId: "264115989618",
    appId: "1:264115989618:web:0784ce30f9a9c4c7ac66eb",
    measurementId: "G-43E5H0G68J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth=firebase.auth();
  const db=firebase.firestore();
  export {db,auth};
  export default firebase;