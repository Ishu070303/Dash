// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAWbX-8I_uhwZdQzZiDBFoTyQBcV-cH3c",
  authDomain: "auth-aee8a.firebaseapp.com",
  projectId: "auth-aee8a",
  storageBucket: "auth-aee8a.appspot.com",
  messagingSenderId: "827463414193",
  appId: "1:827463414193:web:48b88c0d4a3367618f8d90",
  measurementId: "G-9H591KR9TT"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(auth);

export { auth, provider }