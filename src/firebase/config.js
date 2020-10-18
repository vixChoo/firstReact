import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDPlKL32CYFyxPkmaFP1EGe2M8ADaKyIo4',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://react-2be19.firebaseio.com/',
  projectId: 'react-2be19',
  storageBucket: 'gs://react-2be19.appspot.com/',
  messagingSenderId: '349448068775',
  appId: '1:349448068775:android:a4793867806cc22c8e4582',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };