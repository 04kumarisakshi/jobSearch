import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDgHl3xvXwoOZWAH42StRFPOpNP7yBsrd8",
  authDomain: "job-search-ddb58.firebaseapp.com",
  projectId: "job-search-ddb58",
  storageBucket: "job-search-ddb58.appspot.com",
  messagingSenderId: "624244324133",
  appId: "1:624244324133:web:b7b53dc0e9f568bb690ccc",
  measurementId: "G-YKFM482FB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db};