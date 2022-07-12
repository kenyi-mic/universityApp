import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.cardView} className="bg-gray-100 mx-10 my-5 flex-1">
      <Image style={styles.image} source={item?.image} />
      <View className="absolute bottom-10 m-10 left-5">
        <Text style={styles.itemTitle} className="text-white text-2xl mb-5">
          {item?.title}
        </Text>
        <Text style={styles.itemDescription}>{item?.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    shadowColor: "#000",
    shadowOpacity: 0.5,
    width: width - 20,
    height: height / 3,
    shadowOffset: { width: 0.5, height: 0.5 },
    elevation: 5,
  },

  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
  itemTitle: {
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowColor: "#000",
    elevation: 5,
  },
  itemDescription: {
    color: "white",
    fontSize: 12,
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowColor: "#000",
    fontSize: 12,
    elevation: 5,
  },
});

export default CarouselItem;
