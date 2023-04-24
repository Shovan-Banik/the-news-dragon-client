// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-ruUFRifoHFZto_--5p8Ye4yMuny08jo",
  authDomain: "the-news-dragon-client-5a18d.firebaseapp.com",
  projectId: "the-news-dragon-client-5a18d",
  storageBucket: "the-news-dragon-client-5a18d.appspot.com",
  messagingSenderId: "785103419260",
  appId: "1:785103419260:web:140128695f2fd6ff86d6f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;