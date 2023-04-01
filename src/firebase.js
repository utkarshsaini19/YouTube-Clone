import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAMoLR5bV_HyT0fbzqx0ODjBAO_KIg3BNI",
  authDomain: "utube-youtub.firebaseapp.com",
  projectId: "utube-youtub",
  storageBucket: "utube-youtub.appspot.com",
  messagingSenderId: "626089073303",
  appId: "1:626089073303:web:c0f4712fdf20db15cda7d2"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()