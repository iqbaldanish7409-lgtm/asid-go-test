import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyBqmC4cAPLtJBTleDbEMZv7wj9vlkVbvv4",

    authDomain: "asid-go-3afd0.firebaseapp.com",

    projectId: "asid-go-3afd0",

    storageBucket: "asid-go-3afd0.firebasestorage.app",

    messagingSenderId: "129600064128",

    appId: "1:129600064128:web:f2998dc2519780aba9f465"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
