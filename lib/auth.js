import React, { useState, useEffect, useContext, createContext } from "react";
import {
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  onIdTokenChanged,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { db, auth } from "./firebase";
import { createUser } from "./db";

const authContext = createContext();
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      const { token, ...userWithoutToken } = user;

      createUser(user.uid, userWithoutToken);
      setLoading(false);
      setUser(user);
      return user;
    } else {
      setLoading(false);
      setUser(false);
      return false;
    }
  };

  const signinWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
      .then((response) => {
        const credential = GithubAuthProvider.credentialFromResult(response);
        const token = credential.accessToken;
        handleUser(response.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((response) => {
        const credential = GoogleAuthProvider.credentialFromResult(response);
        const token = credential.accessToken;
        handleUser(response.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const signout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signinWithGitHub,
    signinWithGoogle,
    signout,
  };
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user.stsTokenManager.accessToken,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};
