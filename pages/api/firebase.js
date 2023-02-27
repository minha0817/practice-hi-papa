import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(firebaseAuth, provider)
    .then((res) => {
      const user = res.user;
      console.log(user);
    })
    .catch(console.error);
}

export function logout() {
  return signOut(firebaseAuth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(firebaseAuth, (user) => {
    callback(user);
  });
}
