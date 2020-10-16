import { firestore } from './firebase';

export const createUserDocument = async userData => {
    if(!userData) return;
    console.log(userData);
    const userDocRef = firestore.doc(`users/${userData.userId}`);

    const userSnapshot = await userDocRef.get();

    if(!userSnapshot.exists) {
        try {
            userDocRef.set({
                userName: userData.userName,
                userEmail: userData.userEmail,
                userId: userData.userId,
                userDOB: userData.userDOB,
                userSignedUpOn: new Date()
            });
        } catch(err) {
            console.log('Error Occurred:' +err);
        }
    }
    return userDocRef;
}