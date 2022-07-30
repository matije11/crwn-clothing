import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAu9yO5_KYsAykQh_-AqSLsYhUc-rGMoK4",
    authDomain: "crwn-clothing-27e90.firebaseapp.com",
    projectId: "crwn-clothing-27e90",
    storageBucket: "crwn-clothing-27e90.appspot.com",
    messagingSenderId: "407331837595",
    appId: "1:407331837595:web:c7cffef80f3baa5f90583e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// function for creating users when they sign in if they dont exists already
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); // reference to users document and specific user

    const userSnapshot = await getDoc(userDocRef); // getting the document from firestore 

    if (!userSnapshot.exists()) { // userSnapshot.exists() - checking with ! if user not exists (returns true or false)
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // if user doesnt exists setting the document and creating one
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }
        catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef; // returning the reference
}