import { firestore, auth } from './firebase';

// Create a User Document in firestore

export const createUserDocument = async userData => {
    if(!userData) return;
    const userDocRef = firestore.doc(`users/${userData.userId}`);
    const userSnapshot = await userDocRef.get();
    if(!userSnapshot.exists) {
        try {
            await userDocRef.set({
                userName: userData.userName,
                userEmail: userData.userEmail,
                userId: userData.userId,
                userDOB: userData.userDOB,
                userSignedUpOn: new Date()
            });
        } catch(err) {
            console.log('Error Occurred:'+err);
        }
    }
    return userDocRef;
}

// Get the current loggedin user

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubsribe = auth.onAuthStateChanged(userAuth => {
        unsubsribe();
        resolve(userAuth);
      }, reject)
    })
}

// Get