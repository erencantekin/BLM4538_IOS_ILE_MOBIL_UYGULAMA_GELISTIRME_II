import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Pressable } from "react-native";
import React, { useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";

const WelcomeScreen = ({ navigation }) => {

	//console.log("RECIPE")
	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			const { setMyGlobalVariable } = require('../Global');
			//setMyGlobalVariable("All");
			//console.log("You are back");
		});

		return unsubscribe;
	}, [navigation]);


	return (
		<View style={{ flex: 1, alignItems: "center", backgroundColor: '#8bca84' }}>

			
			<Image
				source={require("../../assets/images/main.png")}
				style={{ marginTop: -50 }}
			/>
			

			<Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
				Recipes Just For You
			</Text>

			<Text
				style={{
					fontSize: 42,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 44,
					marginBottom: 40,
				}}
			>
				Cooking Compass
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("SignIn")}
				style={{
					backgroundColor: "#5bb450",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Let's Go
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({

});
