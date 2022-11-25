import { db } from "./firebase";
import { collection, doc, setDoc, updateDoc, addDoc } from "firebase/firestore";

const userCollection = collection(db, "users");

export function updateUser(uid, data) {
  let userRef = doc(userCollection, uid)
  return updateDoc(userRef, data)
}

export function createUser(uid, data) {
    let userRef = doc(userCollection, uid)

    return setDoc(userRef, {uid, ...data})
}

export function createFeedback(data) {
  return addDoc(collection(db, "feedback"), {...data});
}

export function createSite(data) {
  const sitesCol = collection(db, "sites");

  return setDoc(sitesCol, {...data});
}
