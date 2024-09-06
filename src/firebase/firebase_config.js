import { initializeApp } from 'firebase/app';

// Firebase Auth imports
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Firebase Firestore imports
import {
  collection,
  doc,
  setDoc,
  getDocs,
  // getDoc,
  // document,
  addDoc,
  getFirestore,
  query,
  where,
  updateDoc,
} from "firebase/firestore";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// Gets all data from USERS collection
const getUsers = async () => {
  const usersCol = collection(db, "users");
  const usersSnapshot = await getDocs(usersCol);
  const usersList = usersSnapshot.docs.map(doc => doc.data());
  return usersList;
};

// Gets a specific user data from user email
const getSpecificUserData = async (email) => {
  const usersCol = collection(db, "users");
  const q = query(usersCol, where("email", "==", email));
  const userSnapshot = await getDocs(q);
  const userList = userSnapshot.docs.map(doc => doc.data());
  return userList;
};

// Login
const signIn = async (data) => {
  try {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    return { status: "Signed in successfully" };
  } catch (error) {
    console.error("ERROR: " +  error);
    return { error: error };
  }
};

// Create account in firebase auth using email and password
const signup = (data) => {
  const email = data["email"];
  const password = data["password"];

  return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    push_signup(user, data);
    return user;
  });
};

// Push other data into firestore during signup
async function push_signup(user, data) {
  await setDoc(doc(db, "users", user.uid), {
    id: user.uid,
    name: data.name,
    email: data.email,
    birthdate: data.birthdate,
    balance: 0,
    type: "user",
  })
}

// Check specific user based on email
async function checkUser(email) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
}

// Sign out
async function sign_out() {
  await signOut(auth);
  console.log("Signed out successfully");
}

export { db, auth, getUsers, getSpecificUserData, checkUser, signIn, signup, sign_out };