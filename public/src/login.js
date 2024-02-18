import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD7Z2vtdfh453x1PvhdnfI6vMB15szEB8I",
    authDomain: "skillswap-fcd5a.firebaseapp.com",
    databaseURL: "https://skillswap-fcd5a-default-rtdb.firebaseio.com",
    projectId: "skillswap-fcd5a",
    storageBucket: "skillswap-fcd5a.appspot.com",
    messagingSenderId: "970193320063",
    appId: "1:970193320063:web:a44c41421e2ebef9e5274a"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();
const dbref = ref(db);

let email = document.getElementById("email");
let password = document.getElementById("password");
let loginForm = document.getElementById("loginForm");

let SignInUser = evt => {
    evt.preventDefault();

    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((credentials) => {
        console.log(credentials)
        console.log("Sign in successful")
        window.location.href = "contracts.html"
    })
    .catch((error) => {
        console.log(error.code)
        console.log(error.message)
        console.log("Sign in failed")
    })
}

loginForm.addEventListener("submit", SignInUser);