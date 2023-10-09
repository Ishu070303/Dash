
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAM2SV-lPfxdMw9NzcMlo1R34twbdsMr4o",
  authDomain: "dashboard-7d805.firebaseapp.com",
  projectId: "dashboard-7d805",
  storageBucket: "dashboard-7d805.appspot.com",
  messagingSenderId: "239444643451",
  appId: "1:239444643451:web:f16aa37e30c7da3062dcde",
  measurementId: "G-84VREKW40C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);