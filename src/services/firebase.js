import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDTm4_3Ts5aTGpYW6QLqE2jUqwASukdU3U",
  authDomain: "coder-54050.firebaseapp.com",
  projectId: "coder-54050",
  storageBucket: "coder-54050.appspot.com",
  messagingSenderId: "778588890692",
  appId: "1:778588890692:web:01bdaaa5e268091eec3e11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)