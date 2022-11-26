import { db } from "./firebase";
import { collection, doc, setDoc, updateDoc, addDoc, deleteDoc } from "firebase/firestore";

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

  return addDoc(sitesCol, {...data});
}

export function updateSite(uid, data) {
  const sitesCol = collection(db, "sites");

  let siteRef = doc(sitesCol, uid);
  return updateDoc(siteRef, data);
}

export function deleteFeedback(id) {
  const feedbacksCol = collection(db, "feedback")
  return deleteDoc(doc(feedbacksCol, id));
}

export function updateFeedback(id, newValues) {
  const feedbacksCol = collection(db, "feedback");
  let feedbackRef = doc(feedbacksCol, id)
  return updateDoc(feedbackRef, newValues);
}
