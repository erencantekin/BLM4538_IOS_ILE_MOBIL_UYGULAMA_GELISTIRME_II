import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { categories, colors } from "../Constant";
import { useIsFocused } from "@react-navigation/native";

const CategoriesFilter = ({ onSelectCategory, selectedCategory }) => {
  const [selectedId, setSelectedId] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    setSelectedId(selectedCategory);
  }, [isFocused, selectedCategory]);

  const handleCategorySelect = (categoryId) => {
    onSelectCategory(categoryId);
    setSelectedId(categoryId);
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          const isSelected = selectedId === category.id;
          

          return (
            
            <TouchableOpacity
              key={category.id}
              onPress={() => handleCategorySelect(category.id)}
              style={[
                styles.categoryItem,
                isSelected && { backgroundColor: "#FF0000" },
                
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  isSelected && { color: colors.COLOR_LIGHT },
                ]}
              >
                {category.category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({
  categoryItem: {
    marginRight: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    marginVertical: 16,
    backgroundColor: colors.COLOR_LIGHT,
  },
  categoryText: {
    fontSize: 18,
    color: colors.COLOR_DARK,
  },
});
