import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const CarouselItem = () => {
  return (
    <View>
      <Image />
      <View>
        <Text
          style={styles.itemTitle}
          className="text-2xl text-white shadow-black mb-5 font-bold"
        >
          Title
        </Text>
        <Text
          className="text-white font-bold drop-shadow text-xl"
          style={styles.itemDescription}
        >
          Description
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: width - 20,
    height: height / 3,
    shadowOffset: { width: 0.5, height: 0.5 },
    elevation: 5,
  },
  image: {
    width: width - 20,
    height: height / 3,
  },
  itemTitle: {
    shadowOffset: { width: 0.8, height: 0.8 },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  itemDescription: {
    shadowOffset: { width: 0.8, height: 0.8 },
    elevation: 5,
  },
});

export default CarouselItem;
