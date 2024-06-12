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
  apiKey: "AIzaSyCIPH4QFVUlKskHGUsefUSfb3H9IMrgujk",
  authDomain: "blm4538-ios2-db.firebaseapp.com",
  projectId: "blm4538-ios2-db",
  storageBucket: "blm4538-ios2-db.appspot.com",
  messagingSenderId: "137091528917",
  appId: "1:137091528917:web:f7bf05ecc87d0c5ba3ca5c",
  measurementId: "G-T6MV91KJ9L"
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

export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
