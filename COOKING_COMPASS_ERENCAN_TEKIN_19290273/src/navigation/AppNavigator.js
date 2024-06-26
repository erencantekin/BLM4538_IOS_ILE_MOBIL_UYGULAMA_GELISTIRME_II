import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import FavRecipeListScreen from "../screens/FavRecipeListScreen"
import SignInScreen from "../screens/SignInPage";
import SignUpScreen from "../screens/SignUpPage";









const Stack = createNativeStackNavigator();
const AppNavigator = () => {


	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="SignIn" component={SignInScreen} />
				<Stack.Screen name="SignUp" component={SignUpScreen} />
				<Stack.Screen name="RecipeList" component={RecipeListScreen} />
				<Stack.Screen name="RecipeDetail" component={RecipeDetailsScreen} />

				<Stack.Screen name="FavRecipeList" component={FavRecipeListScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;

const styles = StyleSheet.create({});
