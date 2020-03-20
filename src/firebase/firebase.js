import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCp7BseET-WAsOia0W51r2GoQJBLjdAcSA",
  authDomain: "expense-f5425.firebaseapp.com",
  databaseURL: "https://expense-f5425.firebaseio.com",
  projectId: "expense-f5425",
  storageBucket: "expense-f5425.appspot.com",
  messagingSenderId: "498019993385",
  appId: "1:498019993385:web:89452ea6cc1ca01d45d938"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
// database.ref().set({
//   name: "kartik"
// });
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, database as default, googleAuthProvider };
