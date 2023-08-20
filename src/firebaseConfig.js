import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCVA6ujJs8r4m9lWzcAtTJIF7_p_f-UcF0",
    authDomain: "dope-affirmations.firebaseapp.com",
    projectId: "dope-affirmations",
    storageBucket: "dope-affirmations.appspot.com",
    messagingSenderId: "1003000215102",
    appId: "1:1003000215102:web:3434d70fc9ff857989036f",
    measurementId: "G-8B0NLTQ1GZ"
  };

  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);