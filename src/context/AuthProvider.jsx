import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user with register page
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user with login page
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observe the user state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email:userEmail};

      setUser(currentUser);
      console.log("current user status", currentUser);
      setLoading(false);

      if (currentUser) {
        console.log(loggedUser);

        axios.post('https://car-management-server-three.vercel.app/jwt',loggedUser,{withCredentials:true})
        .then((res) => {
          console.log("token response",res.data);
        });
      } else{
        axios.post('https://car-management-server-three.vercel.app/logout',loggedUser,{withCredentials:true})
        .then(res=>{
          console.log(res.data);
          
        })
      }
    });
    
    return () => {
      return unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logoutUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
