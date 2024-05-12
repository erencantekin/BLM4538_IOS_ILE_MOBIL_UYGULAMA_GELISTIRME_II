import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";


const SearchFilter = ({ icon, placeholder, onSearch }) => {
  const [searchText, setSearchText] = useState(""); // State to hold search text

  const handleSearch = (text) => {
    setSearchText(text);
    // Call onSearch prop with the search text
	console.log("Search Text:", text); // Print search text to console

    onSearch(text);
	const { setMyGlobalSearchVariable } = require('../Global');
	setMyGlobalSearchVariable(text);
	
  };
  console.log("IN SEARCH");
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingVertical: 16,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginVertical: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
      }}
    >
      <FontAwesome name={icon} size={20} color="#f96163" />
      <TextInput
        style={{ paddingLeft: 8, fontSize: 16, color: "#808080" }}
        placeholder={placeholder}
        value={searchText}
        onChangeText={handleSearch} // Call this function on input change
		
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({});






