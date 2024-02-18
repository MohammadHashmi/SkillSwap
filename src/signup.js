import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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

let email = document.getElementById("email");
let password = document.getElementById("password");

let RegisterUser = evt => {
    evt.preventDefault();

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((credentials) => {
        console.log(email.value)
        console.log(password.value)
        console.log(credentials)
    })
    .catch((error) => {
        console.log(error.code)
        console.log(error.message)
    })
}

MainForm.addEventListener("submit", RegisterUser);