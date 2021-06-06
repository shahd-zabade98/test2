import  firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage"
const firebaseConfig = {
  apiKey: 'AIzaSyCxsHYk4whGNbBIMmrRftOYZ1yNhW_mGlw',
  authDomain: 'test-5ff17.firebaseapp.com',
  databaseURL: 'https://test-5ff17-default-rtdb.firebaseio.com/',
  projectId: 'test-5ff17',
  storageBucket: 'test-5ff17.appspot.com',
  messagingSenderId: '354581547095',
  appId: '1:354581547095:android:9fa0afbd51b26bd4effb12',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

  export { firebase} ;