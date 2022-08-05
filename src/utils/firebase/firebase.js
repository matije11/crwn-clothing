import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore';

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
export const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// one time function just for adding objects to collection 
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })

    await batch.commit();
    console.log('done')
}

// function for getting documents from categories collection
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

// function for creating users when they sign in if they dont exists already
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;

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
                createdAt,
                ...additionalInfo
            })
        }
        catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef; // returning the reference
}
// funciton for crating new user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}
// function for sign in user with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}
// function for sign out user
export const signOutUser = async () => await signOut(auth);
// function for auth state change listener (listens to state changes in context (user signed in or signed out))
export const onAuthStateChangedListener = (callback) => {
    if (!callback) return;

    onAuthStateChanged(auth, callback);
}