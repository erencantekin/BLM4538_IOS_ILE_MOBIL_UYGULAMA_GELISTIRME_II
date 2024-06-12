import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Icon } from "@expo/vector-icons";

const RecipeListScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const { getFavMyGlobalVariable, setMyFavGlobalVariable, getUsername } = require('../Global');
  const { setMyFavGlobalSearchVariable } = require('../Global');

  const navigation = useNavigation();

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    //console.log(">>",selectedCategory);
    //console.log(">=" , categoryId);
    const { getMyGlobalVariable, setMyGlobalVariable } = require('../Global');
  
    setMyGlobalVariable(categoryId);
    
  /*
    if(categoryId != "00"){
    setMyGlobalVariable(categoryId)
    }
    else{
      console.log("In Else")
      setMyGlobalVariable("All")
    }*/
  };


  const handleSearch = (text) => {
    setSearchInput(text);
    //console.log("-----",text);
  };

  return (
	
    
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginVertical: 50 }}>
      <TouchableOpacity style={styles.button2} onPress={
        () => {
          navigation.navigate("SignIn")
        }
      }>
      <Text style={styles.buttonText}>Sign out</Text>
              
       </TouchableOpacity>
      {/* render header */}
      <View style={styles.container}>

        <View style={styles.header}>
            <Header headerText={"Hi, " + (getUsername()[0].length <= 10 ? getUsername()[0] : getUsername()[0].substring(0,10)+"...")} /*headerIcon={"bell-o"}*/ />
            <TouchableOpacity style={styles.button} onPress={
              () => {
                navigation.navigate("FavRecipeList")
                setMyFavGlobalVariable('All')
                setMyFavGlobalSearchVariable('')
              }
              }>
              <Text style={styles.buttonText}>Favourites</Text>
              
            </TouchableOpacity>

        </View> 
      </View>
      

      {/* Search Filter */}
      <SearchFilter icon="search" placeholder={"Enter your favourite recipe"} onSearch={handleSearch}/>


      {/* Categories filter */}
      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        {/* Categories list */}
        {/*console.log("In here")*/}
        
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
            <RecipeCard category={"All"} searchInput={searchInput} />
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
  button2:{
    backgroundColor:"white",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:15,
    position:'center',
    alignItems:"center",
    //right:240,
    //top:-20,
    width: '100%',
    justifyContent: 'center',
    flexDirection : 'row'
  },
  header:{
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  
});
