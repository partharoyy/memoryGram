import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyC7DL5C9TP1eTh5deFmQSZj6o0p0wCKtq0",
//     authDomain: "memorygram-74a05.firebaseapp.com",
//     projectId: "memorygram-74a05",
//     storageBucket: "memorygram-74a05.appspot.com",
//     messagingSenderId: "4041759752",
//     appId: "1:4041759752:web:e1ea920cef4b8acc8e45bd"
// };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectFirestore, projectStorage, timestamp };