import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5J741k2oUYGmbmjsmjiX1HRZmhIQ8hwY",
    authDomain: "crwn-db-b96ce.firebaseapp.com",
    databaseURL: "https://crwn-db-b96ce.firebaseio.com",
    projectId: "crwn-db-b96ce",
    storageBucket: "crwn-db-b96ce.appspot.com",
    messagingSenderId: "693821135528",
    appId: "1:693821135528:web:323baff049452a80a2809d"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get()
    if(!snapShot.exists){
        
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.error('Error creating user ',error)            
        }
    }

    return userRef;
}
export default firebase;