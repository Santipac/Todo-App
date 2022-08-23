import { async } from '@firebase/util';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseAuth, FirebaseDB } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { uid, displayName, email, photoURL } = result.user;

    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    await updateProfile(FirebaseAuth.currentUser, { displayName });
    const { photoURL, uid } = resp.user;
    return {
      ok: true,
      photoURL,
      uid,
      email,
      displayName,
    };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = resp.user;

    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};


export const loadNotes = async (uid = '') =>{
  const collectionRef = collection(FirebaseDB, `${uid}/todo/tasks`)
  const docs = await getDocs(collectionRef)
  const tasks = []
  docs.forEach(doc => 
    
    tasks.push({id: doc.id, ...doc.data()})
    )
    
    return tasks
}