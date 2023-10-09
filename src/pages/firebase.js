import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAM2SV-lPfxdMw9NzcMlo1R34twbdsMr4o",
  authDomain: "dashboard-7d805.firebaseapp.com",
  projectId: "dashboard-7d805",
  storageBucket: "dashboard-7d805.appspot.com",
  messagingSenderId: "239444643451",
  appId: "1:239444643451:web:bceb8ca50fc53fd062dcde",
  measurementId: "G-PK2SB8D7EJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider }