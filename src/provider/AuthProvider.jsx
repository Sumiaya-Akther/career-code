import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const handleregister = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    };

    const handleLogin = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);

    };


    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };


    const googleLogin = async () => {
        setloading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
      };

    const logOut = () => {
        setloading(true);
        return signOut(auth);
    };



    const userInfo = {
        handleregister,
        user,
        setUser,
        handleLogin,
        googleLogin,
        logOut,
        updateUser,
        loading,
        setloading

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setloading(false);
        });
        return () => {
            unsubscribe();
        }

    }, []);

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
