import { View, Text,Button,TextInput, StyleSheet, Image , TouchableOpacity} from 'react-native';
import React, { useCallback, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getDoc, getFirestore, doc, setDoc, updateDoc } from 'firebase/firestore';
{/*import { KeyboardAvoidingView } from 'react-native-web';*/}
import { colors, favRecipeList, recipeList } from "../Constant";
import { getEmail, getFirebaseAUTH, getUsername, setEmail, setMyGlobalSearchVariable } from '../Global';
import Icon from 'react-native-vector-icons/Ionicons';

const SignInScreen = () => {
    const [username, setUsername] = useState(null);
    const [signInEmail, setSignInEmail] = useState(null);
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



    useFocusEffect(
        useCallback(() => {
            setSignInEmail('');
            setPassword('');
        }, [])
    );

    const signIn = async() => {
        setLoaded(true);
        try{
            //console.log(">Email:",signInEmail);
            //console.log(">Password:",password);
            const response = await signInWithEmailAndPassword(auth, signInEmail, password);
            
            
            
            recipeList.splice(0, recipeList.length); // reset
            favRecipeList.splice(0, favRecipeList.length); // reset

            //await addItemListToFirestore();
            /*const tempRecipeList = await fetchItemListFromFirestore();
            for(let index = 0; index < tempRecipeList.length; index++){
                recipeList.push(tempRecipeList[index]);
                console.log(recipeList[index].image);
            }*/

            const { setMyGlobalVariable, setMyFavGlobalVariable,setMyGlobalSearchVariable,setMyFavGlobalSearchVariable,setSelectedFavCategory, setEmail } = require('../Global');

            setMyGlobalVariable('All');
            setMyFavGlobalVariable('All');
            setMyGlobalSearchVariable('');
            setMyFavGlobalSearchVariable('');
            setSelectedFavCategory('All');

            const { fetchItemListFromFirestore, addItemListToFirestore } = require('../FirebaseDataOPs');

            //addItemListToFirestore("1","auto1ID", ["helloEren"])
            //addItemListToFirestore(email, "username", [username])

        
            const { getUsername, setUsername } = require('../Global');

            setUsername(await fetchItemListFromFirestore(signInEmail, "username"))
            //console.log(getUsername()[0]);
            setEmail(signInEmail);
            //console.log(getEmail());
            const tempRecipeList = await fetchItemListFromFirestore("MAIN_DATA", "data");
            for(let index = 0; index < tempRecipeList.length; index++){
                recipeList.push(tempRecipeList[index]);
            }

            const tempFavRecipeList = await fetchItemListFromFirestore(signInEmail, "favdata");
            for(let index = 0; index < tempFavRecipeList.length; index++){
                favRecipeList.push(tempFavRecipeList[index]);
            }
            navigation.navigate("RecipeList");

        }
        catch(error ){
            //console.log(error);
            alert('Sign in failed: ' + error.message);
        }
        finally{
            setLoaded(false);
        }
    }

    return(
        <View style = {styles.container}>

            <Image
				source={require("../../assets/images/main.png")}
				style={{ marginTop: -400 }}
			/>
            <Text
				style={{
					fontSize: 42,
					fontWeight: "bold",
					color: "#3c444c",
					marginBottom: 40,
                    paddingLeft: 125,
                    justifyContent: 'center',
				}}
			>
				Sign In
			</Text>
            
            <TextInput value={signInEmail} style={styles.input} placeholder='Email' autoCapitalize="none" onChangeText={(text) => setSignInEmail(text)}></TextInput>
            <View style={styles.InputContainer}>
            <TextInput secureTextEntry ={!showPassword} value={password} style={styles.inputPass} placeholder='Password' autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>
            <TouchableOpacity onPress = { togglePasswordVisibility} style={styles.icon}>
                <Icon name={showPassword ? 'eye-off' : 'eye'} size={24} color="green"></Icon>
            </TouchableOpacity>
            </View>
            { isLoaded ?( unnecessary = true
            ):( <>
                <View style={styles.buttonSpacing} />
                <Button title="Sign In" color='#5bb450' onPress={()=>signIn()} />
                <View style={styles.buttonSpacing} />
                <Button title="Create an Account" color='#5bb450' onPress={() => navigation.navigate("SignUp")} />
                </>
            
            )}
           
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
        
    },
    InputContainer:{
        flexDirection: 'row',
        //paddingHorizontal: 10,
        marginBottom: 10,
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
        flex : 1,
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