import { View, Text,Button,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { getDoc, getFirestore, doc, setDoc, updateDoc } from 'firebase/firestore';
{/*import { KeyboardAvoidingView } from 'react-native-web';*/}
import { colors, recipeList, recipes_DB, favRecipeList } from "../Constant";
import { getUsername, setMyGlobalSearchVariable } from '../Global';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpScreen = () => {
    const [username, setSignUpUsername] = useState(null);
    const [signUpemail, setSignUpEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isLoaded, setLoaded] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { setFIREBASEGLOBAL,getFIREBASEGLOBAL } = require('../Global');
    const auth = getFIREBASEGLOBAL();//FIREBASE_AUTH;
    const navigation = useNavigation();

    let unnecessary = false;


    const signUp = async () => {
        setLoaded(true);

        if(username == null || username.trim().length == 0){
            alert("Please enter a username");
            setLoaded(false);
        }
        else{
            try{
                
                const response = await createUserWithEmailAndPassword(auth, signUpemail, password);
                //console.log(response);

                const { setMyGlobalVariable, setMyFavGlobalVariable,setMyGlobalSearchVariable,setMyFavGlobalSearchVariable,setSelectedFavCategory, setEmail, getEmail } = require('../Global');

                setMyGlobalVariable('All');
                setMyFavGlobalVariable('All');
                setMyGlobalSearchVariable('');
                setMyFavGlobalSearchVariable('');
                setSelectedFavCategory('All');

                const { fetchItemListFromFirestore, addItemListToFirestore } = require('../FirebaseDataOPs');

                addItemListToFirestore(signUpemail,"username", [username])
                const { setUsername } = require('../Global');

                setUsername([username])
                addItemListToFirestore(signUpemail,"data", recipes_DB)
                
                setEmail(signUpemail);
                //console.log(getEmail());

                recipeList.splice(0, recipeList.length); // reset
                favRecipeList.splice(0, favRecipeList.length); // reset


                const tempRecipeList = await fetchItemListFromFirestore(signUpemail, "data");
                for(let index = 0; index < tempRecipeList.length; index++){
                    recipeList.push(tempRecipeList[index]);
                }

                navigation.navigate("RecipeList");
            }
            catch(error){
                //console.log(error);
                alert('Sign Up failed: ' + error.message);
            }
            finally{
                setLoaded(false);
            }
        }
    }
    return(
        <View style = {styles.container}>
            <TextInput value={username} style={styles.input} placeholder='Username' autoCapitalize="none" onChangeText={(text) => setSignUpUsername(text)}></TextInput>
            <TextInput value={signUpemail} style={styles.input} placeholder='Email' autoCapitalize="none" onChangeText={(text) => setSignUpEmail(text)}></TextInput>
            <View style={styles.InputContainer}>
            <TextInput secureTextEntry={!showPassword} value={password} style={styles.inputPass} placeholder='Password' autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>
            <TouchableOpacity onPress = { togglePasswordVisibility} style={styles.icon}>
                <Icon name = {showPassword ? 'eye-off':'eye'} size={24} color="green"></Icon>
            </TouchableOpacity>
            
            </View>
            { isLoaded ?( unnecessary = true
            ):( <>
                <View style={styles.buttonSpacing} />
                <Button title="Sign Up" color='#5bb450' onPress={()=>signUp()} />
                <View style={styles.buttonSpacing} />
                <Button title="Return to Sign In Page" color = '#5bb450' onPress={() => navigation.navigate("SignIn")} />
                </>
            
            )}
           
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    InputContainer:{
        flexDirection:'row',
        marginBottom:10,
        alignItems:'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 0,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    inputPass: {
        flex: 1,
        marginVertical: 4,
        height: 50,
        borderWidth: 0,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    buttonSpacing:{
        height:20,
    }
});