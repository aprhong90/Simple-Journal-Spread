import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCttWjC96w-C6aBqDt6CWABwDIS4F_nEDg",
  authDomain: "journal-spread.firebaseapp.com",
  projectId: "journal-spread",
  storageBucket: "journal-spread.appspot.com",
  messagingSenderId: "492212806230",
  appId: "1:492212806230:web:2604e92379274e4c44d1f7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app); //???
