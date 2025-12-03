import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBs5-S26TJ3eSOEJFUfMgrMLJts-sfiwxo",
    authDomain: "nexa-a7929.firebaseapp.com",
    projectId: "nexa-a7929",
    storageBucket: "nexa-a7929.firebasestorage.app",
    messagingSenderId: "449012357466",
    appId: "1:449012357466:web:1fb2cb15e6fca7c6c3fb63",
    measurementId: "G-HB0T90G7MW"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
