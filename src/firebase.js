import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyAK7T3edlSw40kdWlN6XkVnX3N7M1DUI7M",
    authDomain: "netflix-react-app-cd910.firebaseapp.com",
    projectId: "netflix-react-app-cd910",
    storageBucket: "netflix-react-app-cd910.appspot.com",
    messagingSenderId: "1038337117369",
    appId: "1:1038337117369:web:42a41f10d3c155263a5f68",
    measurementId: "G-BQQH2P989C"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;