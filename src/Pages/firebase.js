// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxf4sU2lbhsmDm5mUmRwcSeq_xF7Qo7S8",
  authDomain: "dkadata-2e44e.firebaseapp.com",
  projectId: "dkadata-2e44e",
  storageBucket: "dkadata-2e44e.appspot.com",
  messagingSenderId: "883356820222",
  appId: "1:883356820222:web:fb639ee673b73868127baf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);