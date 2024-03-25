import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyDGTF9oYXAi51ZEyIzJfmsJk38V5sneltE",
    authDomain: "fir-auth-490b1.firebaseapp.com",
    projectId: "fir-auth-490b1",
    storageBucket: "fir-auth-490b1.appspot.com",
    messagingSenderId: "570209605265",
    appId: "1:570209605265:web:ff72fa1846360a52465130",
    measurementId: "G-N0FDWZBM6P"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)
console.log(process.env)

export {app, auth}