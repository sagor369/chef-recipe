import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'


 export const AuthContext = createContext()

 
 const PriveteRoute = ({children}) => {

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProgider = new GithubAuthProvider()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
   
    const handleSignIn = (email, password) =>
    {
       setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    const handleSignUp = (email, password) =>
    {
       setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
   
    const googleSign = () =>{
       setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }
    const githubSign = () =>{
       setLoading(true)
       return signInWithPopup(auth, githubProgider)
    }

    const logOut = () =>{
        signOut(auth).then(()=>{

        })
        .catch(error =>{

        })
    }
   
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, logUser => {

           setUser(logUser);
           setLoading(false);
       })
   
       return () => {
           unsubscribe();
       }
   }, [])
   
   console.log(user)
       const authInfo={
           handleSignIn,
           handleSignUp,
           googleSign,
           githubSign,
           loading,
           user,
           logOut,
           
   
       }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default PriveteRoute;