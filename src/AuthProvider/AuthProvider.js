import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../Firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [seller, setSeller] = useState({});
    const [advertiseItems, setAdvertiseItems] = useState([]);
    const [reportedItems, setReportedItems] = useState({});
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const registerWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const editUserName = (name) =>{
        return updateProfile(auth.currentUser, name);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    const authInfo = {
        registerUser,
        logIn,
        logOut,
        user,
        loading,
        editUserName,
        registerWithGoogle,
        setSeller,
        seller,
        advertiseItems,
        setAdvertiseItems,
        setReportedItems,
        reportedItems
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;