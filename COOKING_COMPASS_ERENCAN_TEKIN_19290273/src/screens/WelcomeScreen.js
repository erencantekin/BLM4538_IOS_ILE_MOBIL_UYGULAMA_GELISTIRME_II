import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Pressable } from "react-native";
import React, { useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";

const WelcomeScreen = ({ navigation }) => {

	console.log("RECIPE")
	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			const { setMyGlobalVariable } = require('../Global');
			//setMyGlobalVariable("all");
			console.log("You are back");
		});

		return unsubscribe;
	}, [navigation]);


	return (
		<View style={{ flex: 1, alignItems: "center" }}>

			<SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 , marginVertical: 50 }}>
				<Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
					<FontAwesome name={"arrow-circle-left"} size={28} color="white" />
				</Pressable>
			</SafeAreaView>
			<Image
				//source={require("../../assets/images/welcome1.png")}
				style={{ marginTop: 30 }}
			/>

			<Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
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
				Your Cooking Compass
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={{
					backgroundColor: "#f96163",
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

const styles = StyleSheet.create({});
