// Import the functions you need from the SDKs you need
import firebaseConfig from "@/config/firebase.config";
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export default messaging;
