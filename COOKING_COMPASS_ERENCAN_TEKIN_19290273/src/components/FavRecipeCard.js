import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { colors, favRecipeList,imgList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useIsFocused } from "@react-navigation/native";

const FavRecipeCard = () => {

	const navigation = useNavigation();
	const isFocused = useIsFocused();
	//console.log("-RECIPE")
	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			const { setMyFavGlobalVariable } = require('../Global');
			//setMyFavGlobalVariable("all");
			//console.log("You are back");
		});

		return unsubscribe;
	}, [navigation]);

	const { getMyFavGlobalSearchVariable, getMyFavGlobalVariable } = require('../Global');
	//console.log("----"+getMyFavGlobalVariable());
	let filteredRecipeList = getMyFavGlobalVariable() === "all" 
		? favRecipeList 
		: favRecipeList.filter(item => item.category === getMyFavGlobalVariable());

	filteredRecipeList = getMyFavGlobalSearchVariable() === '' 
		? filteredRecipeList 
		: filteredRecipeList.filter(item => item.name.toLowerCase().includes(getMyFavGlobalSearchVariable().toLowerCase()));


	return ( 
		<View>
			<FlatList
				data={filteredRecipeList}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("RecipeDetail", { item: item })}
						style={styles.recipeItem}
					>
						<Image
							source={imgList.find(it => it.id === item.id).image}//{item.image}
							style={{ width: 150, height: 150, resizeMode: "center" }}
						/>
						
						<Text>{item.name}</Text>
						<View style={{ flexDirection: "row", marginTop: 8 }}>
							<Text>{item.time}</Text>

						</View>
					</Pressable>
				)}
				numColumns={2}
				columnWrapperStyle={{
					justifyContent: "space-between",
				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default FavRecipeCard;

const styles = StyleSheet.create({
	recipeItem: {
		backgroundColor: colors.COLOR_LIGHT,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 7,
		borderRadius: 16,
		marginVertical: 16,
		alignItems: "center",
		paddingHorizontal: 8,
		paddingVertical: 26,
	},
});
