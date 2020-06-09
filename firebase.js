import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4rnJToil5-I4ju3vvV7WgABs0Ctf9fO4",
  authDomain: "my-todo-app-25d1c.firebaseapp.com",
  databaseURL: "https://my-todo-app-25d1c.firebaseio.com",
  projectId: "my-todo-app-25d1c",
  storageBucket: "my-todo-app-25d1c.appspot.com",
  messagingSenderId: "172264781716",
  appId: "1:172264781716:web:49df0e49ebfdf89bec0181",
  measurementId: "G-8HB6K36670",
});

const db = firebaseApp.firestore();

export default db;


