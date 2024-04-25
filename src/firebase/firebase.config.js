// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0DdGJgFk5WeFOdNLonWkzc9xBK-cRL5U",
  authDomain: "first-apk-9a782.firebaseapp.com",
  databaseURL: "https://first-apk-9a782.firebaseio.com",
  projectId: "first-apk-9a782",
  storageBucket: "first-apk-9a782.appspot.com",
  messagingSenderId: "97985270567",
  appId: "1:97985270567:web:638969988cecbf89d54f02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
