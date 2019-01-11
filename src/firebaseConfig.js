import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAuKkYOT619bccFYzfAfhsFwvR9OO6SzDg",
  authDomain: "jho-simple-dues-manager.firebaseapp.com",
  databaseURL: "https://jho-simple-dues-manager.firebaseio.com",
  projectId: "jho-simple-dues-manager",
  storageBucket: "jho-simple-dues-manager.appspot.com",
  messagingSenderId: "155599170246"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({timestampsInSnapshots: true})


export default db;
