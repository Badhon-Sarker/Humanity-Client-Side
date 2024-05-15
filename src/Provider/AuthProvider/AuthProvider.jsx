import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
            setLoading(false)
            
        })
        return () =>{
            unSubscribe()
        }
      },[])

    const Register =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const LoginEmail = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const GoogleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const GithubLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const Logout = () =>{
        setLoading(true)
        axios(`${import.meta.env.VITE_SITE}/logOut`,{
            withCredentials: true
        });
        return signOut(auth)
    }

    const updateUser = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
          })
      }



    const data = {
        user,
        Register,
        updateUser,
        LoginEmail,
        GoogleLogin,
        GithubLogin,
        Logout,
        loading

    }

    
    return (
        <div>

            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;