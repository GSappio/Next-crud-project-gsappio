import firebase from "firebase";
import 'firebase/firestore'

if(!firebase.app.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH.DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    })
}

export default firebase