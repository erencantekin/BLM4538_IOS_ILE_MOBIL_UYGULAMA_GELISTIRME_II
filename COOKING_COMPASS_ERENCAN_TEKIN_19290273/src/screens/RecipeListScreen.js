import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { useNavigation } from "@react-navigation/native";

const RecipeListScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const navigation = useNavigation();

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    //console.log(">>",selectedCategory);
    console.log(">=" , categoryId);
    const { getMyGlobalVariable, setMyGlobalVariable } = require('../Global');
    if(categoryId != "00"){
    setMyGlobalVariable(categoryId)
    }
    else{
      console.log("In Else")
      setMyGlobalVariable("all")
    }
  };


  const handleSearch = (text) => {
    setSearchInput(text);
    console.log("-----",text);
  };

  return (
	
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginVertical: 50 }}>
      {/* render header */}
      <View style={styles.container}>
        <View style={styles.header}>
            <Header headerText={"Hi, Eren "} /*headerIcon={"bell-o"}*/ />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Welcome")}>
              <Text style={styles.buttonText}>Favourites</Text>
            </TouchableOpacity>
        </View> 
      </View>
      

      {/* Search Filter */}
      <SearchFilter icon="search" placeholder={"enter your fav recipe"} onSearch={handleSearch}/>


      {/* Categories filter */}
      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        {/* Categories list */}
        {console.log("In here")}
        
        <CategoriesFilter
          onSelectCategory={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
      </View>

      {/* Recipe List Filter */}
      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
        {/* Recipes list */}
        {selectedCategory ? (
          <RecipeCard category={selectedCategory} searchInput={searchInput} />
        ) : (
          <>
            {/* Show all recipes */}
            <RecipeCard category={"all"} searchInput={searchInput} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;

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
