import * as firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBICxIz97MfF7fPmpDxp_9IyQPhbF4s1Oo",
    authDomain: "tienda-gaijin.firebaseapp.com",
    databaseURL: "https://tienda-gaijin-default-rtdb.firebaseio.com",
    projectId: "tienda-gaijin",
    storageBucket: "tienda-gaijin.appspot.com",
    messagingSenderId: "490933764082",
    appId: "1:490933764082:web:04a972fb37c12bad80756b",
    measurementId: "G-YD4TJBFT7G"
})

export function getFirebase(){
    return app
}

export function getFireStore(){
    return firebase.firestore(app)
}