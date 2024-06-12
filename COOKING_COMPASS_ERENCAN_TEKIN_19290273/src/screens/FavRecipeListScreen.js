import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import FavSearchFilter from "../components/FavSearchFilter";
import FavCategoriesFilter from "../components/FavCategoriesFilter";
import FavRecipeCard from "../components/FavRecipeCard";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const FavRecipeListScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const { getSelectedFavCategory, setSelectedFavCategory } = require('../Global');



  const navigation = useNavigation();

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    //console.log(">>",selectedCategory);
    //console.log(">=" , categoryId);
    const { getFavMyGlobalVariable, setMyFavGlobalVariable } = require('../Global');
    if(categoryId != "00"){
        setMyFavGlobalVariable(categoryId)
    }
    else{
      //console.log("In Else")
      setMyFavGlobalVariable("All")
    }
  };



  const handleSearch = (text) => {
    setSearchInput(text);
    //console.log("-----",text);
  };

  return (
	
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginVertical: 50 }}>
      {/* render header */}
      <View style={styles.container}>
        <View style={styles.header}>
            <Header headerText={"Favourites "} /*headerIcon={"bell-o"}*/ />
            <TouchableOpacity style={styles.button} onPress={
              () => { 
                navigation.goBack()
                setSelectedFavCategory(selectedCategory);
                //console.log("???????" + selectedCategory);
              }}>
                <FontAwesome name={"arrow-circle-left"} size={28} color="gray" />
            </TouchableOpacity>
        </View> 
      </View>
      

      {/* Search Filter */}
      <FavSearchFilter icon="search" placeholder={"Enter your favourite recipe"} onSearch={handleSearch}/>


      {/* Categories filter */}
      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        {/* Categories list */}
        {/*console.log("In here")*/}
        
        <FavCategoriesFilter
          onSelectCategory={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
      </View>

      {/* Recipe List Filter */}
      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
        {/* Recipes list */}
        {selectedCategory ? (
          <FavRecipeCard category={selectedCategory} searchInput={searchInput} />
        ) : (
          <>
            {/* Show all recipes */}
            <FavRecipeCard category={"All"} searchInput={searchInput} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default FavRecipeListScreen;

const styles = StyleSheet.create({
  container:{
    //alignItems:"center",
    //flexDirection:"row",
    //justifyContent:"space-between",
    //flex: 1,
    paddingHorizontal:0,
    marginTop:20
  },
  button:{
    backgroundColor:"white",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:15,
    position:'absolute',
    right:3,
    top:-10,
  },
  header:{
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  
});
