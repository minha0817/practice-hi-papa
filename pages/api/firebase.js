import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

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

// Initialize Realtime Database and get a reference to the sevice
const database = getDatabase(firebaseApp);

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
  onAuthStateChanged(firebaseAuth, async (user) => {
    const updateUser = user ? await teacherUser(user) : null;
    callback(updateUser);
  });
}

async function teacherUser(user) {
  return get(ref(database, "teachers")).then((snapshot) => {
    if (snapshot.exists()) {
      const teachers = snapshot.val();
      const isTeacher = teachers.includes(user.uid);
      return { ...user, isTeacher };
    }
    return user;
  });
}
