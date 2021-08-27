import { initializeApp } from "firebase/app";
import * as Auth from "firebase/auth";
import * as Firestore from "firebase/firestore";
import * as Storage from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// export const analytics = getAnalytics(app);
const firebaseConfig = {
  apiKey: "AIzaSyB_LBmvzUQWs0-uLBfoaLTzjAb9pBwSAK8",
  authDomain: "wanna-87d77.firebaseapp.com",
  projectId: "wanna-87d77",
  storageBucket: "wanna-87d77.appspot.com",
  messagingSenderId: "693119174146",
  appId: "1:693119174146:web:a2cb6bbfe75f05d153091b",
  measurementId: "G-Z5CLRSH3GV",
};

const firebase = initializeApp(firebaseConfig);

export { Firestore, Storage, Auth };
export default firebase;
