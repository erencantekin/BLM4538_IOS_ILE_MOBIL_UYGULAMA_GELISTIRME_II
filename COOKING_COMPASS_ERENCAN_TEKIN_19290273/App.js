import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from './src/navigation/AppNavigator';
import { initializeApp } from 'firebase/app';
import { onAuthStateChanged,initializeAuth, getReactNativePersistence,getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyBXw8v3QCGGnhoby9AjMrpDnNCnH3crG6Y",
  authDomain: "authapp-a8326.firebaseapp.com",
  projectId: "authapp-a8326",
  storageBucket: "authapp-a8326.appspot.com",
  messagingSenderId: "73279438611",
  appId: "1:73279438611:web:2288784c80103eff5324e6",
  measurementId: "G-YJ758KQLPB"
};







export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
	  onAuthStateChanged(FIREBASE_AUTH, (user) =>{
		  //console.log('user',user);
      if(user != null){
        setUser(user);
      }
      else{
        setUser('');
      }
	  });
  }, []);
  return <AppNavigator />;
  
}

const { setFIREBASEGLOBAL,getFIREBASEGLOBAL } = require('./src/Global');

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
setFIREBASEGLOBAL(FIREBASE_AUTH);
//getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
