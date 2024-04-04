// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJd0UvpfItvqhWeHONL_tyx8z0SbB8ai0",
  authDomain: "after-3-ba196.firebaseapp.com",
  projectId: "after-3-ba196",
  storageBucket: "after-3-ba196.appspot.com",
  messagingSenderId: "48019020090",
  appId: "1:48019020090:web:d30696df0156fa742ad803"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export la data

export const db = getFirestore(app)