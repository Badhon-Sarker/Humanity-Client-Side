import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState([])

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
            
        })
        return () =>{
            unSubscribe()
        }
      },[])

    const Register =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const LoginEmail = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    const GoogleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const GithubLogin =()=>{
        return signInWithPopup(auth, githubProvider)
    }

    const Logout = () =>{
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
        Logout

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