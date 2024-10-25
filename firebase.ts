import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: 'AIzaSyBS2ptwUWae_VfCpGL2UuRTKJorq3EKBFw',
    authDomain: "naijaprime-customercare.firebaseapp.com",
    projectId: "naijaprime-customercare",
    storageBucket: "naijaprime-customercare.appspot.com",
    messagingSenderId: "376344767981",
    appId: "1:376344767981:web:5c4bebdf50db92ea378be4",
    measurementId: "G-C7Y23V2HPE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
