import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const CarouselItem = () => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>Title</Text>
        <Text style={styles.itemDescription}>Description</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    backgroundColor: "red",
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    width: width - 20,
    height: height / 3,
    shadowOffset: { width: 0.5, height: 0.5 },
    elevation: 5,
  },
  textView: {
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
  itemTitle: {
    color: "white",
    fontSize: 22,
    marginBottom: 5,
    fontWeight: "bold",
    shadowOffset: { width: 0.8, height: 0.8 },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowColor: "#000",
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
