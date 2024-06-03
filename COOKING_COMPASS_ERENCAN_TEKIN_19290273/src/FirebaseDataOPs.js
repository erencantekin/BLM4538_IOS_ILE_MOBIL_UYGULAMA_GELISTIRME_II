import { View, Text,Button,TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
{/*import { ActivityIndicator } from 'react-native-web';*/}
import {FIRESTORE_DB,  FIREBASE_AUTH  } from '../App';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { getDoc, getFirestore, doc, setDoc, updateDoc } from 'firebase/firestore';
{/*import { KeyboardAvoidingView } from 'react-native-web';*/}
import { colors, recipeList } from "./Constant";


export const addItemListToFirestore = async (collectionName, documentIdName, addItemList) => {
    try {
        const docRef = doc(FIRESTORE_DB, collectionName, documentIdName);
        await setDoc(docRef, { items: addItemList });
        //console.log('List added successfully to Firestore!');
    } catch (error) {
        console.error('Error adding list to Firestore: ', error);
    }
}
export const fetchItemListFromFirestore = async (collectionName, documentIDName) => {
    try {
        const docRef = doc(FIRESTORE_DB, collectionName, documentIDName);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            const itemList = data.items || []; // Extract the items array from the document data
            //console.log('List retrieved successfully from Firestore:', itemList);
            return itemList;
        } else {
            console.log('No such document!');
            return []; // Return an empty array if the document doesn't exist
        }
    } catch (error) {
        console.error('Error fetching list from Firestore:', error);
        return []; // Return an empty array in case of error
    }
}