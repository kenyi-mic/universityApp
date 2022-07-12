import { View, Text, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";

const { height, width } = Dimensions.get("window");

const Carousel = () => {
  height =
    height || Dimensions.addEventListener("height", () => height.toFixed(2));
  return <View></View>;
};

export default Carousel;
