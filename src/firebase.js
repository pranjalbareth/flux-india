import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyAnqkpWRik4XklsoWushmwRk98n86FvLs0",
//     authDomain: "sutra-india.firebaseapp.com",
//     projectId: "sutra-india",
//     storageBucket: "sutra-india.appspot.com",
//     messagingSenderId: "210960203297",
//     appId: "1:210960203297:web:de435908aa9d91b6a46d60",
//     measurementId: "G-78S9L4TCZ7"
// };

const firebaseConfig = {
    apiKey: "AIzaSyBVpHaDoFXjls95aAYHEdfY_Oz4-vcL31k",
    authDomain: "flux-india.firebaseapp.com",
    projectId: "flux-india",
    storageBucket: "flux-india.appspot.com",
    messagingSenderId: "511027911491",
    appId: "1:511027911491:web:07c87a09f3d5c50133edf6",
    measurementId: "G-8BSWNVXY5B"
};

const firebaseApp = firebase.initializeApp
(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage};