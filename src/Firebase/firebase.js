import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvppfmHfOUQqOYae6XL7iZmpPp15YwAVc",
  authDomain: "expensify-app-7bc3b.firebaseapp.com",
  databaseURL: "https://expensify-app-7bc3b.firebaseio.com",
  projectId: "expensify-app-7bc3b",
  storageBucket: "expensify-app-7bc3b.appspot.com",
  messagingSenderId: "933026124546",
  appId: "1:933026124546:web:997db739bb4365c627e81b",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref("notes/-MBhbi5JzgkQwt8QL6g2").update({
//   time: "tomorrow",
// });

// database
//   .ref("Expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("Expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database.ref("Expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("Expenses").push({
//   descriptions: "rent",
//   amount: 450000,
//   note: "",
// });
// database.ref("Expenses").push({
//   descriptions: "Birthday",
//   amount: 100000,
//   note: "",
// });

// database.ref("notes").push({
//   note: "new course",
//   time: "today",
// });

// const firebasenotes = {
//   note1: {
//     id: 12,
//     title: "first note",
//     body: "this is my note",
//   },
//   note2: {
//     id: 13,
//     title: "second note",
//     body: "this is my note 2",
//   },
// };

// const notes = [];
// database.ref("notes").set(firebasenotes);

// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// database
//   .ref()
//   .set({
//     name: "tejas",
//     location: {
//       city: "satara",
//       state: "maharashtra",
//     },
//   })
//   .then(() => {
//     console.log("success");
//   })
//   .catch((err) => {
//     console.log("This failed", err);
//   });

// database
//   .ref("location/city")
//   .remove()
//   .then(() => {
//     console.log("data removed");
//   })
//   .catch((err) => {
//     console.log("Error removing data", err);
//   });

// database.ref().update({
//   name: "tejas sohoni",
//   "location/city": "mumbai",
// })
