import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: "https://fastfeedback-6cf0e.firebaseio.com",
  });
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };

// export default admin.firestore();
