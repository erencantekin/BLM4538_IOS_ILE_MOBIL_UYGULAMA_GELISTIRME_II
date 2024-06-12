import {
	
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Pressable,
	Dimensions,
	Button,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import {React, useState} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { favRecipeList, imgList } from "../Constant";

const RecipeDetailsScreen = ({ navigation, route }) => {
	
	
	const { item } = route.params;
	const addToFavourites = favRecipeList.some(i => i.id == item.id)
	const [buttonText, setButtonText] = useState(addToFavourites ? "Remove From Favourites" : "Add To Favourites");
	const handleButtonPress = async(addToFavourites) => {
		if(addToFavourites){
			const index = favRecipeList.findIndex(recipe => recipe.id === item.id);
			if(index != -1){
				favRecipeList.splice(index, 1);
			}
		}
		else{
			const index = favRecipeList.findIndex(recipe => recipe.id === item.id);
			if(index == -1){
				favRecipeList.push(item);
			}
		}


		//console.log("-----")
		//favRecipeList.some(i => console.log(i.id))
		//console.log("------")

		addToFavourites = !addToFavourites
		setButtonText(addToFavourites ? "Remove From Favourites" : "Add To Favourites");
		
		const { getEmail } = require('../Global');

		const { fetchItemListFromFirestore, addItemListToFirestore } = require('../FirebaseDataOPs');
		
		await addItemListToFirestore(getEmail(), "favdata", favRecipeList);

	};
	//console.log("Recipe Details");

	
	//console.log(addToFavourites)
	return (
		<View style={{ backgroundColor: item.color, flex: 1 }}>
			<SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 , marginVertical: 50 }}>
				<Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
					<FontAwesome name={"arrow-circle-left"} size={28} color="white" />
				</Pressable>

				{/*<FontAwesome name={"heart-o"} size={28} color="white" />*/}
			</SafeAreaView>
			<View
				style={{
					backgroundColor: "#fff",
					flex: 1,
					marginTop: 140,
					borderTopLeftRadius: 56,
					borderTopRightRadius: 56,
					alignItems: "center",
					paddingHorizontal: 16,
				}}
			>
				<View
					style={{
						// backgroundColor: "red",
						height: 300,
						width: 300,
						position: "absolute",
						top: -150,
						// marginBottom: 130,
					}}
				>
					<Image
						source={imgList.find(it => it.id === item.id).image}//{item.image}
						style={{
							width: "100%",
							height: "100%",
							resizeMode: "contain",
						}}
					/>
				</View>
				<View style={{ flex: 1,marginTop: 70, justifyContent: "center", alignItems: "center" }}>
				<TouchableOpacity
						 onPress={() => handleButtonPress(addToFavourites)} 
						 style={{
							backgroundColor: "#7d5fff",
							borderRadius: 25,
							paddingVertical: 20,
							width: "80%",
							alignItems: "center",
						}}
					>
						
						<Text style={{ fontSize: 15, color: "#fff", fontWeight: "500" }}>
							{ /*addToFavourites ? "Remove From List" : "Add To Favourites"*/buttonText }
								
						</Text>

					
				</TouchableOpacity>
    			</View>

				{/* Recipe Name */}
				<Text style={{ marginTop: -85, fontSize: 28, fontWeight: "bold" }}>
					{item.name}
				</Text>

				<View style={{ flex: 1 }}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{/* Recipe Description */}
						<Text style={{ fontSize: 20, marginVertical: 16 }}>
							{item.description}
						</Text>

						{/* Recipe Extra Details */}

						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								// width: "100%",
								// backgroundColor: "green",
							}}
						>
							<View
								style={{
									backgroundColor: "rgba(255, 0, 0, 0.38)",
									// paddingHorizontal: 16,
									paddingVertical: 26,
									borderRadius: 8,
									alignItems: "center",
									width: 100,
								}}
							>
								<Text style={{ fontSize: 40 }}>⏰</Text>
								<Text style={{ fontSize: 20, fontWeight: 400 }}>
									{item.time}
								</Text>
							</View>
							<View
								style={{
									backgroundColor: "rgba(135, 206, 235, 0.8)",
									// paddingHorizontal: 16,
									paddingVertical: 26,
									borderRadius: 8,
									alignItems: "center",
									width: 100,
									// marginHorizontal: 24,
								}}
							>
								<Text style={{ fontSize: 40 }}>🥣</Text>
								<Text style={{ fontSize: 20, fontWeight: 400 }}>
									{item.difficulty}
								</Text>
							</View>
							<View
								style={{
									backgroundColor: "rgba(255, 165, 0, 0.48)",
									// paddingHorizontal: 16,
									paddingVertical: 26,
									borderRadius: 8,
									alignItems: "center",
									width: 100,
								}}
							>
								<Text style={{ fontSize: 40 }}>🔥</Text>
								<Text style={{ fontSize: 20, fontWeight: 400 }}>
									{item.calories}
								</Text>
							</View>
						</View>

						{/* Recipe Ingredients  */}

						<View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
							<Text
								style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
							>
								Ingredients:
							</Text>

							{item.ingredients.map((ingredient, index) => {
								return (
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginVertical: 4,
										}}
										key={index}
									>
										<View
											style={{
												backgroundColor: "red",
												height: 10,
												width: 10,
												borderRadius: 5,
											}}
										></View>
										<Text style={{ fontSize: 18, marginLeft: 6 }}>
											{ingredient}
										</Text>
									</View>
								);
							})}
						</View>

						{/* Recipe Steps */}

						<View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
							<Text
								style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
							>
								Steps:
							</Text>

							{item.steps.map((step, index) => {
								return (
									<Text
										key={index}
										style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}
									>{`${index + 1} ) ${step}`}</Text>
								);
							})}
						</View>
					</ScrollView>
				</View>
			</View>
		</View>
	);
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({});