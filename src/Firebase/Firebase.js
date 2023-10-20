import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoYFtuVc0IPUySHoJyiOI4Ne5Gds9eXQ4",
  authDomain: "assignment-10-477e9.firebaseapp.com",
  projectId: "assignment-10-477e9",
  storageBucket: "assignment-10-477e9.appspot.com",
  messagingSenderId: "998169127286",
  appId: "1:998169127286:web:f08b1936ae5d4cf887b257"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;