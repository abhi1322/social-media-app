// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9gIW91tO-5njbQGY9RBzCgXVbUdWOHYU",
  authDomain: "socialmedia-circle.firebaseapp.com",
  projectId: "socialmedia-circle",
  storageBucket: "socialmedia-circle.appspot.com",
  messagingSenderId: "392007012126",
  appId: "1:392007012126:web:7e6f11e3d61a62c3e0430f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };